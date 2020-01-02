import React from "react";
import "./Footer.css";
import outlook from "../../asseset/images/outlook.png";
import facebook from "../../asseset/images/facebook.png";
import whatsapp from "../../asseset/images/whatsapp.png";
import twitter from "../../asseset/images/twitter.png";

const Footer = () => {
  return (
    <footer>
      <p>
        2020 © All rights reserved by{" "}
        <span>seema | abidi | khan & associates</span>
      </p>
      <div className="social_icons">
        <img src={facebook} alt="icons" />
        <img src={whatsapp} alt="icons" />
        <img src={twitter} alt="icons" />
        <img src={outlook} alt="icons" />
      </div>
    </footer>
  );
};

export default Footer;
