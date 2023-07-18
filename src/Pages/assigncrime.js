import React from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Assigncrime = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log("User signed out successfully");
      navigate("/"); // Redirect to the sign-in page after signing out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default Assigncrime;
