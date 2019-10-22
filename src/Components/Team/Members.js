import React from "react";
import Radium, { StyleRoot } from "radium";

import "./Members.css";
const Members = props => {
  return (
    <StyleRoot>
      <figure style={props.RStyle}>
        <img src={props.image} alt="MemberImage" />
        <figcaption>
          <h3>{props.name}</h3>
          <p className="dtl">{props.detail}</p>
          <p className="contact">{props.contact}</p>
          <span className="readMore">
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </span>
        </figcaption>
      </figure>
    </StyleRoot>
  );
};

export default Radium(Members);
