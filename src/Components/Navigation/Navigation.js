import React from "react";
import logo from "../../asseset/images/LOGO.png";
import hamburger from "../../asseset/images/hamburger.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <span>home</span>
          </li>
          <li>
            <span>about</span>
          </li>
          <li>
            <span>expertise</span>
          </li>
          <li>
            <span>team</span>
          </li>
          <li>
            <span>gallery</span>
          </li>
          <li>
            <span>clients</span>
          </li>
          <li>
            <span>contact</span>
          </li>
        </ul>
      </nav>
      <div className="ham-burger">
        <img src={hamburger} alt="icon" />
      </div>
    </div>
  );
};

export default Navigation;
