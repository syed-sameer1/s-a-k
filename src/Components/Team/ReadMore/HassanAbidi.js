import React, { useEffect } from "react";
import "./ReadMore.css";

import HassanAbidii from "../../../asseset/images/Team-images/HassanAbidi.jpg";
import img from "../../../asseset/images/memebr.jpg";

const HassanAbidi = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          S. HASSAN M. ABIDI <sub>(Adv High Court)</sub>
        </h1>
        <img src={HassanAbidii} alt="MemberImage" />
      </div>
      <div className="fullDetail">
        <p style={{ textAlign: "center" }}>
          Mr. S. Hassan M. Abidi is a bewitching stripling counsel, who opened
          his eyes in the lap of law and was raised in the arms of a seasoned
          lawyer Mr. Kazim Raza Abidi; at the very early age, junior Abidi
          joined the chambers of Abidi Law Associates and undertook research and
          drafting for his father, whose constant guidance and supervision
          developed his legal acumen and capability of construing the law in its
          essence. Mr. Abidi completed his bachelors in commerce in the year
          2010, followed by bachelors in Law at Sindh Muslim Law College,
          Karachi; at the dawn of his career, he joined Khalid Javed & Co. and
          had an opportunity to represent Pakistan International Airlines
          Corporation, Karachi Chamber of Commerce and Industry, Pakistan
          National Shipping Corporation and University of Karachi
        </p>
        <p style={{ textAlign: "center" }}>
          In mid of 2018, Mr. Abidi joined Hafeez Pirzada Law Associates as a
          Senior Associate, where he proficiently represented Karachi Water &
          Sewerage Board and Karachi Metropolitan Corporation before honorable
          High Court; he has undertaken some high-profile cases very smartly and
          has been tremendously successful in maintaining bond with the bench,
          which is an articulate account of his competence. Soon he joined Seema
          Wasim Law Associates, changing its name to Seema, Abidi, Khan &
          Associates, and became a name partner of a law firm at a very young
          age. Mr. Abidi is widely reckoned as one of the prominent faces in the
          legal fraternity. He is a fervent and impassioned supporter of cricket
          and an active member of Sindh High Court Bar Association XI.
        </p>
      </div>
      <div className="headings">
        <h3>AREAS OF PRACTICE</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Civil Litigation
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Commercial & Corporate Laws
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Criminal Litigation
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Banking
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Banking Offences
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Service Matters (Civil
            Servant Laws)
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Constitutional Law
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Rent Laws
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Property Matters
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Family Matters
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Dispute Resolution &
            Mediation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HassanAbidi;
