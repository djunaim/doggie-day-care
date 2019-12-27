import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    getWalkId: PropTypes.func,
  }

  render() {
    const { walks } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} />);
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
