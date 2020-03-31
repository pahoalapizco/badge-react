import React from 'react';

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({ 
      value: e.target.value,
      name: e.target.name
    });
  }

  handeClick = e => {
    console.log('Button was clicked')
  }

  handleSubmint = e => {
    e.preventDefault();
    console.log('Button was submitted');
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
              className="form-control" type="text" name="firstName" 
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