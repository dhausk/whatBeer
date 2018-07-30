import React, { Component } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainDisplay: "1"
    }
  }
  handleClick = (event) => {
    event.preventDefault();
    let id = event.target.id;
    this.setState({ mainDisplay: id })
  }
  changeFormToResult = (preference) => {
    this.setState({
      mainDisplay: "4",
      preference: preference
    })
  }
  render() {
    return (
      <div className="App">
        <Header click={this.handleClick} />
        <Main display={this.state.mainDisplay}
          preferences={this.state.preference}
          clickHandle={this.handleClick}
          formToResult={this.changeFormToResult}
        />
        <Footer click={this.handleClick} />
      </div>
    );
  }
}

export default App;
