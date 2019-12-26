import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';

import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';

import authData from '../../helpers/data/authData';
import Walks from '../Walks/Walks';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const uid = authData.getUid();
    this.getDogsData(uid);
    this.getEmployeesData(uid);
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

  render() {
    const { dogs, employees } = this.state;
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
          <Walks />
        </div>
      </div>
    );
  }
}

export default Home;
