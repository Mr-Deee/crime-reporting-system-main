import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "./assigncrime.css";

const Assigncrime = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Firestore
    const fetchData = async () => {
      try {
        const collectionRef = firebase.firestore().collection("crimeReports");
        const snapshot = await collectionRef.get();
        const fetchedData = snapshot.docs.map((doc) => doc.data());
        setItems(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {items.map((item) => (
        <div key={item.id}>
          <div className="card">
            <div className="card-content">
              ReporterName : {item.reporterName}
              <br></br>
              ReporterPhone : {item.reporterPhone}
              <br></br>
              VictimName : {item.victimName}
              <br></br>
              VictimPhone : {item.victimPhone}
              <br></br>
              SuspectName : {item.suspectName}
              <br></br>
              Location : {item.location}
              <br></br>
              Date and Time : {item.dateTime}
              <br></br>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assigncrime;
