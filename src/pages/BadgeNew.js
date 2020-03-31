import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from './../components/Badge';

import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Paho"
                lastName="Alapizco"
                jobTitle="Project Manager día, Web Developer de noche"
                twitter="pahoalapizco"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;
