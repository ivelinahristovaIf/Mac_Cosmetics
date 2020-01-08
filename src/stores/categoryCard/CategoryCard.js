import React, { Component } from 'react';
import "./CategoryCard.css";
import { Link } from "react-router-dom"


class CategoryCard extends Component {

    state = {
        currentCategory: {

        }
    }

    componentDidMount() {
    let currentCategory = {
    store: this.props.store,
    id: this.props.id,
    name: this.props.name,
    rating: this.props.rating,
    image: this.props.image,
    price: this.props.price

    }
    this.setState({currentCategory})
       }
    setCategory = () => { 
        const currentCategory = this.state.currentCategory;
        sessionStorage.setItem('currentCategory', JSON.stringify(currentCategory)); }
render() {
    return (
        <div className="category">
            <Link to={"/" + this.props.store + "/" + this.props.id} onClick={this.setCategory}>
                <div className="category-div" >
                    <img className="category-pic" alt="" src={this.props.image}></img>
                </div>
                <div className="info">
                    <span className="category-name">{this.props.name}</span>
                    <span className="category-price"> Rating: {this.props.rating}</span>
                    <span className="category-rating">Prices: {this.props.price}</span>
                </div>
            </Link>
        </div>
    )
}
}

export default CategoryCard;
