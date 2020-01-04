import React from "react";
import "./OtherClients.css";

const OtherClients = props => {
  return (
    <div className="client_div">
      <img src={props.clientImg} />
      <i className="fas fa-chevron-right"></i>
      <h1>{props.clientName}</h1>
    </div>
  );
};

export default OtherClients;
