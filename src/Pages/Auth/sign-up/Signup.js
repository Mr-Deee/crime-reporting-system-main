import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link } from "react-router-dom";

// import "firebase/auth";
import "firebase/database";

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ZTkkSPzOrXPA5n_lTcX0U3q16OS-_VU",
  authDomain: "crime-reporting-system-c4a7b.firebaseapp.com",
  projectId: "crime-reporting-system-c4a7b",
  storageBucket: "crime-reporting-system-c4a7b.appspot.com",
  messagingSenderId: "781871322055",
  appId: "1:781871322055:web:35597bab711f0f47f0bfe2",
  measurementId: "G-08E8GHRL5K",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const firestore = firebase.firestore();
const db = firebase.firestore();

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [policerank, setpolicerank] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    // Create a new user with email and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        // Store additional user details in the database
        // firebase.database().ref("policeMen").push({
        //   name,
        //   email,
        //   userId: user.uid,
        // });
        // Redirect to the authentication page

        await db.collection("policeMen").doc(user.id).set({
          name,
          email,
          password,
          userId: user.uid,
        });
        window.location.href = "/signin";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignup}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary">
              <Link to="/signin">Sign In</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Police Rank</label>
            <input
              value={policerank}
              type="Police Rank"
              className="form-control mt-1"
              placeholder="Police Rank"
              onChange={(e) => setpolicerank(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              // onClick={SignUpPage}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            {/* Forgot <a href="#">password?</a> */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
