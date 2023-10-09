import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
// import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
  return (
<>
    {/* <IconContext.Provider value={{ color: "#fff" }}> */}
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <GiRocketThruster className="navbar-icon" /> */}
            Crime Report System
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes style={{color: "black"}}/> : <FaBars style={{ color: 'black' }}/>}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/Aboutpage"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>


              
              </li>
        {/* <div className="d-grid gap-2 mt-3"> */}
          {/* <Link to={'/signup'}> */}
                <Link to="/signup" style={{ textDecoration: "none" }}  className="button" >Police</Link>
                <Link to="/Trackcase" style={{ textDecoration: "none" }}  className="button1" >Track A Case</Link>
          {/* </Link>      */}
            {/* </div> */}
      </ul>
  </div>
</nav>
</>
)};

export default Navbar;
