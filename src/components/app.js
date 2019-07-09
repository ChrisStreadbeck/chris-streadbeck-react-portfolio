import React, { Component } from 'react';


import PortfolioContainer from './portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Chris Streadbeck Portfolio</h1>
        <PortfolioContainer />
      </div>
    );
  }
}
