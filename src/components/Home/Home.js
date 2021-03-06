import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';

import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';

import authData from '../../helpers/data/authData';

import Walks from '../Walks/Walks';
import walksData from '../../helpers/data/walksData';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    walkToEdit: {},
    editMode: false,
    showWalkForm: false,
  }

  componentDidMount() {
    const uid = authData.getUid();
    this.getDogsData(uid);
    this.getEmployeesData(uid);
    this.getWalksData(uid);
  }

  getDogsData = (uid) => {
    dogsData.getDogs(uid)
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((error) => console.error(error));
  }

  getEmployeesData = (uid) => {
    employeesData.getEmployees(uid)
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((error) => console.error(error));
  }

  getWalksData = (uid) => {
    walksData.getWalks(uid)
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((error) => console.error(error));
  };

  addWalks = (newWalk) => {
    const uid = authData.getUid();
    walksData.addWalks(newWalk)
      .then(() => {
        this.getWalksData(uid);
      })
      .catch((error) => console.error(error));
  }

  deleteSingleWalk = (walkId) => {
    const uid = authData.getUid();
    walksData.deleteWalks(walkId)
      .then(() => {
        this.getWalksData(uid);
      })
      .catch((error) => console.error(error));
  }

  updateWalk = (walkId, updatedWalk) => {
    const uid = authData.getUid();
    walksData.updateWalks(walkId, updatedWalk)
      .then(() => {
        this.getWalksData(uid);
        this.setState({ editMode: false, showWalkForm: false });
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showWalkForm: true });
  }

  setWalkToEdit = (walk) => {
    this.setState({ walkToEdit: walk });
  }

  setShowWalkForm = () => {
    this.setState({ showWalkForm: true });
  }

  render() {
    const {
      dogs,
      employees,
      walks,
      walkToEdit,
      editMode,
      showWalkForm,
    } = this.state;
    return (
      <div>
        <div className="dogPenDiv">
          <h2>Dog Pen</h2>
          <DogPen dogs={dogs} />
        </div>
        <div className="staffRoomDiv">
          <h2>Staff Room</h2>
          <StaffRoom employees={employees} />
        </div>
        <div className="walksDiv">
          <h2>Walks</h2>
          <Walks walks={walks} dogs={dogs} employees={employees} walkToEdit={walkToEdit} editMode={editMode} showWalkForm={showWalkForm} addWalks={this.addWalks} deleteSingleWalk={this.deleteSingleWalk} updateWalk={this.updateWalk} setEditMode={this.setEditMode} setWalkToEdit={this.setWalkToEdit} setShowWalkForm={this.setShowWalkForm} />
        </div>
      </div>
    );
  }
}

export default Home;
