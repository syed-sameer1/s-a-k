import React from "react";
import "./TeamSection.css";
import TeamCard from "./TeamCard/TeamCard";
import KazimRaza from "../../../asseset/images/Team-images/KazimRaza.jpg";
import MohsinKhan from "../../../asseset/images/Team-images/MohsinKhan.jpg";
import HassanAbidi from "../../../asseset/images/Team-images/HassanAbidi.jpg";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <div className="TeamSection">
      <h2>Our Team</h2>
      <div className="TeamCards">
        <Link to="/SeemaAbidi" className="navStyle">
          <TeamCard TeamName="MRS. SEEMA WASIM" image={KazimRaza} />
        </Link>
        <Link to="/KazimRaza" className="navStyle">
          <TeamCard TeamName="MR. KAZIM RAZA ABIDI" image={KazimRaza} />
        </Link>
        <Link to="/MohsinKhan" className="navStyle">
          <TeamCard TeamName="MR. MOHSEN KHAN" image={MohsinKhan} />
        </Link>
        <Link to="/HassanAbidi" className="navStyle">
          <TeamCard TeamName="S. HASSAN M. ABIDI" image={HassanAbidi} />
        </Link>
        <Link to="/AliAbbas" className="navStyle">
          <TeamCard TeamName="MR. S. ALI ABBAS ABIDI" image={KazimRaza} />
        </Link>
      </div>
    </div>
  );
};

export default TeamSection;
