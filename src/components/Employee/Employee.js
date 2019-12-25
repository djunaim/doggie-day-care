import React from 'react';
import './Employee.scss';

import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="card employeeCard col-md-3">
        <div className="card-body">
          <p className="card-text">{employee.firstName}</p>
          <p className="card-text">{employee.lastName}</p>
          <p className="card-text">{employee.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default Employee;
