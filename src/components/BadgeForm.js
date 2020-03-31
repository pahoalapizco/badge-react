import React from 'react';

class BadgeForm extends React.Component {
  state = {
    jobTitle: 'Developer'
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handeClick = e => {
    console.log('Button was clicked')
  }

  handleSubmint = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmint}>
          <div className="form-group">
            <label>Firs Name</label>
            <input 
              onChange={this.handleChange}
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Las Name</label>
            <input 
              onChange={this.handleChange}
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.handleChange}
              className="form-control" 
              type="email" 
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={this.handleChange}
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.handleChange}
              className="form-control" 
              type="text" 
              name="twitter" 
              value={this.state.twitter}
            />
          </div>

          <button 
            // type='button'
            onClick={this.handeClick} 
            className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm