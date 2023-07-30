import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { v4 as uuidv4 } from "uuid";

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

const Solvedcases = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("ClosedCases").get();
        const fetchedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Solved Cases</h1>
      <div className="card-container">
        {items.map((report) => (
          <div className="card" key={report.id}>
            <h1>Solved</h1>
            <strong>Case Title:</strong> {report.casetitle}
            <br />
            <strong>Reporter Name:</strong> {report.reporterName}
            <br />
            <strong>Reporter Phone:</strong> {report.reporterPhone}
            <br />
            <strong>Victim Name:</strong> {report.victimName}
            <br />
            <strong>Victim Phone:</strong> {report.victimPhone}
            <br />
            <strong>Suspect Name:</strong> {report.suspectName}
            <br />
            <strong>Location:</strong> {report.location}
            <br />
            <strong>Date and Time:</strong> {report.dateTime}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solvedcases;
