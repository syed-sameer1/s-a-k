// import React from "react";
// import "./TeamCard.css";

// const TeamCard = props => {
//   return (
//     <figure className="TeamCard">
//       <img src={sample} alt="sample" />
//       <figcaption className="TeamDetail">
//         <h3>{props.TeamName}</h3>
//         <button>About</button>
//       </figcaption>
//     </figure>
//   );
// };

// export default TeamCard;

import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import sample from "../../../../asseset/images/memebr.jpg";
import "./TeamCard.css";

class TeamCard extends Component {
  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{
          width: "200px",
          height: "200px",
          margin: " 20px 70px",
          padding: "0px",
          borderRadius: "100px"
        }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#175852",
            borderRadius: "100px",
            padding: "0px",
            boxShadow: "2px 2px 15px black"
          }}
        >
          <img
            src={sample}
            alt="member"
            style={{
              width: "200px",
              height: "200px",
              margin: "0px",
              borderRadius: "100px"
            }}
          />
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "rgb(77, 77, 77)",
            borderRadius: "100px",
            boxShadow: "2px 2px 15px black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <h3 className="TeamCardHeading">{this.props.TeamName}</h3>
          <button className="TeamCardBtn">About</button>
        </BackSide>
      </Flippy>
    );
  }
}

export default TeamCard;
