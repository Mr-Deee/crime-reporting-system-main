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
  const [reportId, setreportId] = useState("");
  // const [id, setReporterID] = useState("");
  const [reporterPhone, setReporterPhone] = useState("");
  const [victimName, setVictimName] = useState("");
  const [victimPhone, setVictimPhone] = useState("");
  const [title, setTitle] = useState("");
  const [suspectName, setSuspectName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(reportId);

    try {
      // Generate a unique ID (timestamp + six-digit random string)
      const randomPart = Math.random().toString(36).substr(2, 6);
      const timestampPart = Date.now().toString().slice(-6); // Take the last 6 digits of the timestamp
      const id = timestampPart + randomPart;
      setreportId(id);
      // Save data to Firebase
      await db.collection("crimeReports").add({
        reportId,
        title,
        reporterName,
        reporterPhone,
        victimName,
        victimPhone,
        suspectName,
        location,
        dateTime,
        trackcase: ``,
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
          />
        </label>
        <label>
          Victim's Phone Number:
          <input
            type="tel"
            value={victimPhone}
            onChange={(e) => setVictimPhone(e.target.value)}
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
            <h6>
              This is your case ID Keep it to track case:<h2>|{reportId}|</h2>
            </h6>
            <h2>Submission Successful!</h2>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
