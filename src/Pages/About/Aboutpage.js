import React from "react";
import "./about.css"

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

      {/* <div className="values-card">
        <h2>Our Values</h2>
        <ul>
          <li>Customer Focus: We believe in putting our customers first. Your satisfaction is our top priority, and we strive to exceed your expectations in every way possible.</li>
          <li>Innovation: Embracing innovation is at the core of everything we do. We continuously explore new ideas and technologies to provide cutting-edge solutions for our clients.</li>
          <li>Integrity: Honesty and integrity form the foundation of our company. We believe in conducting our business with transparency and maintaining the highest ethical standards.</li>
          <li>Collaboration: We value teamwork and collaboration. By working together, we achieve greater outcomes and foster a supportive environment for our employees and clients.</li>
        </ul>
      </div> */}

      <div className="mission-card">
        <h2>Our Mission</h2>
        <p>Our mission is to bring your Reports directly to the police.</p>
      </div>

      {/* Add Meet the Team section with team member cards and images here */}

      {/* <div className="contact-card">
        <h2>Contact Us</h2>
        <p>
         
        </p>
      </div> */}
    </div>
  );
};

export default Aboutpage;
