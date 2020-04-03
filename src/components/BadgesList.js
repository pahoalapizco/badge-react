import React from 'react';
import { Link } from 'react-router-dom';
import './style/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>No badges were found</h3>
          <Link className="btn btn-success" to="/badges/new">
            Create new badge
          </Link>
        </React.Fragment>
      )
    }

    return(
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge => {
         return( 
          <li key={badge.id} className="BadgesListItem">
          <img src={badge.avatarUrl} alt=""className="BadgesListItem__avatar"/>
          <div>
             <div><strong>{badge.firstName} {badge.lastName}</strong></div>
             <div className="Twitter__name">
                <span className="Twitter__logo"></span>@{badge.twitter}
             </div>
             <div>{badge.jobTitle}</div>
          </div>
       </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;
