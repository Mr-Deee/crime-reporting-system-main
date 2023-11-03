/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import "./Signin.js";
import firebase from "../../../firebase";
import CircularProgress from '../../../components/circularprogress.js';

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import "firebase/compat/auth";

// import Homepage from "../Homepage.js";
import { Link, useNavigate } from "react-router-dom";




const SignIn = () => {


  const [showProgress, setShowProgress] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  const toggleProgress = () => {
    setShowProgress(!showProgress);
  
    // Simulate progress animation
    if (!showProgress) {
      let percentage = 0;
      const interval = setInterval(() => {
        percentage += 5;
        if (percentage > 100) {
          clearInterval(interval);
          setShowProgress(false);
        } else {
          setProgressPercentage(percentage);
        }
      }, 100);
    }
  };



  // const history = Link();
  // const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Step 2: Initialize loading state
  // const history  = useHistory();("");
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Sign-in successful, navigate to the next page
      navigate("/signup");
    } catch (error) {
      // Handle sign-in errors here
      setError(error.message);
      setLoading(false);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  const  onSubmit= async (e) =>{
    e.preventDefault();
    setLoading(true);
    try {
     const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/dashboard");
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    } 
    
    finally{
      setLoading(false);
    }

 
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" noValidate>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center"></div>
          {error && <div className="error-message">{error}</div>}
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
            <button className="btn btn-primary" onClick={onSubmit}>
              Submit
            </button>

            {/* Display a progress bar when loading */}
          {loading && <CircularProgress />}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
