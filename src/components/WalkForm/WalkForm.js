import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

class WalkForm extends React.Component {
  state = {
    employeeName: '',
    dogName: '',
    date: '',
  }

  static propTypes = {
    addWalks: PropTypes.func,
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
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

  handleDogChange = (e) => {
    console.log(e.target.value);
  }

  // createDogOptions = () => {
  //   const { dogs } = this.props;
  //   dogs.map((dog) => (
  //     (<option key={dog.id} value={dog.name}>{dog.name}</option>)));
  // }

  render() {
    const { dogName } = this.state;
    const { dogs } = this.props;
    return (
      <div>
        <form className='WalkForm col-6 offset-3'>
        <div className="input-group mb-3">
            <label htmlFor="dogName">Dog Name: </label>
            <select className="form-control" value={dogName} id="dogName" onChange={this.handleDogChange}>
              <option>Choose One...</option>
              {
              dogs.map((dog) => (
                (<option key={dog.id} value={dog.name}>{dog.name}</option>)))
              }
            </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="employeeName">Employee Name: </label>
            <select
              className="form-control"
              id="employeeName"
              onChange={() => {}}>
              <option defaultValue>Choose One...</option>
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
