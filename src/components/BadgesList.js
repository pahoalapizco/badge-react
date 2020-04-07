import React from 'react';
import { Link } from 'react-router-dom';

import './style/BadgesList.css';

const BadgesListItem = ({ badge }) => {
  return (
    <div className="BadgesListItem">
      <img
        className="BadgesListItem__avatar"
        src={badge.avatarUrl}
        alt={`${badge.firstName} ${badge.lastName}`}
      />
      <div>
        <strong>
          {badge.firstName} {badge.lastName}
        </strong>
        <div className="Twitter__name">
          <span className="Twitter__logo"></span>@{badge.twitter}
        </div>
        {badge.jobTitle}
      </div>
    </div>
  );
}

// custom hook!
const useSearchBadges = (badges) => {
  const [ query, setQuery ] = React.useState('');
  const [ filteredBadges, setFilteredBadges ]  = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toUpperCase().includes(query.toUpperCase());
    });
    setFilteredBadges(result);
  }, [ badges, query ]);

  return { query, setQuery, filteredBadges };
}

const BadgesList = ({ badges }) => {
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if(filteredBadges.length === 0) {
    return(
      <React.Fragment>
        <div className="form-group">
          <label>Filter Baadges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-success" to='/badges/new'> Create new  </Link>
      </React.Fragment>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Baadges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link 
                className="text-reset text-decoration-none" 
                to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;