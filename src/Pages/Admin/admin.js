// import React, { useState, useEffect } from "react";
// // import firebase from "firebase/app";
// import "firebase/firestore";

// // Initialize Firebase with your configuration
// const firebaseConfig = {
//   // Your Firebase config object here
// };

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

// const AdminDashboard = () => {
//   const [crimeReports, setCrimeReports] = useState([]);
//   const [policeOfficers, setPoliceOfficers] = useState([]);
//   const [selectedOfficer, setSelectedOfficer] = useState({});

//   useEffect(() => {
//     // Fetch crime reports
//     const fetchCrimeReports = async () => {
//       const crimeReportsRef = firestore.collection("crimeReports");
//       const snapshot = await crimeReportsRef.get();
//       const reports = [];
//       snapshot.forEach((doc) => {
//         const report = doc.data();
//         report.id = doc.id;
//         reports.push(report);
//       });
//       setCrimeReports(reports);
//     };

//     // Fetch police officers
//     const fetchPoliceOfficers = async () => {
//       const officersRef = firestore.collection("users").where("role", "==", "police");
//       const snapshot = await officersRef.get();
//       const officers = [];
//       snapshot.forEach((doc) => {
//         const officer = doc.data();
//         officer.id = doc.id;
//         officers.push(officer);
//       });
//       setPoliceOfficers(officers);
//     };

//     fetchCrimeReports();
//     fetchPoliceOfficers();
//   }, []);

//   const handleAssignOfficer = async (crimeId) => {
//     if (selectedOfficer) {
//       await firestore.collection("crimeReports").doc(crimeId).update({
//         assignedOfficer: selectedOfficer.id,
//       });
//       // Reset selected officer after assignment
//       setSelectedOfficer({});
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {crimeReports.length > 0 ? (
//         crimeReports.map((report) => (
//           <div key={report.id} className="crime-card">
//             <h3>Crime Report: {report.id}</h3>
//             <p>Description: {report.description}</p>
//             <p>Location: {report.location}</p>
//             <p>Status: {report.status}</p>
//             <label>
//               Assigned Officer:
//               <select
//                 value={selectedOfficer.id || ""}
//                 onChange={(e) =>
//                   setSelectedOfficer(policeOfficers.find((officer) => officer.id === e.target.value) || {})
//                 }
//               >
//                 <option value="">Select Officer</option>
//                 {policeOfficers.map((officer) => (
//                   <option key={officer.id} value={officer.id}>
//                     {officer.name}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={() => handleAssignOfficer(report.id)}>Assign Officer</button>
//           </div>
//         ))
//       ) : (
//         <p>No crime reports found.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
