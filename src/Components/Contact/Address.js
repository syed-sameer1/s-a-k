import React from "react";
import "./Address.css";
const Adress = props => {
  return (
    <div className="address">
      <h2>{props.officeName}</h2>
      <p className="companyName">SEEMA, ABIDI, KHAN & ASSOCIATES</p>
      <p className="fullAddress">{props.address}</p>
      <p className="phone">
        <span>Tel: </span>021-35686810
      </p>
      <p className="phone">
        <span>Tel: </span>021-35640577
      </p>
      <p className="email">
        <span>E-mail: </span>ask.advocates@outlook.com
      </p>
    </div>
  );
};

export default Adress;
