import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    dogName: PropTypes.string,
    employeeFirstName: PropTypes.string,
    employeeLastName: PropTypes.string,
    getWalksData: PropTypes.func,
  }

  render() {
    const {
      walks,
      getWalkId,
      dogName,
      employeeFirstName,
      employeeLastName,
    } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} getWalkId={getWalkId} dogName={dogName} employeeFirstName={employeeFirstName} employeeLastName={employeeLastName} />);
    return (
      <div className="container">
        <div className="row">
          {walkCards}
        </div>
      </div>
    );
  }
}

export default Walks;
