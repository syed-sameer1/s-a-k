import React from "react";
import Navigation from "../Navigation/Navigation";
import "./TeamHeader.css";
import slider_3 from "../../asseset/images/slider_3.jpg";
const TeamHeader = props => {
  return (
    <header className="team_header">
      <img src={slider_3} alt="slider_image" />
      <div className="heading">
        <span>{props.team}</span>
      </div>
    </header>
  );
};

export default TeamHeader;
