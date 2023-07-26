import React from "react";
import{Link}  from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="Welcome">
   
    <div className="texthi"> Welcome To the Crime Report System</div>
    <div className="textwel">See A Crime? Report it.</div>
    <div className="button-container">
     <button className="signup-button" ><Link to={'/report'} className="hero-button-link">Report a crime</Link></button>
     </div>
    </div>
   
  );
};

export default Homepage;
