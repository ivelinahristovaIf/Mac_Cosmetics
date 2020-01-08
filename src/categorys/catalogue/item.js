import React, { Component } from "react";
import "./item.css";

class Meal extends Component {
  state = {};

  render() {
    return (
      <li className="item">
        <div className="item-wrapper">
          <div className="name-container">
            <h3>
              <span> {this.props.itemName} </span>{" "}
            </h3>
          </div>
          <div className="image-container">
            <img className="itemImage" src={this.props.itemImage} alt="Nice colourfull makeup."/>
          </div>
          <div className="description-container">
            <span>{this.props.itemDescription}</span>
          </div>
          <div className="price-container">
            <div className="item-price">
              <span> {this.props.itemPrice} </span>
            </div>
          </div>
          <div className="weight-container">
            <h5 className="weight-title">
              <span>{this.props.itemWeight}</span>
            </h5>
          </div>
        </div>
      </li>
    );
  }
}

export default Meal;
