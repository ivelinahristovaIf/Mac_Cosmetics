import React, { Component } from "react";
import "./privacyPolicy.css";

class PrivacyPolicy extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title-container">
          <h1>Privacy Policy</h1>
        </div>
        <div className="our-mission">
          <p> </p>
          <div className="paragraph-container">
            <h3 className="title">Declaration</h3>
            <span>
              It's important for us to save your personal data. Thats why our
              web site is processing your information based on applied
              law-making or GDPR. The law about saveing personal data and the
              law about e-commerce.{" "}
            </span>
          </div>
          <div className="paragraph-container">
            <h3 className="title">Cookies Policy</h3>
            <span>
              To be sure that you are taking the best information and the best
              services, when you are on our online catalogue{" "}
              <a href="/" title="Home Page">
                Mac Cosmetics
              </a>{" "}
              which is called also a web site. The information will be saved by
              cookies. This will help us make your personal experience better.
              Cookies also help us to make sure that you can easily find the
              item you are looking for.{" "}
            </span>
          </div>
          <div className="paragraph-container">
            <h3 className="title">What cookies are?</h3>
            <span>
              Cookies are a small bit of data, sent to your browser by a web
              server and they are stored on your device. This is necessary
              because the second time you visit our web site, it will recognize
              your device. There are two types of cookies. The first one is
              called fixed and the second one - temporary or session cookies.
              The fixed cookies are stored on your device like files for a long
              period. The session cookies are stored when you are surfing on our
              web site but after you close the window, the cookie is gone. Most
              web sites are using cookies to make the user experience better.
              Using cookies is not going to damage your files with viruses.{" "}
            </span>
          </div>
          <div className="paragraph-container">
            <h3 className="title">Analysis of Internet Traffic</h3>
            <span>
              Our web site is analyzing users' internet traffic with Google
              Analysis. That's why we are using Cookies, which help us to analys
              how our users are using the platform. This is how the received
              information is transferred to the server where it is stored. You
              can stop this by making your browser settings not to save cookies.
              The processing of users data for analysis of internet traffic is
              making based on article 6, paragraph 1, word (a) and/or (e) GDPR.
              The legitimate interest of GDPR is based on making our web site
              function better. Our clients are the most important for us. That's
              why we appreciate our clients' personal information and the data
              we store for analysis of our web site traffic, was anonymized. In
              our web site, we maintain this data for 3 years.{" "}
            </span>
          </div>
          <div className="paragraph-container">
            <h3 className="title">Your rights</h3>
            <span>
              You have all rights to your data, which we are processing and the
              right to edit, delete (be forgotten), limit the processing and
              portability of data, removal of the agreement and protest.{" "}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;
