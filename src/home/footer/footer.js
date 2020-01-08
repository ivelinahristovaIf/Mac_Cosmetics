import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <h1>Find all Mac Cosmetics products</h1>
        <ol>
          <li> Lookup for stores</li>
          <li> Search by categories</li>
          <li> Use the platform in Sofia</li>
        </ol>
        <div className="privacy-policy">
          <a href="/privacy-policy" title="Privacy Policy Page">
            <span className="label">Mac Cosmetics Privacy Policy</span>
          </a>
        </div>
        <div className="copyright">
          <span>© 2019 Ivelina Mac Cosmetics</span>
        </div>
      </div>
    );
  }
}

export default Footer;
