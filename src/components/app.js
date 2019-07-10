import React, { Component } from 'react';


import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container"

class App extends Component {
  render() {
    return (
      <div className='app'>
      <NavigationContainer />
        <h1>Chris Streadbeck Portfolio</h1>
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;