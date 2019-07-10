import React, { Component} from "react";

class NavigationComponent extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        {false ? <button>Add Blog</button> : null }
        
      </div>
    )
  }
}






export default NavigationComponent