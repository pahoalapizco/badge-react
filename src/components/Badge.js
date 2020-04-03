import React from 'react';
import Gravatar from './Gravatar';
import confLogo from '../images/badge-header.svg';

import './style/Badge.css';


class Badge extends React.Component {
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo"/>
        </div>

        <div className="Badge__section-name">
          <Gravatar 
            email={email} 
            alt="Avatar" 
            className="Badge__avatar"
          />
          <h1> {firstName} <br /> {lastName} </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    );
  }
}

export default Badge;