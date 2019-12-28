import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';
import WalkForm from '../WalkForm/WalkForm';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    addWalks: PropTypes.func,
  }

  render() {
    const { walks, addWalks } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} />);
    return (
      <div>
        <div>
        <WalkForm addWalks={addWalks} />
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
