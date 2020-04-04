import React from 'react';
import md5 from 'md5';
import header from '../images/platziconf-logo.svg';
import Badge from './../components/Badge';
import BadgeForm from './../components/BadgeForm';
import PageLoading from './../components/PageLoading';
import api from '../api';

import './styles/BadgeEdit.css';

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null});
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      );
      
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

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
      const badgeId = this.props.match.params.badgeId;
      await api.badges.update(badgeId, this.state.form);
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
    if(this.state.loading === true){
      return (
        <PageLoading />
      )
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-img img-fluid" src={header}/>
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit;
