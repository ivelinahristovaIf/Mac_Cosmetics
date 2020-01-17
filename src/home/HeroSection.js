import React from "react";
import "./HeroSection.css";
import lipsImg from "./images/lips.jpg";

class HeroSection extends React.Component {
  render() {
    return (
      <div className="hero-section">
        <img
          className="lips"
          src={lipsImg}
          alt="Three female lips with different red lipstics"
        />
        <div className="hero-section-summary">
          <h1>Find the makeup you love</h1>
          <p></p>
        </div>
      </div>
    );
  }
}

export default HeroSection;
