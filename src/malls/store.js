import React, { Component } from "react";
import { Link } from "react-router-dom";
import("./store.css");

class Store extends Component {
  render() {
    return (
      <div className="store">
        <Link to={"/" + this.props.name}>
          <div className="store-div">
            <img
              className="store-pic"
              alt=""
              src={require("../malls/images/" + this.props.image)}
            ></img>
            <span className="store-name">{this.props.name}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Store;
