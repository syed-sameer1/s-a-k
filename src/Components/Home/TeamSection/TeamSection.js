import React from "react";
import "./TeamSection.css";
import TeamCard from "./TeamCard/TeamCard";
import KazimRaza from "../../../asseset/images/Team-images/KazimRaza.jpg";
import MohsinKhan from "../../../asseset/images/Team-images/MohsinKhan.jpg";
import HassanAbidi from "../../../asseset/images/Team-images/HassanAbidi.jpg";

const TeamSection = () => {
  return (
    <div className="TeamSection">
      <h2>Our Team</h2>
      <div className="TeamCards">
        <TeamCard TeamName="MRS. SEEMA WASIM" image={KazimRaza} />
        <TeamCard TeamName="MR. KAZIM RAZA ABIDI" image={KazimRaza} />
        <TeamCard TeamName="MR. MOHSEN KHAN" image={MohsinKhan} />
        <TeamCard TeamName="S. HASSAN M. ABIDI" image={HassanAbidi} />
        <TeamCard TeamName="MR. S. ALI ABBAS ABIDI" image={KazimRaza} />
      </div>
    </div>
  );
};

export default TeamSection;
