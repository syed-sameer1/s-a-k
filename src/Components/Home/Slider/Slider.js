import React from "react";
import "./Slider.css";
import { Slide } from "react-slideshow-image";

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div className="slider1"></div>
        </div>
        <div className="each-slide">
          <div className="slider2"></div>
        </div>
        <div className="each-slide">
          <div className="slider3"></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
