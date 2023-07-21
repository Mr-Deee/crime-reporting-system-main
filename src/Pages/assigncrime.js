import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assigncrime.css"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Assigncrime = () => {
  const [user, setUser] = useState(null);
  const [crimeReports, setCrimeReports] = useState([]);
  const [policeMentors, setPoliceMentors] = useState([]);
  const [selectedMentorId, setSelectedMentorId] = useState('');
  useEffect(() => {
    // Check if there's a user logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        fetchCrimeReports();
        fetchPoliceMentors();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchCrimeReports = async () => {
    try {
      // Assuming your crime reports collection is named "crimeReports"
      const snapshot = await firebase.firestore().collection('crimeReports').get();
      const crimeReportsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCrimeReports(crimeReportsData);
    } catch (error) {
      console.error('Error fetching crime reports:', error);
    }
  };

  const fetchPoliceMentors = async () => {
    try {
      // Assuming your police mentors collection is named "policeMentors"
      const snapshot = await firebase.firestore().collection('policeMen').get();
      const policeMentorsData = snapshot.docs.map((doc) => doc.data());
      setPoliceMentors(policeMentorsData);
    } catch (error) {
      console.error('Error fetching police mentors:', error);
    }
  };

  const handlePoliceMentorChange = (event) => {
    const selectedMentorId = event.target.value;
    // Do something with the selected mentor ID, like updating state or performing an action
    // For example, you can set it to state and use it to filter the crimeReports array.
  };

  const filteredCrimeReports = selectedMentorId
    ? crimeReports.filter((report) => report.policeMentorId === selectedMentorId)
    : crimeReports;

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <div>
            <h3>Crime Reports</h3>
            <select onChange={handlePoliceMentorChange}>
              <option value="">Assign Police Man</option>
              {policeMentors.map((mentor) => (
                <option key={mentor.id} value={mentor.id}>
                  {mentor.name}
                </option>
              ))}
            </select>
            {filteredCrimeReports.map((report) => (
              <div key={report.id} className="Card">
                <h4>{report.title}</h4>
                <p>{report.description}</p>
                {/* Add other details of the crime report */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Please log in to view crime reports.</p>
      )}
    </div>
  );
};


export default Assigncrime;
