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
        <p>
          Counsel having experience of more than 5 years’ in different areas of
          law; started his career as an associate of Mr. Khalid Javed (former
          President, High Court Bar Association) where he undertook the entire
          work of the firm within a period of six months; during his stay, he
          looked after the cases of Pakistan International Airlines Corporation,
          Pakistan National Shipping Corporation, Karachi Chamber of Commerce &
          Industry, Karachi Port Trust, University of Karachi, etc.; thereafter,
          he joined Abidi Law Associate as a partner and has been looking after
          the cases of almost every nature including, but not limited to, civil,
          criminal, constitution, service, banking, banking offences, NAB, CNS,
          rent, etc; besides being partner of Abidi Law Associates, he joined
          Hafeez Pirzada Law Associates as a Senior Associate in the year 2018
          and undertook the entire work to the complete satisfaction of the
          partner; has been looking after the cases of Karachi Metropolitan
          Corporation and Karachi Water & Sewerage Board since more than a year
          and provided the relief to the departments in the best possible way.
          Now Abidi Law Associates & Seema Wasim Law Associates have entered
          into joint venture under the name of ASK – Advocate & Legal
          Consultants.
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
