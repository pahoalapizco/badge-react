import React from 'react';
import md5 from 'md5';
import header from '../images/platziconf-logo.svg';
import Badge from './../components/Badge';
import BadgeForm from './../components/BadgeForm';
import PageLoading from './../components/PageLoading';
import api from '../api';

import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
  state = { 
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: ''
    } 
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  handleClick = () => {
    const { email } = this.state.form;
    const hash = md5(email);
    const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl
      }
    });
  }

  render() {
    if(this.state.loading){
      return (
        <PageLoading />
      )
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-img img-fluid" src={header} alt="Hero"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                twitter={this.state.form.twitter || 'TWITTER'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                onClick={this.handleClick}
                form={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;
