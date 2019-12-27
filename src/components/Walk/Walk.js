import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    dogName: PropTypes.string,
    employeeFirstName: PropTypes.string,
    employeeLastName: PropTypes.string,
  }

  // componentDidMount() {
  //   const { walk, getWalkId } = this.props;
  //   getWalkId(walk.id);
  // }

  render() {
    const {
      walk,
      dogName,
      employeeFirstName,
      employeeLastName,
    } = this.props;
    return (
      <div className="Walk col-md-3">
      <div className="card">
        <div className="card-body">
          <p className="card-text">{dogName}</p>
          <p className="card-text">{employeeFirstName} {employeeLastName}</p>
          <p className="card-text">{walk.date}</p>
          <button className="btn btn-danger" onClick={() => {}}>Delete Walk</button>
          <button className="btn btn-secondary" onClick={() => {}}>Edit Walk</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
