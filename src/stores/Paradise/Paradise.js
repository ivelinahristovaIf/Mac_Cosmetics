import React, { Component } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import "../storeCategories.css";
import HeroSection from "../UpperSection/UpperSectionForStore";
import { categorys } from "../categorys";

class Paradise extends Component {
  state = {
    Paradise: categorys
  };

  render() {
    return (
      <React.Fragment>
        <HeroSection name="Paradise Center" />
        <section className="stores">
          <div>
            <h1 className="h1-stores"> Paradise Center</h1>
            <h2 className="stores-categories"> Categories </h2>
          </div>
          <div className="CategoryList">
            {this.state.Paradise.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                price={category.price}
                rating={category.rating}
                image={category.image}
                store="Paradise Center"
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Paradise;
