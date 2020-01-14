import React, { useEffect } from "react";

import "./Team.css";
import Radium, { StyleRoot } from "radium";
import TeamHeader from "./TeamHeader";
import Members from "./Members";
import Mehak from "../../asseset/images/Team-images/mehak.jpeg";
import Naqash from "../../asseset/images/Team-images/naqash.jpeg";

const RealTeam = () => {
  const style = {
    flexDirection: "row-reverse",
    "@media (max-width: 660px)": {
      flexDirection: "column"
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <StyleRoot>
      <TeamHeader team="Team" />
      <main>
        <h2>Team</h2>

        <Members
          image={Mehak}
          name="MEHAK ROY"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
        />

        <Members
          image={Naqash}
          name="MUHAMMAD NAQQASH SIDDIQUI"
          detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          contact="example@gmail.com"
          RStyle={style}
        />
      </main>
    </StyleRoot>
  );
};

export default Radium(RealTeam);
