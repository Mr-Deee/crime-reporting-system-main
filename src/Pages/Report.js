import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
import "./Report.css";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_ZTkkSPzOrXPA5n_lTcX0U3q16OS-_VU",
  authDomain: "crime-reporting-system-c4a7b.firebaseapp.com",
  projectId: "crime-reporting-system-c4a7b",
  storageBucket: "crime-reporting-system-c4a7b.appspot.com",
  messagingSenderId: "781871322055",
  appId: "1:781871322055:web:35597bab711f0f47f0bfe2",
  measurementId: "G-08E8GHRL5K",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Report = () => {
  const navigate = useNavigate();
  const [reporterName, setReporterName] = useState("");
  const [reporterPhone, setReporterPhone] = useState("");
  const [victimName, setVictimName] = useState("");
  const [victimPhone, setVictimPhone] = useState("");
  const [title, setTitle] = useState("");
  const [suspectName, setSuspectName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firebase
      await db.collection("crimeReports").add({
        title,
        reporterName,
        reporterPhone,
        victimName,
        victimPhone,
        suspectName,
        location,
        dateTime,
      });

      // Reset form fields
      setTitle("");
      setReporterName("");
      setReporterPhone("");
      setVictimName("");
      setVictimPhone("");
      setSuspectName("");
      setLocation("");
      setDateTime("");

      setShowPopup(true);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // const handleFetchData = async () => {
  //   try {
  //     // Fetch data from Firebase
  //     const snapshot = await db.collection("crimeReports").get();

  //     snapshot.forEach((doc) => {
  //       console.log(doc.id, "=>", doc.data());
  //     });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handlePopupClose = () => {
    setShowPopup(false);
    // Redirect to the homepage
    navigate("/");
  };

  return (
    <div className="crime-management">
      <h1>Crime Management System</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Case Title</label>
          <input
            value={title}
            type="text"
            className="form-control mt-1"
            placeholder="Give a brief title 
              eg.murder in my area"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <label>
          Reporter Name:
          <input
            type="text"
            value={reporterName}
            onChange={(e) => setReporterName(e.target.value)}
            required
          />
        </label>
        <label>
          Reporter Phone Number:
          <input
            type="tel"
            value={reporterPhone}
            onChange={(e) => setReporterPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Victim's Name:
          <input
            type="text"
            value={victimName}
            onChange={(e) => setVictimName(e.target.value)}
            required
          />
        </label>
        <label>
          Victim's Phone Number:
          <input
            type="tel"
            value={victimPhone}
            onChange={(e) => setVictimPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Suspect's Name:
          <input
            type="text"
            value={suspectName}
            onChange={(e) => setSuspectName(e.target.value)}
     
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={handleFetchData}>Fetch Data</button> */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Submission Successful!</h2>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
