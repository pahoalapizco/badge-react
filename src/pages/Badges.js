import React from 'react';
import { Link } from 'react-router-dom';
import ConfLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';
import api from '../api';

import './styles/Badges.css';

class Badges extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }
  
  componentDidMount(){
    this.fetchData();

    // setInterval(this.fetchData, 5000);
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

   fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if(this.state.loading && !this.state.data) {
      return <PageLoading />
    }
    
    if(this.state.error) {
      return <PageError error={this.state.error.message} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={ConfLogo} alt="Conf logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-success"> 
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}/>
          </div>
        </div>
        {this.state.loading && <MiniLoader />}
      </React.Fragment>
    );
  }
}

export default Badges;
