import React from "react";
import "./ServicesCard.css";

const ServicesCard = props => {
  return (
    <figure className="ServicesCard">
      <img src={props.icon} alt="icon" />
      <h3>{props.ServiceName}</h3>
      <figcaption className="ServiceDetail">
        <p>{props.ServiceDetail}</p>
        <button>Read More</button>
      </figcaption>
    </figure>
  );
};

export default ServicesCard;
