/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Signin.js";
import firebase from "../../firebase.js";

import "firebase/compat/auth";

import Homepage from "../Homepage.js";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // const history = Link();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const history  = useHistory();("");
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // If the user is signed in, navigate to the next page (e.g., dashboard)
        navigate("/assigncrime");
      }
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = () => {
    // Replace this with your actual sign-in logic using Firebase authentication
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sign-in successful, onAuthStateChanged will handle navigation
      })
      .catch((error) => {
        // Handle sign-in errors here
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" noValidate>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={handleSignIn}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
