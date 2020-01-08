import React, { Component } from "react";
import "./category.css";
import Item from "./catalogue/item";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogue: []
    };
  }

  componentDidMount() {
    const currentCategory = JSON.parse(
      sessionStorage.getItem("currentCategory")
    );
    console.log(currentCategory);
    const image = document.querySelector(".category-image");
    const categoryHeader = document.querySelector(".category-header");
    const rating = document.querySelector(".rating .rating-number");
    const priceRange = document.querySelector(".rating .price-range");
    categoryHeader.innerText = currentCategory.name;
    priceRange.innerText = currentCategory.price;
    rating.innerText = "Rating: " + currentCategory.rating + " / 5   ";
    image.style.backgroundImage = `url('${currentCategory.image}')`;

    let catalogue = require("./catalogue/catalogue.json");
    catalogue = catalogue.categorys[currentCategory.id]["category-items"];
    this.setState({ currentCategory });
    this.setState({ catalogue });
  }

  render() {
    const currentCategory = JSON.parse(
      sessionStorage.getItem("currentCategory")
    );
    return (
      <div className="category-wrapper">
        <section>
          <div className="category-image" />

          <div className="nav-menu">
            <h1 className="category-header"> </h1>
            <div className="rating">
              {" "}
              <span className="rating-number"> </span>
              <span className="price-range"> </span>
            </div>
          </div>
          <div className="catalogue-content">
            <div className="items-category1">
              <ul className="items-list">
                {this.state.catalogue.map(item => (
                  <Item
                    key={item.name}
                    itemName={item.name}
                    itemDescription={item.description}
                    itemPrice={item.itemPrice}
                    itemWeight={item.weight}
                    itemImage={item.image}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Category;
