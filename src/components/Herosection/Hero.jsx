import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to <br></br>crime reporting system</h1>
        <button className="hero-button" ><Link to={'/report'} className="hero-button-link">Report a crime</Link></button>
      </div>
    </div>
  );
};

export default Hero;
