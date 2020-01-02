import React from "react";
import "./ContactHeader.css";
import contact_img from "../../asseset/images/contact-background.jpg";

const ContactHeader = () => {
  return (
    <header className="contact-header">
      <img src={contact_img} />
      <div className="heading">
        <span>Contact Us</span>
      </div>
    </header>
  );
};

export default ContactHeader;
