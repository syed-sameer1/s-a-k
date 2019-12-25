import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/" className="mobile-menu">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/about">
            <span>about</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/expertise">
            <span>expertise</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/team">
            <span>team</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/contact">
            <span>contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
