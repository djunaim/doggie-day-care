import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    getWalkId: PropTypes.func,
  }

  getSingleWalkId = () => {
    const { walk, getWalkId } = this.props;
    getWalkId(walk.id);
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-md-3">
      <div className="card">
        <div className="card-body">
          <p className="card-text">{walk.dogId}</p>
          <p className="card-text">{walk.employeeId}</p>
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
