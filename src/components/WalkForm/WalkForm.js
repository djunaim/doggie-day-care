import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';
import walkShape from '../../helpers/propz/walkShape';

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
    walkToEdit: walkShape.walkShape,
    editMode: PropTypes.bool,
    updateWalk: PropTypes.func,
  }

  componentDidMount() {
    const { editMode, walkToEdit } = this.props;
    if (editMode) {
      this.setState({ employeeName: walkToEdit.employeeId, dogName: walkToEdit.dogId, date: walkToEdit.date });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.walkToEdit.id !== this.props.walkToEdit.id) && this.props.editMode) {
      this.setState({ employeeName: this.props.walkToEdit.employeeId, dogName: this.props.walkToEdit.dogId, date: this.props.walkToEdit.date });
    }
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalk, walkToEdit } = this.props;
    const updatedWalk = {
      dogId: this.state.dogName,
      employeeId: this.state.employeeName,
      date: this.state.date,
      uid: walkToEdit.uid,
    };
    updateWalk(walkToEdit.id, updatedWalk);
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
    this.setState({ dogName: e.target.value });
  }

  handleEmployeeChange = (e) => {
    this.setState({ employeeName: e.target.value });
  }

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  }

  render() {
    const { dogName, employeeName, date } = this.state;
    const { dogs, employees, editMode } = this.props;
    return (
      <div>
        <form className='WalkForm col-6 offset-3'>
        <div className="input-group mb-3">
            <label htmlFor="dogName">Dog Name: </label>
            <select className="form-control" value={dogName} id="dogName" onChange={this.handleDogChange}>
              <option>Choose One...</option>
              {
              dogs.map((dog) => (
                (<option key={dog.id} value={dog.id}>{dog.name}</option>)))
              }
            </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="employeeName">Employee Name: </label>
            <select
              className="form-control"
              id="employeeName"
              value={ employeeName }
              onChange={this.handleEmployeeChange}>
              <option defaultValue>Choose One...</option>
              {
              employees.map((employee) => (
                (<option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)))
              }
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="date">Date: </label>
            <input
              className="form-control"
              id="date"
              format="mm/dd/yyyy"
              type="date"
              value={date}
              onChange={this.handleDateChange}
              />
          </div>
          <div>
            {
              (!editMode) ? (<button className="btn btn-success" onClick={this.addWalkEvent}>Add Walk</button>)
                : (<button className="btn btn-secondary" onClick={this.updateWalkEvent}>Update Walk</button>)
            }
          </div>
        </form>
      </div>
    );
  }
}

export default WalkForm;
