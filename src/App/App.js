import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import DogPen from '../components/DogPen/DogPen';
import dogsData from '../helpers/data/dogsData';

import StaffRoom from '../components/StaffRoom/StaffRoom';
import employeesData from '../helpers/data/employeesData';

class App extends React.Component {
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
      <div className="App">
        <div className="dogPenDiv">
          <h1>Dog Pen</h1>
          <DogPen dogs={this.state.dogs} />
        </div>
        <div className="staffRoomDiv">
          <h1>Staff Room</h1>
          <StaffRoom employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

export default App;
