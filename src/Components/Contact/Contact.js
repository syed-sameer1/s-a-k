import React, { useEffect } from "react";
import ContactHeader from "./ContactHeader";
import "./Contact.css";
import Address from "./Address";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <ContactHeader />
      <div className="main">
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
          <textarea></textarea>
          <button className="submit">Send</button>
        </div>
        <div className="office">
          <Address
            officeName="Main Office"
            address="301-302, Al-Ameera Centre,
                    Near Passport Office,
                    Shahrah-e-Iraq, Saddar,
                    Karachi"
          />
          <Address
            officeName="Sub Office"
            address="1st Floor, Dine Inn Restaurant
            Opposite UBL-Nazimabad Branch,
            C/37, Rizvia Cooperative
            Housing Society, Phase-I,
            Nazimabad, Karachi, Pakistan – 74600
            "
          />
        </div>
      </div>
      <div className="maps"></div>
    </>
  );
};

export default Contact;
