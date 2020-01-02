import React from "react";
import "./Slider.css";
import { Slide } from "react-slideshow-image";
import slider_1 from "../../../asseset/images/slider_1.gif";
import slider_2 from "../../../asseset/images/slider_2.png";
import slider_3 from "../../../asseset/images/slider_3.jpg";

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
          <div>
            <img src={slider_1} alt="slider" className="slider1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slider_2} alt="slider" className="slider1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={slider_3} alt="slider" className="slider1" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
