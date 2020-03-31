import React from 'react';
import logo from '../images/logo.svg'
import './style/Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a className="Navbar__brand" href="/">
          <img  className="Navbar__brand-logo" src={logo} alt="logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    )
  }
}

export default Navbar;
