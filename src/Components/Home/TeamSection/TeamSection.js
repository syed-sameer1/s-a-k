import React from "react";
import "./TeamSection.css";
import TeamCard from "./TeamCard/TeamCard";

const TeamSection = () => {
  return (
    <div className="TeamSection">
      <h2>Our Team</h2>
      <div className="TeamCards">
        <TeamCard TeamName="MRS. SEEMA WASIM" />
        <TeamCard TeamName="MR. KAZIM RAZA ABIDI" />
        <TeamCard TeamName="MR. MOHSEN KHAN" />
        <TeamCard TeamName="S. HASSAN M. ABIDI" />
        <TeamCard TeamName="MR. S. ALI ABBAS ABIDI" />
      </div>
    </div>
  );
};

export default TeamSection;
