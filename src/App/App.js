import React from 'react';
import firebase from 'firebase/app';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import firebaseConnection from '../helpers/data/connection';
import Home from '../components/Home/Home';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        {(authed) && <MyNavbar authed={authed} />}
        {
          (authed) ? (<Home />) : (<MyNavbar authed={authed} />)
        }
      </div>
    );
  }
}

export default App;
