import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class WalkForm extends React.Component {
  state = {
    employeeName: '',
    dogName: '',
    date: '',
  }

  static propTypes = {
    addWalks: PropTypes.func,
  }

  addWalkEvent = (e) => {
    e.preventDefault();
    const { addWalks } = this.props;
    const newWalk = {
      dogId: this.state.dogName,
      employeeId: this.state.employeeName,
      date: this.state.date,
      uid: authData.getUid(),
    };
    addWalks(newWalk);
    this.setState({ employeeName: '', dogName: '', date: '' });
  }

  render() {
    return (
      <div>
        <form className='WalkForm col-6 offset-3'>
        <div className="input-group mb-3">
            <label htmlFor="dogName">Dog Name: </label>
            <select className="form-control" id="dogName" onChange={() => {}}>
              <option defaultChecked>Choose One...</option>
              <option>Meep</option>
              <option>Chocolate</option>
              <option>Flower</option>
              <option>Bunny</option>
              <option>Fluffer Nutter</option>
              <option>Buddy</option>
              <option>Reckless</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="employeeName">Employee Name: </label>
            <select
              className="form-control"
              id="employeeName"
              onChange={() => {}}>
              <option defaultChecked>Choose One...</option>
              <option>Alexia Bourne</option>
              <option>Alex Markus</option>
              <option>Ranch Market</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={() => {}}
              onChange={() => {}}
              />
          </div>
          <div>
            <button className="btn btn-success" onClick={this.addWalkEvent}>Add Walk</button>
          </div>
        </form>
      </div>
    );
  }
}

export default WalkForm;
