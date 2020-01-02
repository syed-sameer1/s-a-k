import React from "react";
import Navigation from "../Navigation/Navigation";
import "../Team/TeamHeader.css";
import slider_2 from "../../asseset/images/slider_2.png";
const ExpertiesHeader = props => {
  return (
    <header className="team_header">
      <img src={slider_2} alt="slider_image" />
      <div className="heading">
        <span>{props.team}</span>
      </div>
    </header>
  );
};

export default ExpertiesHeader;
