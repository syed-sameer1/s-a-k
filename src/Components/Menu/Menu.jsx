import React, { useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/" className="mobile-menu">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/expertise">
            <span>expertise</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/partners">
            <span>Partners</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/team">
            <span>Team</span>
          </Link>
        </li>
        <li>
          <Link className="mobile-menu" to="/clients">
            <span>Clients</span>
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
