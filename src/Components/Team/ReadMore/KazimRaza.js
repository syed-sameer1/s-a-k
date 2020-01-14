import React, { useEffect } from "react";
import "./ReadMore.css";
import KazimRazaa from "../../../asseset/images/Team-images/KazimRaza.jpg";

const KazimRaza = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          MR. KAZIM RAZA ABIDI <sub>(Adv High Court)</sub>
        </h1>
        <img src={KazimRazaa} alt="MemberImage" />
      </div>
      <div className="fullDetail">
        <p>
          Senior counsel possessing extensive knowledge of different areas of
          law; has been looking after the cases assigned to him, whether
          relating to rent, civil, criminal, banking, constitution, family, etc.
          Soon after his enrollment, he established his law firm under the name
          of “Abidi Law Associates”; beginning with a very modest setting, Abidi
          Law Associates has grown, over the years, both in size and reputation
          and has become a benchmark of quality amongst professional law firms
          in Pakistan providing legal services, in its core practice areas,
          throughout the country.
        </p>
      </div>
      <div className="headings">
        <h3>AREAS OF PRACTICE</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Rent Laws
          </li>
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
            <i className="fas fa-chevron-right"></i> Constitutional Law
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Property Matters
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Family Matters
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KazimRaza;
