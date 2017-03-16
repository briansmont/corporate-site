var React = require('react');
import Orders from 'Orders';
import * as actions from 'actions';
import {hashHistory} from 'react-router';
import * as Redux from 'react-redux';

import firebase from 'app/firebase/';

export var Profile = React.createClass({
  onLogout: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.startLogout());
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        hashHistory.push('/login');
      }
    });
  },
  
  render: function() {
    return (
      <div>
        <div className="page-actions">
          <a href="/" onClick={this.onLogout}>Sign Out</a>
        </div>
        <h1 className="page-title">Your Account!</h1>
      
        <Orders/>
      </div>
    );
  }
});

export default Redux.connect()(Profile);