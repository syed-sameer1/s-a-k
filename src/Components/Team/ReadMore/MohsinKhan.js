import React from "react";
import "./ReadMore.css";
import MohsinKhann from "../../../asseset/images/Team-images/MohsinKhan.jpg";

const MohsinKhan = () => {
  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          MR. MOHSEN KHAN <sub>(Adv High Court)</sub>
        </h1>
        <img src={MohsinKhann} alt="MemberImage" />
      </div>
      <div className="fullDetail">
        <p>
          Counsel having experience of more than 6 years’ in different areas of
          law; started his career as an associate of Mr. Amjad Javed Hashmi
          Advocate, where he had an opportunity to have an exposure of tax and
          customs; has also worked with Mr. Zafar A. Khan (ASC) and Justice
          (Retd.) Wajihuddin Ahmed. In the year 2016, he joined Hafeez Pirzada
          Law Associates as a Senior Associate and had work there till mid of
          2019; during his stay, he looked after the entire work of District
          Courts and Tribunals besides doing his independent practice as a
          partner of Abidi Law Associate before High Court of Sindh at Karachi,
          District Courts, Banking Courts, Labor Courts and Tribunals; has been
          looking after the cases of almost every nature including, but not
          limited to, civil, criminal, constitution, tax, customs, labor and
          service, banking, banking offences, NAB, CNS, rent, family, etc
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
