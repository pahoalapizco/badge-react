import React from 'react';

class BadgeForm extends React.Component {
  handeClick = e => {
  }

  handleSubmint = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmint}>
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