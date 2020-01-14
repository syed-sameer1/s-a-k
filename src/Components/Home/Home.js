import React, { useEffect } from "react";
import "./Home.css";
import Slider from "./Slider/Slider";
import HomeAbout from "./HomeAbout/HomeAbout";
import LegalServices from "./LegalServices/LegalServices";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <>
      <Slider />
      <HomeAbout />
      <LegalServices />
    </>
  );
};

export default Home;
