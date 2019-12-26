import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#">Doggie Daycare</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              (!authed) ? (<button className="btn btn-outline-success my-2 my-sm-0" onClick={this.loginClickEvent}>Login with Google</button>) : (<button className="btn btn-outline-danger" onClick={this.logMeOut}>Log Out</button>)
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
