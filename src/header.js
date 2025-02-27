import React from "react";
import "./Header.css";
import logo from "./logo.jpg"; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="nba">
          <img src="nba-logo.png" alt="NBA Accreditation" className="nba-logo" />
          <p>For Agri, BME, BT, CSE, ECE, EEE, Mech, IT</p>
        </div>
        
        <div className="college-info">
          <img src={logo} alt="Sri Shakthi Logo" className="college-logo" />
          <h1>SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
          <p>
            Approved by AICTE, New Delhi • Affiliated to Anna University, Chennai
          </p>
          <p>AN AUTONOMOUS INSTITUTION</p>
          <p>
            L&T By-Pass, Chinniyampalayam Post, Coimbatore-641062 | Tel: +91 422 2369900
          </p>
        </div>
        
        <div className="naac">
          <img src="naac-logo.png" alt="NAAC Accreditation" className="naac-logo" />
          <p>Accredited with Grade A</p>
          <h2>2727</h2>
          <p>Counselling Code</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
