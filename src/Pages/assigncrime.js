import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "./assigncrime.css";

const Assigncrime = () => {
  const [crimeReports, setCrimeReports] = useState([]);
  const [policeOfficers, setPoliceOfficers] = useState([]);
  const [assignedOfficers, setAssignedOfficers] = useState({});

  useEffect(() => {
    // Fetch crime reports from Firestore
    const fetchCrimeReports = async () => {
      try {
        console.log("Fetching crime reports...");
        const collectionRef = firebase.firestore().collection("crimeReports");
        const snapshot = await collectionRef.get();
        const crimeReportsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Crime reports data:", crimeReportsData);
        setCrimeReports(crimeReportsData);
      } catch (error) {
        console.error("Error fetching crime reports: ", error);
      }
    };

    // Fetch police officers from the "policeOfficers" database table
    const fetchPoliceOfficers = async () => {
      try {
        const officersCollectionRef = firebase.firestore.collection("policeOfficers");
        const snapshot = await officersCollectionRef.get();
        const officersData = snapshot.docs.map((doc) => doc.data().name);
        setPoliceOfficers(officersData);
      } catch (error) {
        console.error("Error fetching police officers: ", error);
      }
    };

    fetchCrimeReports();
    fetchPoliceOfficers();
  }, []);

  const handleOfficerSelect = (reportId, officerName) => {
    setAssignedOfficers((prevOfficers) => ({
      ...prevOfficers,
      [reportId]: officerName,
    }));
  };

  return (
    <div>
      <h2>Crime Reports:</h2>
      {crimeReports.length === 0 ? (
        <div>Loading crime reports...</div>
      ) : (
        <ul>
      {crimeReports.map((report) => (
        <li key={report.id}>
          <div className="card">
            <div className="card-content">
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
              <br />

              <div className="officer-dropdown">
                <label htmlFor={`officerSelect-${report.id}`}>Assign Officer:</label>
                <select
                  id={`officerSelect-${report.id}`}
                  value={assignedOfficers[report.id] || ""}
                  onChange={(e) => handleOfficerSelect(report.id, e.target.value)}
                >
                  <option value="">Select an Officer</option>
                  {policeOfficers.map((officer) => (
                    <option key={officer} value={officer}>
                      {officer}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </li>
      ))}

      </ul>
      )}
    </div>
  );
};
export default Assigncrime;
