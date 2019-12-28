import React from 'react';

class WalkForm extends React.Component {
  render() {
    return (
      <div>
        <form className='WalkForm col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="employeeName">Employee Name</label>
            <input
              type="text"
              className="form-control"
              id="employeeName"
              placeholder="Enter name"
              value={() => {}}
              onChange={() => {}}
              />
          </div>
          <div className="form-group">
            <label htmlFor="dogName">Dog Name</label>
            <input
              type="text"
              className="form-control"
              id="dogName"
              value={() => {}}
              onChange={() => {}}
              />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              value={() => {}}
              onChange={() => {}}
              />
          </div>
          <div>
            <button className="btn btn-success">Add Walk</button>
          </div>
        </form>
      </div>
    );
  }
}

export default WalkForm;
