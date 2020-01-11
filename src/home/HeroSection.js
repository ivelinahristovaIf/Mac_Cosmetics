import React from "react";
import "./HeroSection.css";
import lipsImg from "./images/lips.jpg";

class HeroSection extends React.Component {
  render() {
    return (
      <div className="hero-section">
        {/* <div className="lips-img"> */}

          <img
            className="lips"
            src={lipsImg}
            alt="Three female lips with different red lipstics"
          />
        {/* </div> */}
        <div className="hero-section-text">
          <h1>Find the makeup you love</h1>
          <p></p>
        </div>
      </div>
    );
  }
}

export default HeroSection;
