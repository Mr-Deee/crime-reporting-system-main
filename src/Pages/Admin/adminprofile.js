// import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

// // Initialize Firebase with your configuration
// // const firebaseConfig = {
// //   // Your Firebase config object here
// // };

// // firebase.initializeApp(firebaseConfig);

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const currentUser = firebase.auth().currentUser;
//       if (currentUser) {
//         const userRef = firebase.database().ref(`policeMen/${currentUser.uid}`);
//         userRef.on("value", (snapshot) => {
//           const userData = snapshot.val();
//           setUser(userData);
//         });
//       }
//     };

//     fetchUserData();

//     return () => {
//       // Cleanup the event listener when the component unmounts
//       firebase.database().ref().off();
//     };
//   }, []);

//   return (
//     <div className="profile">
//       {user ? (
//         <div>
//           <h1>Welcome, {user.name}!</h1>
//           <p>Email: {user.email}</p>
//           {/* Additional user details can be displayed here */}
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// };

// const Menu = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="menu">
//       <button
//         className={activeTab === "profile" ? "active" : ""}
//         onClick={() => handleTabChange("profile")}
//       >
//         Profile
//       </button>
//       {/* Add more menu tabs here */}
//     </div>
//   );
// };

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>My App</h1>
// //       <Menu />
// //       <div className="content">
// //         <ProfilePage />
// //         {/* Add more content components based on menu selection */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;