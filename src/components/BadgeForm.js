import React from 'react';

class BadgeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Firs Name</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.props.form.firstName}
            />
          </div>
          <div className="form-group">
            <label>Las Name</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.props.form.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="email" 
              name="email"
              value={this.props.form.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={this.props.form.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange}
              className="form-control" 
              type="text" 
              name="twitter" 
              value={this.props.form.twitter}
            />
          </div>

          <button 
            onClick={this.props.onClick} 
            className="btn btn-success">
            Save
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default BadgeForm