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

const Pendingcase = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("OpenedCases").get();
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

  useEffect(() => {
    // Load data from the "OpenedCases" collection in Firestore
    const unsubscribe = db.collection("OpenedCases").onSnapshot((snapshot) => {
      const cases = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(cases);
    });

    // Unsubscribe from the snapshot listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleTransferCases = (reportId) => {
    // Find the specific case in the "OpenedCases" collection
    const caseToTransfer = items.find((report) => report.id === reportId);

    // Transfer the specific case to the "ClosedCases" collection
    if (caseToTransfer) {
      db.collection("ClosedCases").add(caseToTransfer);
    }
  };

  return (
    <div>
      <h1>Pending Cases</h1>
      <div className="card-container">
        {items.map((report) => (
          <div className="card" key={report.id}>
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
            <button onClick={() => handleTransferCases(report.id)}>
              Close or Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pendingcase;
