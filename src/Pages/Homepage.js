import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Navbar from "../components/navbar/Navbar";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image2.png";
import Image from "./image";

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1, // Replace with your image URLs or import images from assets
    image2,
    image3,
  ];

  useEffect(() => {
    // Automatic image transition every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>

    <div className="homepage">
     
      <div className="Welcome">
    
        <div className="texthi"> Welcome To the Crime Report System</div>
        <div className="textwel">Seen A Crime? Report it.</div>
        <div className="button-container">
          <button className="signup-button">
            <Link to={"/report"} className="hero-button-link">
              Report a crime
            </Link>
          </button>
        </div>
        <Image />
      </div>
      </div>
    </>
  );
};

export default Homepage;
