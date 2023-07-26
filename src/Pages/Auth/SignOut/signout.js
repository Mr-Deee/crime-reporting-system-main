import React from "react";
import firebase from "../../../firebase"; // Import your Firebase configuration
import { NavLink } from "react-router-dom";

const SignOut = () => {
  const history = NavLink();

  const handleSignOut = async () => {
    try {
      // Sign out from Firebase
      await firebase.auth().signOut();

      // Redirect to the signup screen (replace "/signup" with your actual signup route)
      history.push("/signup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h2>Are you sure you want to sign out?</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;