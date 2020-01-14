import React from "react";
import HassanRazaWork from "../../../asseset/images/court.jpg";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      <div className="photo">
        <img src={HassanRazaWork} alt="head" />
      </div>
      <div className="para">
        <h2>SEEMA, ABIDI, KHAN & ASSOCIATES</h2>
        <p>
          People choose a law firm that stands out, a firm they can trust and a
          firm that offers unquestionable commitment. Seema, Abidi, Khan &
          Associates is one of the eminent law firms of the country, who not
          only offers unmatched services and immaculate professionalism, but
          also value for its clients. Through practical and innovative thinking,
          SAK strives to do its best to become one of the finest litigation
          firms this country has to offer by delivering quality and valuable
          services.
        </p>
        <p>
          Although the story of SAK is more of a series of moments, its roots
          can be traced back to 1980s when Mrs. Seema Wasim independently
          established the firm under the name of Seema Wasim Law Associates.
          Initially, the firm practice remained confined to Civil, Banking and
          Commercial litigation, however, after acquiring extensive knowledge
          and experience, the team of Mrs. Wasim practiced a wide range of
          areas. Within few years, Mrs. Wasim was considered as one of the
          brilliant lawyers by her peers and also amongst the fraternity.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
