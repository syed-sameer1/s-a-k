import React from "react";
import "./Team.css";
import Radium, { StyleRoot } from "radium";
import TeamHeader from "./TeamHeader";
import Members from "./Members";
import KazimRaza from "../../asseset/images/Team-images/KazimRaza.jpg";
import MohsinKhan from "../../asseset/images/Team-images/MohsinKhan.jpg";
import HassanAbidi from "../../asseset/images/Team-images/HassanAbidi.jpg";
import Seema from "../../asseset/images/Team-images/seema.jpeg";
import aliAbbas from "../../asseset/images/Team-images/aliAbbas.jpeg";
import { Link } from "react-router-dom";

const Team = () => {
  const style = {
    flexDirection: "row-reverse",
    "@media (max-width: 660px)": {
      flexDirection: "column"
    }
  };
  return (
    <StyleRoot>
      <TeamHeader team="Partners" />
      <main>
        <h2>PARTNERS</h2>

        <Link to="/SeemaAbidi" className="navStyle">
          <Members
            image={Seema}
            name="MRS. SEEMA WASIM ADVOCATE"
            detail="Senior lawyer after having acquired extensive knowledge and experience across all spheres of law by practically passing through all sorts of cases assigned to her, whether relating to financial banking institutes, commercial enterprises, family matters, rent cases or property disputes. She has not only been providing legal services to banking institutes but also providing them with services to their Credit Administration Department (CAD) for compliance of legal formalities to safeguard their interests."
            contact="seemawasim@hotmail.com"
          />
        </Link>
        <Link to="/KazimRaza" className="navStyle">
          <Members
            image={KazimRaza}
            name="MR. KAZIM RAZA ABIDI"
            detail="Senior counsel possessing extensive knowledge of different areas of
            law; has been looking after the cases assigned to him, whether
            relating to rent, civil, criminal, banking, constitution, family, etc."
            contact="abidikazimraza@gmail.com"
            RStyle={style}
          />
        </Link>
        <Link to="/MohsinKhan" className="navStyle">
          <Members
            image={MohsinKhan}
            name="MR. MOHSEN KHAN"
            detail="Counsel having experience of more than 6 years’ in different areas of
            law; started his career as an associate of Mr. Amjad Javed Hashmi
            Advocate, where he had an opportunity to have an exposure of tax and
            customs; has also worked with Mr. Zafar A. Khan (ASC) and Justice
            (Retd.) Wajihuddin Ahmed."
            contact="mohsen.99@hotmail.com"
          />
        </Link>
        <Link to="/HassanAbidi" className="navStyle">
          <Members
            image={HassanAbidi}
            name="S. HASSAN M. ABIDI"
            detail="Counsel having experience of more than 5 years’ in different areas of
            law; started his career as an associate of Mr. Khalid Javed (former
            President, High Court Bar Association) where he undertook the entire
            work of the firm within a period of six months; during his stay, he
            looked after the cases of Pakistan"
            contact="abidilaw@live.com "
            RStyle={style}
          />
        </Link>
        <h2>ADVISOR</h2>

        <Link to="/AliAbbas" className="navStyle">
          <Members
            image={aliAbbas}
            name="MR. S. ALI ABBAS ABIDI"
            detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            contact="advocate.abidi786@gmail.com"
          />
        </Link>
      </main>
    </StyleRoot>
  );
};

export default Radium(Team);
