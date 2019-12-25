import React from "react";
import "./Home.css";
import Slider from "./Slider/Slider";
import HomeAbout from "./HomeAbout/HomeAbout";
import LegalServices from "./LegalServices/LegalServices";
import TeamSection from "./TeamSection/TeamSection";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeAbout />
      <LegalServices />
      {/* <TeamSection /> */}
    </>
  );
};

export default Home;
