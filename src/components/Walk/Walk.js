import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import employeeShape from '../../helpers/propz/employeeShape';

import dogShape from '../../helpers/propz/dogShape';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteSingleWalk: PropTypes.func,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  state = {
    employeeFirstName: '',
    employeeLastName: '',
    dogName: '',
  }

  deleteSingleWalkEvent = (e) => {
    e.preventDefault();
    const { deleteSingleWalk, walk } = this.props;
    deleteSingleWalk(walk.id);
  }

  setEditMode = (e) => {
    const { setEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    setEditMode(true);
    setWalkToEdit(walk);
  }

  findEmployeeName = () => {
    const { employees, walk } = this.props;
    const getEmployeeName = employees.find((employee) => employee.id === walk.employeeId);
    return `${getEmployeeName.firstName} ${getEmployeeName.lastName}`;
  }

  findDogName = () => {
    const { dogs, walk } = this.props;
    const getDogName = dogs.find((dog) => dog.id === walk.dogId);
    return `${getDogName.name}`;
  }

  componentDidMount() {
    this.findDogName();
    this.findEmployeeName();
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-md-3">
      <div className="card">
        <div className="card-body">
          <p className="card-text">{this.findDogName()}</p>
          <p className="card-text">{this.findEmployeeName()}</p>
          <p className="card-text">{walk.date}</p>
          <button className="btn btn-danger" onClick={this.deleteSingleWalkEvent}>Delete Walk</button>
          <button className="btn btn-secondary" onClick={this.setEditMode}>Edit Walk</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
