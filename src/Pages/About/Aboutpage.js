import React from "react";
import "./about.css"
import Navbar from "../../components/navbar/Navbar";

const Aboutpage = () => {
  return(
  <div className="about-container">
    
      <div className="about-card">
        <h2>About Us</h2>
        <p>
        At CrimeWatch, we are committed to building safer communities through real-time crime reporting and efficient data analysis. Our platform is designed to empower citizens, law enforcement agencies, 
    and local authorities with the necessary tools to collaboratively tackle crime and enhance public safety.
        </p>
      </div>

 

      <div className="mission-card">
        <h2>Our Mission</h2>
        <p>Our mission is to bring your Reports directly to the police.</p>
      </div>

 
    </div>
  );
};

export default Aboutpage;
