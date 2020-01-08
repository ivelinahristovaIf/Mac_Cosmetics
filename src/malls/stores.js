import React, { Component } from "react";
import Store from "./store";
import "./stores.css";
import HeroSection from "../home/HeroSection";

class Stores extends Component {
  state = {
    stores: [
      { name: "Paradise Center", image: "paradise.jpg", storeLetter: "P" },
      { name: "The Mall", image: "the_mall.jpg", storeLetter: "T" },
      { name: "Mall of Sofia", image: "mall_of_sofia.jpg", storeLetter: "M" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <section className="stores">
          <div>
            <h1 className="h1-stores"> Stores </h1>
            <h2> Find us in Sofia</h2>
          </div>
          <div className="storeList">
            {this.state.stores.map(store => (
              <Store
                key={store.name}
                name={store.name}
                image={store.image}
                storeLetter={store.storeLetter}
              />
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Stores;
