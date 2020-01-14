import React, { useEffect } from "react";
import "./ReadMore.css";
import MohsinKhann from "../../../asseset/images/Team-images/MohsinKhan.jpg";

const MohsinKhan = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          MR. MOHSEN KHAN <sub>(Adv High Court)</sub>
        </h1>
        <img src={MohsinKhann} alt="MemberImage" />
      </div>
      <div className="fullDetail">
        <p style={{ textAlign: "center" }}>
          Mr. Mohsen Khan is an energetic young gun, yet possesses every
          attribute a veteran counsel would hold. Mr. Khan did his bachelors in
          the year 2013 from Hamdard School of Law, Karachi, followed by masters
          from University of South Wales, United Kingdom; he started his career
          as an associate of Mr. Amjad Javed Hashmi Advocate-Supreme Court of
          Pakistan, where he had an opportunity to grasp the technicalities
          involved in tax laws; he also had an honor of working with Mr. Zafar
          A. Khan (ASC) and Justice (Retd.) Wajihuddin Ahmed, which enriched his
          legal approach in different sectors of law. Mr. Khan has been
          meticulously dealing in civil, criminal, tax, rent, banking,
          matrimonial, child custody, testamentary and intestate matters.
        </p>
        <p style={{ textAlign: "center" }}>
          In the year 2016, Mr. Khan joined Hafeez Pirzada Law Associates as a
          Senior Associate; during his stay at HPLA, he looked after the entire
          work of District Courts and Tribunals besides doing his independent
          practice as a partner of Abidi Law Associate before High Courts,
          District Courts, Accountability Courts, CNS Courts, Banking Courts,
          Labor Courts Board of Revenue, Customs and Tribunals.
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
            <i className="fas fa-chevron-right"></i> Criminal Litigation
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Banking
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Banking Offences
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Customs
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Tax
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

export default MohsinKhan;
