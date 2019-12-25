import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dogs: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="card dogCard col-md-3">
        <img src={dog.imageUrl} className="card-img-top" alt="cute dog"/>
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <p className="card-text">Owner: {dog.owner}</p>
          <p className="card-text">Description: {dog.description}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    );
  }
}

export default Dog;
