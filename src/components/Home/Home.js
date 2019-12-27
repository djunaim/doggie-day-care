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
    dogName: [],
    employeeFirstName: [],
    employeeLastName: [],
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
        walks.forEach((walk) => {
          walksData.getSingleWalk(walk.id).then(() => {
            dogsData.getSingleDog(walk.dogId).then((dog) => {
              this.setState({ dogName: dog.data.name });
              console.log(walk.id);
            });
            employeesData.getSingleEmployee(walk.employeeId).then((employee) => {
              this.setState({ employeeFirstName: employee.data.firstName, employeeLastName: employee.data.lastName });
            });
          });
        });
        this.setState({ walks });
      })
      .catch((error) => console.error(error));
  }

  // getWalkId = (walkId) => {
  //   walksData.getSingleWalk(walkId)
  //     .then((walks) => {
  //       dogsData.getSingleDog(walks.dogId).then((dog) => {
  //         this.setState({ dogName: dog.name });
  //       });
  //       employeesData.getSingleEmployee(walks.employeeId).then((employee) => {
  //         this.setState({ employeeName: employee.name });
  //       });
  //       this.setState({ walks });
  //     })
  //     .catch((error) => console.error(error));
  // }

  render() {
    const {
      dogs,
      employees,
      walks,
      dogName,
      employeeFirstName,
      employeeLastName,
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
          <Walks dogName={dogName} employeeFirstName={employeeFirstName} employeeLastName={employeeLastName} getWalksData={this.state.getWalksData} walks={walks} />
        </div>
      </div>
    );
  }
}

export default Home;
