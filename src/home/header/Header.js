import React, { Component } from "react";
import logo from "../images/macLogo.png";
import contactsIcon from "../images/contacts-icon.png";
import "./Header.css";

class Header extends Component {
  state = {};

  componentDidMount() {
    let handleScroll = () => {
      const header = document.querySelector("header");
      const iconBox = document.querySelector(".icons");
      if (window.scrollY !== 0) {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0 2px 16px 0 rgba(0,0,0,0.08)";
        iconBox.style.border = "1px solid #ebebeb";
        iconBox.style.borderRight = "1px solid #ebebeb";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        iconBox.style.border = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
  }
  showInfo = event => {
    event.preventDefault();
    console.log("Info");
  };

  render() {
    return (
      <React.Fragment>
        <div className="top-section">
          <header className="header">
            <div className="logo-wrapper">
              <div className="logo">
                <a className="logo-container" href="/">
                  {" "}
                  <img
                    className="mac-logo"
                    src={logo}
                    alt="The logo of Mac Cosmetics."
                  />
                </a>
              </div>
            </div>
            <div className="mobile-header"></div>
            <div className="tools-wrapper">
              <div className="bag-wrapper icons">
                <a className="link" href="/Contacts" title="Contacts Page">
                  <img
                    className="contacts-icon "
                    src={contactsIcon}
                    alt="Phone and letter for contacts"
                  />
                </a>
              </div>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
