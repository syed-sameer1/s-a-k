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
          Mr. Kazim Raza Abidi started his career, predominantly working on rent
          laws in late 80’s and enjoyed the right of audience up to honorable
          Supreme Court of Pakistan; with his endless efforts, he decorated his
          legal approach with extensive research through reported as well as
          over 8000 unreported precedents on different areas of law; the
          treasure of unreported precedents amplifies the beauty of his library.
          Soon after his enrollment, he established his law firm under the name
          of Abidi Law Associates, which has grown, over the years, both in size
          and reputation and became a benchmark of quality amongst professional
          law firms in Pakistan, providing legal services, in its core practice
          areas, throughout the country. Mr. Abidi is known for his bold
          practice and innovative approach towards the law; he is a master of
          trials and has the art of steamrolling the witness to sing ‘truth’ in
          the witness box. Mr. Abidi specializes in civil, criminal, rent,
          constitution, family, banking and service laws.
        </p>
        <p>
          Mr. Abidi joined the chambers of SAK & Associates as a partner in
          2019; the idea behind the joint venture was to utilize the expertise
          of each partner and work together as a team to bestow relief to the
          clients in a more effective, efficacious and felicitous manner.
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
