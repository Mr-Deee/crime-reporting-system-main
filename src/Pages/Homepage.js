import React from "react";
import{Link}  from "react-router-dom"
import Hero from "../components/Herosection/Hero";

const Homepage = () => {
  return (
    <div className="Welcome">
   
    <div className="textwel"> Welcome To the Crome Report System</div>
    <div className="button-container">
     <button className="signup-button" ><Link to={'/report'} className="hero-button-link">Report a crime</Link></button>
     </div>
    </div>
   
  );
};

export default Homepage;
