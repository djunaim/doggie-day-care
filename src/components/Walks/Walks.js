import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';
import WalkForm from '../WalkForm/WalkForm';

import employeeShape from '../../helpers/propz/employeeShape';

import dogShape from '../../helpers/propz/dogShape';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addWalks: PropTypes.func,
    deleteSingleWalk: PropTypes.func,
  }

  render() {
    const {
      walks,
      dogs,
      employees,
      addWalks,
      deleteSingleWalk,
    } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} deleteSingleWalk={deleteSingleWalk} />);
    return (
      <div>
        <div>
        <WalkForm addWalks={addWalks} dogs={dogs} employees={employees} />
        </div>
        <div className="container">
          <div className="row">
            {walkCards}
          </div>
        </div>
      </div>
    );
  }
}

export default Walks;
