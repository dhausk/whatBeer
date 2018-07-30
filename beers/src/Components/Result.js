import React, { Component } from 'react';
import BeerList from './BeerList.js'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      beerWeight: []
    }
  }
  componentWillMount = () => {
    let Url = `https://api.punkapi.com/v2/beers?${this.props.selection.weight}&per_page=80`;
    fetch(Url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: false,
          beerWeight: response
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    const abv = this.state.beerWeight;
    const ibu = this.props.selection.hops;

    function list() {
      var bur = abv.reduce((acc, beer) => {
        var match = beerFilter(beer.id)
        acc.push(match[0])
        return acc
      }, [])
      return bur.filter(bottle => bottle !== undefined)
    }
    function beerFilter(abvId) {
      return ibu.filter(ibuBeer => { return (ibuBeer.id === abvId) })
    }
    const isloading = this.state.loading;
    return (
      <div className="result">
        <h2>Your Beer Choices</h2>
        {isloading ? <h2>Loading...</h2> : <BeerList beer={list()} />}
        <button id="2" className="beer-button" onClick={this.props.click} >Changed Your Mind? Let's Try Again</button>
      </div>
    );
  }
}

export default Result;