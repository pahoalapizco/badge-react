import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import ConfLogo from '../images/platziconf-logo.svg';

import './styles/BadgeDetails.css';

const BadgeDetails = ({ badge, onCloseModal, onOpenModal, modalIsOpen, onDeleteBadge }) => {
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={ConfLogo} alt="Cong logo"/>
            </div> 
            <div className="BadgeDetails__hero-attendant-name col-6">
              <h1> {badge.firstName} {badge.lastName} </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge 
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
            />
          </div>
          <div className="col-6">
            <h2> Actions </h2>
            <div>
              <div>
                <Link className="btn btn-success mb-4" to={`/badges/${badge.id}/edit`}> Edit </Link>
              </div>
              <div>
                <button onClick={onOpenModal} className="btn btn-danger"> Delete </button>
                <DeleteBadgeModal 
                  isOpen={modalIsOpen}
                  onClose={onCloseModal}
                  onDeleteBadge={onDeleteBadge}
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
