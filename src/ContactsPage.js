import React, { Component } from "react";
import "./ContactsPage.css";
import axios from "axios";
import { fbIcon } from "./home/images/fb.png";
import { instaIcon } from "./home/images/instagram.png";

class ContactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    this.resetForm();
    // e.preventDefault();

    // axios({
    //     method: "POST",
    //     url:"http://localhost:3002/send",
    //     data:  this.state
    //   }).then((response)=>{
    //     if (response.data.status === 'success'){
    //       alert("Message Sent.");
    //       this.resetForm()
    //     }else if(response.data.status === 'fail'){
    //       alert("Message failed to send.")
    //     }
    //   })
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <React.Fragment>
        <div className="info-container">
          <p className="contact-info">E-mail: mac-cosmetics-bulgariq@mail.bg</p>
          <p className="contact-info">mobile phone: +359 897644441</p>
          <p>or</p>
          <h3>You can contact us by this form</h3>
        </div>
        <form
          id="contact-form"
          onSubmit={this.resetForm.bind(this)}
        //   {this.handleSubmit.bind(this)}
        // method="POST"
        >
          <div className="personal-data">
            <div className="fields">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="message-container" rows="5"></textarea>
            </div>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>

        <div className="location-container">
          <h1>Find us here</h1>
          <iframe
            title="maps-location"
            className="map-container"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11734.574836333564!2d23.273228587023485!3d42.66890508123029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f7afd1f0e07f9b2!2z0JHRitC70LPQsNGA0LjRjyDQnNC-0Ls!5e0!3m2!1sbg!2sbg!4v1578405788460!5m2!1sbg!2sbg"
            frameBorder="0"
            style={{ width: 50 + "vw", height: 40 + "vh" }}
          ></iframe>

          <div className="social-networks">
            <a
              href="https://www.facebook.com/Mac-Cosmetics-Bulgaria-110766753787772"
              className="icon brands fa-facebook-f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="fbIcon" scr={fbIcon} alt="Facebook logo" />
            </a>
            <a
              href="https://www.instagram.com/mac.cosmetics.bulgaria/"
              className="icon brands fa-instagram-i"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="instaIcon" scr="data:image/jpeg;base64,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" alt="Instagram logo" />
            </a>
          </div>
        </div>




      </React.Fragment>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}
export default ContactsPage;
