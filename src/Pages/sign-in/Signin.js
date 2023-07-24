/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Signin.js";
import firebase from "../../firebase.js";
import Homepage from "../Homepage.js";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // const history = Link();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const history  = useHistory();("");
  const navigate = useNavigate();
  // let [authMode] = useState("signin");
  const handleSignIn = async () => {
    try {
      // Sign in with email and password
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // User signed in successfully, navigate to the assigned crime page
      navigate("/assignedcrime");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
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

// return (
//   <div className="Auth-form-container">
//     <form className="Auth-form" noValidate>
//       <div className="Auth-form-content">
//         <h3 className="Auth-form-title">Sign In</h3>
//         <div className="text-center">
//           Already registered?{" "}
//           <span className="link-primary" onClick={changeAuthMode}>
//             Sign In
//           </span>
//         </div>
//         <div className="form-group mt-3">
//           <label>Full Name</label>
//           <input
//             type="email"
//             className="form-control mt-1"
//             placeholder="e.g Jane Doe"
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control mt-1"
//             placeholder="Email Address"
//             required
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label>Password</label>

// );
