import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./assigncrime.css";
const Assigncrime = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore when the component mounts
    const fetchData = async () => {
      try {
        const collectionRef = db.collection("crimeReports");
        const snapshot = await collectionRef.get();
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Reports:</h2>

      {items.map((item) => (
        <li key={item.id}>
          <div className="card">
            <div className="card-content">
              {item.reporterName}
              <br></br>
              {item.reporterPhone}
              <br></br>
              {item.victimName}
              <br></br>
              {item.victimPhone}
              <br></br>
              {item.suspectName}
              <br></br>
              {item.location}
              <br></br>
              {item.dateTime}
              <br></br>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Assigncrime;
