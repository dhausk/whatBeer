import React from 'react';
import logo from '../assets/LogoPic.png';

const Header = (props) => {
  return (
    <header className="app-header">
      <div className="logo-title">
        <img src={logo} alt="Beer Logo" />
        <h1>What Beer should I get?</h1>
      </div>
      <nav className="nav-bar-header">
        <button onClick={props.click} id="1" >Home</button>
        <button onClick={props.click} id="2" >What Beer</button>
        <button onClick={props.click} id="3" >Contact Us</button>
      </nav>
    </header>
  );
}
export default Header
