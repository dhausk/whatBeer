import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thing: 1
    }
  }

  render() {
    return (
      <div className="home">
        <h1>“What Beer should I get?“</h1>
        <p>Have you asked your self this question? If you have ever had a rough time on deciding what kind of beer to get when you are
         at the Liquor store, a restaurant, or at a bar. You are in the right place!
         Here you can search for beer based on how hoppy or strong you want your
         beer to be. I'll you have to do is pick how hoppy or strong from a list from 1-5 and
         "Which Beer Do I Want?" will make a list for you. Just remember, the more extreme you make your
                  selections, the less you will have to choose from. Happy picking!  </p>
        <button className="beer-button" onClick={this.props.click} id="2" >I'll have the...</button>
      </div>
    );
  }
}

export default Home;
