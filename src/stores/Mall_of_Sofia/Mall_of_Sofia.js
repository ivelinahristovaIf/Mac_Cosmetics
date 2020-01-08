import React, { Component } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../storeCategories.css";
import HeroSection from "../UpperSection/UpperSectionForStore";
import { categorys } from "../categorys";

class Mall_of_Sofia extends Component {
  state = {
    Mall_of_Sofia: categorys
  };

  render() {
    return (
      <React.Fragment>
        <HeroSection name="Mall of Sofia" />
        <section class="stores">
          <div>
            <h1 class="h1-stores"> Mall of Sofia </h1>
            <h2> Categories </h2>
          </div>
          <div className="CategoryList">
            {this.state.Mall_of_Sofia.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                price={category.price}
                rating={category.rating}
                image={category.image}
                store="Mall of Sofia"
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Mall_of_Sofia;
