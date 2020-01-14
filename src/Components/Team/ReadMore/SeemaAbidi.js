import React, { useEffect } from "react";
import "./ReadMore.css";
import seema from "../../../asseset/images/Team-images/seema.jpeg";

const SeemaAbidi = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="MainDetail">
      <div className="name">
        <h1>
          MRS. SEEMA WASIM ADVOCATE <sub>(Adv High Court)</sub>
        </h1>
        <img src={seema} alt="MemberImage" />
      </div>
      <div className="fullDetail">
        <p>
          Mrs. Seema Wasim started her practice as an advocate way back in the
          early 80’s; after having acquired extensive knowledge and experience
          over the years, across all spheres of law by practically passing
          through all sorts of cases, whether relating to financial banking
          institutes, commercial enterprises, family matters, rent cases or
          property disputes, Mrs. Wasim carries great respect amongst the legal
          fraternity and the clients. Mrs. Wasim is a woman of integrity and
          uprightness and has the tendency of working on each case with thorough
          research and high standards of professionalism; the eagerness to
          “fight for the right” has been the key of her success over the years.
          In a predominant male profession, Mrs. Wasim is one of the very few
          known practitioners, who, not only has been independently practicing
          successfully, but has established her own firm, under the name of
          Seema Wasim & Co., at the very early age.
        </p>
        <p>
          Mrs. Wasim, apart from providing legal services to banking institutes,
          has also been providing them with services to their Credit
          Administration Department (CAD) for compliance of legal formalities to
          safeguard their interest. With efficient and well-experienced staff,
          transfer, mutation, mortgage, redemption, verification of genuineness
          of property, rent/lease agreements and its registration with concerned
          authorities or societies is more secured. In her past, she worked with
          M/s. Ataur Rehman & Co., Advocates, successfully completed training
          and enrolled as an advocate of Subordinate Courts in the year 1984.
          Conducted a number of cases of various natures independently; after
          having gained rich experience in diverse fields of law, she was
          enrolled as an advocate of High Courts in October 1999.
        </p>
      </div>
      <div className="headings">
        <h3>KEY COMPETENCIES & SKILLS</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Suit for Recoveries
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Legal Opinions
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Issuance of Legal Notices
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Drafting of Publication
            Notice for Print Media
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Business Relationship
            Management
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Providing services to
            Credit Administration Department (CAD) of the banks to compliance of
            legal formalities to safeguard bank interest.
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Confirmation of Genuineness
            of Property Title Documents
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Providing services for
            Transfer/Mutation of properties in DHA, KDA, KMC, SITE, Societies,
            Revenue and other authorities/departments
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Registration of
            Sale/Agreement/Mortgage/Redemption & Rent/Lease Agreements etc
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Supportive, diligent and
            have a sound sense of business practice
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Possess good leadership,
            communication skills and flexible to work in the required time and
            situations Microsoft Word, Internet and e-mail.
          </li>
        </ul>
      </div>
      <div className="headings">
        <h3>EDUCATION & CERTIFICATIONS</h3>
      </div>
      <div className="lists">
        <ul>
          <li>
            <i className="fas fa-chevron-right"></i> Enrolled as an Advocate
            High Court by the Sindh Bar Council on October 9, 1999
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Enrolled as an Advocate by
            Sindh Bar Council on May 9, 1985
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Bachelor of Law (LLB) –
            1983
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Bachelor of Arts – 1979
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Higher Secondary
            Certificate Examination – 1977
          </li>
          <li>
            <i className="fas fa-chevron-right"></i> Secondary School
            Certificate Examination – 1975
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SeemaAbidi;
