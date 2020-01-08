import React from "react";
import "../UpperSection/UpperSectionForStore.css";

class HeroSection extends React.Component {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-img"></div>
        <div className="hero-section-content">
          <div className="hero-section-text">
            {" "}
            <h1>Best makeup brand in town </h1>{" "}
            <label className="store">{this.props.name}</label>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
