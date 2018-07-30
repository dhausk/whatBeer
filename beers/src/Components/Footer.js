import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <nav className="nav-footer">
        <button onClick={props.click} id="1" >Home</button>
        <button onClick={props.click} id="2" >What Beer</button>
        <button onClick={props.click} id="3" >Contact Us</button>
      </nav>
      <small>	&#169; Copyright 2018</small>
    </footer>
  )
}
export default Footer;
