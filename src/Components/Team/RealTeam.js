import React, { useEffect } from "react";

import "./Team.css";
import Radium, { StyleRoot } from "radium";
import TeamHeader from "./TeamHeader";
import Members from "./Members";
import Mehak from "../../asseset/images/Team-images/mehak.jpeg";
import Naqash from "../../asseset/images/Team-images/naqash.jpeg";
import nasir from "../../asseset/images/Team-images/nasir.jpeg";
import danishC from "../../asseset/images/Team-images/danish.jpeg";
import kamran from "../../asseset/images/Team-images/kamran.jpeg";

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
          detail="Mehak Roy Rajput, did her bachelors from Hamdard School of Law, Karachi and is currently working as a Civil and Banking counsel at SAK for almost a year. She mostly practices in banking cases. She appears before court, draft the cases and assists her seniors as well as other associates in various tasks related to Banking field. She is currently working as an Associate and represents her seniors as well as the firm before the honorable Courts."
          contact="example@gmail.com"
        />

        <Members
          image={Naqash}
          name="MUHAMMAD NAQQASH SIDDIQUI"
          detail="Muhammad Naqqash Siddiqui is Junior Associate at SAK, holds a Degree of Law (5 Years program) from Shaheed Zulfiqar Ali Bhutto University of Law, Karachi. He has worked at Hafeez Pirzada Law Associates and Haider Naqi & Co. as an Intern. He has also participated in Moot Competition at Shaheed Zulfiqar Ali Bhutto University of Law in the year 2017 and is an existing member of Bradraan Allahabad Welfare Society (BAWS). "
          contact="example@gmail.com"
          RStyle={style}
        />
        <Members
          image={nasir}
          name="DANISH"
          detail="Danish is Senior Associate at SAK, whose main responsibilities include transfer, mutation, mortgage, redemption, verification of genuineness of property, rent/lease agreements and registration of deeds, agreement and power of attorney(s).."
          contact="example@gmail.com"
        />

        <Members
          image={nasir}
          name="NASIR KHAN"
          detail="Nasir Khan Advocate is Senior Associate at SAK, who holds a Degree of Law from Sindh Muslim Law College, Karachi and a Masters in Political Science from University of Karachi. He has worked at Bukhari Law Associates as a Legal Consultant, Litigator and Draftsman. He has also worked as an Area Incharge for Health Department C.D.G.K. from 2001 till 2005 to supervise the area teams in E.P. I. Programs and was awarded as a Capacity of Best Area Incharge by C.D.G.K. Landhi Town. He is confident, responsible and has commendable arguing skills and always keen and diligent towards his responsibilities."
          contact="example@gmail.com"
          RStyle={style}
        />
        <h2>Court Associate</h2>
        <Members
          image={kamran}
          name="KAMRAN"
          detail="Danish is Senior Associate at SAK, whose main responsibilities include transfer, mutation, mortgage, redemption, verification of genuineness of property, rent/lease agreements and registration of deeds, agreement and power of attorney(s).."
          contact="example@gmail.com"
        />

        <Members
          image={danishC}
          name="DANISH ASAD"
          detail="Nasir Khan Advocate is Senior Associate at SAK, who holds a Degree of Law from Sindh Muslim Law College, Karachi and a Masters in Political Science from University of Karachi. He has worked at Bukhari Law Associates as a Legal Consultant, Litigator and Draftsman. He has also worked as an Area Incharge for Health Department C.D.G.K. from 2001 till 2005 to supervise the area teams in E.P. I. Programs and was awarded as a Capacity of Best Area Incharge by C.D.G.K. Landhi Town. He is confident, responsible and has commendable arguing skills and always keen and diligent towards his responsibilities."
          contact="example@gmail.com"
          RStyle={style}
        />
      </main>
    </StyleRoot>
  );
};

export default Radium(RealTeam);
