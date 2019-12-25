import React from "react";
import logo from "../../asseset/images/LOGO3.png";
import hamburger from "../../asseset/images/hamburger.png";
import { Link } from "react-router-dom";
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
            <Link to="/" className="navStyle">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/expertise" className="navStyle">
              <span>expertise</span>
            </Link>
          </li>
          <li>
            <Link to="/team" className="navStyle">
              <span>Partners</span>
            </Link>
          </li>
          <li>
            <Link to="/team" className="navStyle">
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link to="/team" className="navStyle">
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navStyle">
              <span>contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ham-burger">
        <Link to="/menu">
          <img src={hamburger} alt="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
