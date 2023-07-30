import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";

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
  return (
    <div>
      <h1>Pending Cases</h1>
      <div className="card-container">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* Add other data fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pendingcase;
