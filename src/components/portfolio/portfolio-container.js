import React, { Component} from "react";

import PortfolioItem from "./portfolio-item";

class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        {title: "Quip", category: "eCommerce"},
        {title: "Eventbrite", category: "Scheduling" },
        {title: "Ministry Safe", category: "Enterprise" },
        {title: "SwingAway", category: "eCommerce" }
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url="google.com"/>
    });
  }
  
  
  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
        <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
        <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>


        {this.portfolioItems()}

      </div>
    )
  }
}

export default PortfolioContainer;