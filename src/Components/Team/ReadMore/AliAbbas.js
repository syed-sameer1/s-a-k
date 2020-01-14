import React, { useEffect } from "react";
import "./ReadMore.css";
import aliAbbas from "../../../asseset/images/Team-images/aliAbbas.jpeg";

const AliAbbas = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          MR. S. ALI ABBAS ABIDI <sub>(Adv High Court)</sub>
        </h1>
        <img src={aliAbbas} alt="MemberImage" />
      </div>
      <div className="headings">
        <h3>HIS AREAS OF INTEREST INCLUDE THE FOLLOWING</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Banking
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Commercial & Corporate Laws
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> International Laws
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Islamic Banking
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Partnership
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Intellectual Property
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Insurance
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Media & Entertainment Laws
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Taxation
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Labor Laws
          </li>
        </ul>
      </div>
      <div className="headings">
        <h3>CORE COMPETENCIES</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Enrolled as an Advocate
            High Court by the Sindh Bar Council on October 9, 1999
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Corporate Finance
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Banking & Finance
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Audit (including CISA)
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Business Law
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Islamic Banking,
            Insurance-Takaful
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> ICorporate Laws
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AliAbbas;
