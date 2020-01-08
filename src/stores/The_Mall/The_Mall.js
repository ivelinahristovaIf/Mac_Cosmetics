import React, { Component } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../storeCategories.css";
import HeroSection from "../UpperSection/UpperSectionForStore";
import { categorys } from "../categorys";

class The_Mall extends Component {
  state = {
    The_Mall: categorys
  };

  render() {
    return (
      <React.Fragment>
        <HeroSection name="The Mall" />
        <section class="stores">
          <div>
            <h1 class="h1-stores"> The Mall </h1>
            <h2> Categories </h2>
          </div>
          <div className="CategoryList">
            {this.state.The_Mall.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                price={category.price}
                rating={category.rating}
                image={category.image}
                store="The Mall"
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default The_Mall;
