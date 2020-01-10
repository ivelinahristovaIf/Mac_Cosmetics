import React, { Component } from "react";
import "./ContactsPage.css";
import axios from "axios";
import {fbIcon} from "./home/images/fb.png";

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
        <form
          id="contact-form"
          onSubmit={this.resetForm.bind(this)}
          //   {this.handleSubmit.bind(this)}
          method="POST"
        >
          <h3>You can contact us by this form</h3>
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
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>

        <div className="location-container">
          <h1>Map</h1>
          <iframe
            title="maps-location"
            className="map-container"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11734.574836333564!2d23.273228587023485!3d42.66890508123029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f7afd1f0e07f9b2!2z0JHRitC70LPQsNGA0LjRjyDQnNC-0Ls!5e0!3m2!1sbg!2sbg!4v1578405788460!5m2!1sbg!2sbg"
            frameBorder="0"
            style={{ width: 50 + "vw", height: 40 +"vh" }}
          ></iframe>

<a
              href="https://www.facebook.com/ivelinahristovaif"
              className="icon brands fa-facebook-f"
              target="_blank"
            >
              <img className="fbIcon" scr={fbIcon}/>
            </a>
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
