import React from 'react';
import { Link } from 'react-router-dom';

import ConfLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

import './styles/BadgeHome.css';

const BadgeHome = () => {
  return (
    <div className="home">
        <div className="home_info">
            <img src={ ConfLogo } alt="=Platzi Conf Logo"/>
            <h1 className="text-uppercase">Print your badges</h1>
            <p>The easiest way to manage your <br/>conference</p>
            <Link className="btn btn-success"to="/badges">Start now</Link>
        </div>
        <div className="home_logo">
            <img src={ astronauts } alt="Astronauts"/>
        </div>
    </div>
  )
}

export default BadgeHome;
