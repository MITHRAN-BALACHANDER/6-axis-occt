import React from "react";
import "./Header.css";
import logo from "./logo.jpg"; 

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="nba">
          <img src={logo} alt="NBA Accreditation" className="nba-logo" />
         
        </div>
        
        <div className="college-info">
          <br/>
          <h1>SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
         
          <p style={{ fontWeight: "bold" }}>
            Six Axis Robot
          </p>
        </div>
        
        <div className="naac">
          <img src="naac-logo.jpeg" alt="NAAC Accreditation" className="naac-logo" />
     
          
        </div>
      </div>
    </header>
  );
}

export default Header;
