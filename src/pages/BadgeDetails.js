import React from 'react'
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import PageError from './../components/PageError';
import PageLoading from './../components/PageLoading';
import ConfLogo from '../images/platziconf-logo.svg';
import api from '../api';

import './styles/BadgeDetails.css';

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );

      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if(this.state.loading) {
      return (<PageLoading />);
    }
    if(this.state.error) {
      return (<PageError error={this.state.error.message} />);
    }

    const badge = this.state.data;

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
                  <button className="btn btn-danger"> Delete </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;