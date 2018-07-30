import React, { Component } from 'react';

class Beer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hops: null,
      weight: null,
      showForm: true
    }
  }
  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    });
  }
  formSubmit = (event) => {
    event.preventDefault();
    let selections = this.state;
    this.props.toResult(selections);
  }
  showGet = (event) => {
    event.preventDefault();
    let apiURL = `https://api.punkapi.com/v2/beers?${this.state.hops}&per_page=80`
    fetch(apiURL)
      .then(response => response.json())
      .then(response => this.setState({ hops: response }))
      .catch(error => console.log(error))
    this.setState({ showForm: false })
  }
  render() {
    const showing = this.state.showForm;
    const secondQuestion = <React.Fragment>
      <label htmlFor='weight'>How much boozey? how much alcohol. 1 is low and 5 is alot</label>
      <select type='list' name='weight' onChange={this.handleChange} >
        <option default >please select one, from a scale from 1 to 5</option>
        <option value='abv_lt=4' >1</option>
        <option value='abv_gt=4&abv_lt=8' >2</option>
        <option value='abv_gt=8&abv_lt=12' >3</option>
        <option value='abv_gt=12&abv_lt=17' >4</option>
        <option value='abv_gt=17' >5</option>
      </select>
      <button type="submit" name="submit" value="Submit" >Beer Me!</button>
    </React.Fragment>

    return (
      <div className="beer-app" >
        <h2>What beer should I get?</h2>
        <form className="beer-form" onSubmit={this.formSubmit}>
          <label htmlFor='hops'>How hoppy? 1 is a little hoppy to 5 being very hoppy.</label>
          <select type='list' name='hops' onChange={this.handleChange} onInput={this.showGet}>
            <option default >please select one, from a scale from 1 to 5</option>
            <option value='ibu_lt=10' >1</option>
            <option value='ibu_gt=10&ibu_lt=30' >2</option>
            <option value='ibu_gt=30&ibu_lt=50' >3</option>
            <option value='ibu_gt=50&ibu_lt=70' >4</option>
            <option value='ibu_gt=70' >5</option>
          </select>
          {showing ? '' : secondQuestion}
        </form>
      </div>
    );
  }
}

export default Beer;
