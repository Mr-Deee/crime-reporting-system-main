import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from '../../../components/circularprogress.js';
// import validator from 'validator';

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
  const [error, setError] = useState("");
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();


  const handleSignup = async (event) => {
  event.preventDefault();
    setError(""); // Clear any previous errors
  setLoading(false);
    setShowPopup(false);


  // Check if any of the required fields are empty
  if (!name || !email || !password || !policerank) {
    setError("Please fill in all required fields.");
    return; // Prevent form submission
  }

    try{
      const userCredential=firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
   
      const docRef = await db.collection("policeMen").doc(user.id).add({
          name,
          email,
          password,
          policerank,
          userId: user.uid,
        });
        
        console.log("Document written with ID: ", docRef.id);
   
    } catch(error){
        setError(error.message);
        console.error(error); 
        setShowError(error.message);// Log the error for debugging
      }finally{
        setLoading(true);
     
        
      }
      setShowPopup(true);
  };

  const handleChange = (e) => {
    // const limit = 8;
    setPassword(e.target.value.slice())
    if(e.target.value.length < 8){  
      setShowError('Minimum Password length 8 characters')
    } 
  };

const validatefeilds=(e)=>{
  setName(e.target.value)
  if(name===null){

    setShowError("Enter Name ");

  }else if (password===null){
    setShowError("Enter Password")
  }else if(policerank===null){
    setShowError("Enter Police Rank")
  }
}
const validateEmail = (e) => {
  const emailValue = e.target.value;

  if (emailValue.trim() === '') {
    setShowError('Email field is empty');
  } else if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.com') === -1) {
    setShowError('Enter a valid Email! Both "@" and ".com" are required');
  } else if (emailValue.indexOf('@') > emailValue.lastIndexOf('.com')) {
    setShowError('Enter a valid Email! "@" should come before ".com"');
  } else {
    setShowError('Valid Email');
  }

  setEmail(emailValue);
};
  
  const handlePopupClose = () => {
    setShowPopup(false);
    // Redirect to the homepage
    navigate("/signin");
  
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
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
              onChange={(e) => validateEmail(e)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Police Rank</label>
            <input
              value={policerank}
              type="text"
              className="form-control mt-1"
              placeholder="Police Rank"
              onChange={(e) => setpolicerank(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={password}
              // maxLength={8}
              onChange={handleChange}
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
              disabled={loading}
              onClick={handleSignup}
            >
                 {loading ? "Signing Up..." : "Submit"}
            </button>
            <div>{showError}</div>
          </div>
           {/* Display error message if there is an error */}
           
          
          {/* Display a progress bar when loading */}
      
          <p className="text-center mt-2">
            {/* Forgot <a href="#">password?</a> */}
          </p>
        </div>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Signin Successful!</h2>
            <button onClick={handlePopupClose}>Go to next page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
