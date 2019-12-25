import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';
import Dog from '../Dog/Dog';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const dogCards = dogs.map((dog) => <Dog key={dog.id} dog={dog} />);
    return (
      <div className="container">
        <div className="row">
          {dogCards}
        </div>
      </div>
    );
  }
}

export default DogPen;
