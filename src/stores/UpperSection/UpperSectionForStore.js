import React from "react";
import "../UpperSection/UpperSectionForStore.css";

class UpperSection extends React.Component {
  render() {
    return (
      <div className="upper-section">
        <div className="upper-img"></div>
        <div className="hero-section-content">
          <div className="hero-section-text">
            {" "}
            <h1>Best makeup brand in town </h1> <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default UpperSection;
