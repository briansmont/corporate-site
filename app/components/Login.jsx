import React from 'react';
import * as Redux from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase/';
var store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/profile');
  } else {
    store.dispatch(actions.logout());
    hashHistory('/login');
  }
});

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  
  render() {
    return (
      <div className="top-pad">
        
        <div className="row comp-pad">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Log in with Google account below.</p>
              <button className="button" onClick={this.onLogin}>Login with Google</button>
            </div>
          </div>
        </div>
        <div className="bottom-pad top-pad center-text">
          <h4>Once you sign up you can...</h4>
          <em>
            <p>Order any items from our catalog!</p>
            <p>Build your own custom profile!</p>
            <p>Check out your past orders!</p>
            <p>See news updates as they unfold!</p>
            <p>Only you can access your information!</p>
          </em>
          <h4>Can't wait to work with you!</h4>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);