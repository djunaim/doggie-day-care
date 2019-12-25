import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import DogPen from '../components/DogPen/DogPen';
import dogsData from '../helpers/data/dogsData';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getDogs();
    this.setState({ dogs });
  }

  render() {
    return (
      <div className="App">
        <DogPen dogs={this.state.dogs} />
      </div>
    );
  }
}

export default App;
