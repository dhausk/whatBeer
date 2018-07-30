import React, { Component } from 'react';
import Contact from './Contact.js'
import Beer from './Beer.js'
import Home from './Home.js'
import Result from './Result.js';
class Main extends Component {
  render() {
    const home = <Home click={this.props.clickHandle} />;
    const beer = <Beer toResult={this.props.formToResult} />;
    const result = <Result click={this.props.clickHandle} selection={this.props.preferences} />;
    let displayedPage = displaySwitch(this.props.display);
    function displaySwitch(num) {
      switch (num) {
        case "1":
          return home;
        case "2":
          return beer;
        case "3":
          return <Contact />;
        case "4":
          return result;
        default:
          console.log('links are not working');
          break;
      }
    }
    return (
      <div className="center-div">
        {displayedPage}
      </div>
    );
  }
}

export default Main;