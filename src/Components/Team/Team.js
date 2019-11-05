import React from "react";
import "./Team.css";
import Radium, { StyleRoot } from "radium";
import TeamHeader from "./TeamHeader";
import Members from "./Members";
import KazimRaza from "../../asseset/images/Team-images/KazimRaza.jpg";
import MohsinKhan from "../../asseset/images/Team-images/MohsinKhan.jpg";
import HassanAbidi from "../../asseset/images/Team-images/HassanAbidi.jpg";

const Team = () => {
  const style = {
    flexDirection: "row-reverse",
    "@media (max-width: 660px)": {
      flexDirection: "column"
    }
  };
  return (
    <StyleRoot>
      <TeamHeader />
      <main>
        <h2>PARTNER</h2>
        <Members
          image={HassanAbidi}
          name="MRS. SEEMA WASIM ADVOCATE"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
        />

        <Members
          image={KazimRaza}
          name="MR. KAZIM RAZA ABIDI"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
          RStyle={style}
        />
        <Members
          image={MohsinKhan}
          name="MR. MOHSEN KHAN"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
        />
        <Members
          image={HassanAbidi}
          name="S. HASSAN M. ABIDI"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
          RStyle={style}
        />
        <h2>ADVISOR</h2>
        <Members
          image={HassanAbidi}
          name="MR. S. ALI ABBAS ABIDI"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
        />
      </main>
    </StyleRoot>
  );
};

export default Radium(Team);
