import React from 'react';

const BeerList = (props) => {
    const listItems = props.beer.map(brew => {
        return (<li className="brew" key={brew.id}>
            <img src={brew.image_url} alt={brew.name} />
            <div>
                <h3>{brew.name}</h3>
                <p>"{brew.tagline}"</p>
                <p>{brew.description}</p>
                <p>{brew.abv} ABV, {brew.ibu} IBU</p>
            </div>

        </li>)
    })
    return (
        <ul>
            {listItems}
        </ul>);
}
export default BeerList;