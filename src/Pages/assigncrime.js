import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "./assigncrime.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import { v4 as uuidv4 } from "uuid";

//import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const Assigncrime = () => {
  const navigate = useNavigate();
  const [crimeReports, setCrimeReports] = useState([]);
  const [crimeId, setCrimeId] = useState([]);
  const [policeOfficers, setPoliceOfficers] = useState([]);
  const [assignedOfficers, setAssignedOfficers] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  {
    /*const deleteAssignedRecord = async (reportId) => {
    try {
      const db = firebase.firestore();
      const assignedOfficersRef = db.collection("crimeReports");

      // Delete the assigned record using the assignmentId
      await assignedOfficersRef.doc(reportId).delete();

      console.log(`Assigned record with ID ${reportId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting assigned record:", error);
    }
  };*/
  }
  const handleAssign = async (reportId) => {
    try {
      const officerName = assignedOfficers[reportId];

      if (!officerName) {
        console.error("Please select an officer to assign.");
        return;
      }

      // Get a reference to the Firebase database and the table for assigned officers
      const db = firebase.firestore();
      const OpenedCasesRef = db.collection("crimeReports");

      const assignedOfficersRef = db.collection("OpenedCases");

      // Create a new document in the assignedOfficers table with a unique ID
      // Save the assignment data to Firebase
      await assignedOfficersRef.doc(reportId).set({
        officerName,
        crimeId,
        caseTitle:
          crimeReports.find((report) => report.id === reportId)?.title || "",
        location:
          crimeReports.find((report) => report.id === reportId)?.location || "",
        reporterName:
          crimeReports.find((report) => report.id === reportId)?.reporterName ||
          "",
        reporterPhone:
          crimeReports.find((report) => report.id === reportId)
            ?.reporterPhone || "",
        suspectName:
          crimeReports.find((report) => report.id === reportId)?.suspectName ||
          "",
        victimName:
          crimeReports.find((report) => report.id === reportId)?.victimName ||
          "",
        victimPhone:
          crimeReports.find((report) => report.id === reportId)?.victimPhone ||
          "",
      });
      //await assignedOfficersRef.doc(assignmentId).delete();
      const crimeReportsRef = db.collection("crimeReports");
      await crimeReportsRef.doc(reportId).update({
        trackCase: "pending",
        // You can set this status according to your needs.
      });

      // deleteAssignedRecord(reportId);

      // Optionally, you can show a success message or do other actions after the assignment
      setShowAlert(true);
      setAlertMessage("Assigned record deleted successfully.");
      console.log(
        `Officer "${officerName}" assigned to case "${
          crimeReports.find((report) => report.id === reportId)?.casetitle
        }"`
      );
    } catch (error) {
      console.error("Error assigning officer:", error);
    }
  };

  // Optionally, you can show a success message or do other actions after the assignment
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
        const officersCollectionRef = firebase
          .firestore()
          .collection("policeMen");
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

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase
      await firebase.auth().signOut();
      navigate("/signin");

      // Redirect to the signup screen (replace "/signup" with your actual signup route)

      //  } catch (error) {
      //    console.error("Error signing out:", error);
      //  }
      // Redirect to the login or signup screen (replace "/login" or "/signup" with the appropriate route)
      // Use react-router-dom's useHistory hook for navigation
      // history.push("/login"); // or history.push("/signup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h2>Crime Reports:</h2>
      <div className="cardsdiv">
        {" "}
        {/*<button className="signout-button" onClick={handleSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          Sign Out
  </button>*/}
      </div>
      {crimeReports.length === 0 ? (
        <div>Loading crime reports...</div>
      ) : (
        <ul>
          {crimeReports.map((report) => (
            <li key={report.id}>
              <div className="card">
                <div className="card-content">
                  <strong>Case Title:</strong> {report.title}
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
                  <br />
                  <div className="officer-dropdown">
                    <label htmlFor={`officerSelect-${report.id}`}>
                      Assign Officer:
                    </label>
                    <select
                      id={`officerSelect-${report.id}`}
                      value={assignedOfficers[report.id] || ""}
                      onChange={(e) =>
                        handleOfficerSelect(report.id, e.target.value)
                      }
                    >
                      <option value="">Select an Officer</option>
                      {policeOfficers.map((officer) => (
                        <option key={officer} value={officer}>
                          {officer}
                        </option>
                      ))}
                    </select>
                    <button onClick={() => handleAssign(report.id)}>
                      Assign
                    </button>
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
