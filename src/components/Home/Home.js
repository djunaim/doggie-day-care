import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';

import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getDogs();
    const employees = employeesData.getEmployees();
    this.setState({ dogs, employees });
  }

  render() {
    return (
      <div>
        <div className="dogPenDiv">
          <DogPen dogs={this.state.dogs} />
        </div>
        <div className="staffRoomDiv">
          <StaffRoom employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default Home;
