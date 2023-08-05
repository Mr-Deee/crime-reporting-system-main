
// import { Fade, Zoom, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image2.png'

import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Make sure to add the CSS file in the same directory.

const images = [
 image1,
image2,
image3,


  // Add more image URLs as needed.
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentImageIndex to move to the next image.
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed).

    // Clear the interval when the component unmounts.
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
