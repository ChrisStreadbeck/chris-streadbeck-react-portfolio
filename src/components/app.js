import React, { Component } from 'react';


import PortfolioContainer from './portfolio/portfolio-container';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Chris Streadbeck Portfolio</h1>
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;