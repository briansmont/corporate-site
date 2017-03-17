var React = require('react');
import Orders from 'Orders';
import * as actions from 'actions';
import {hashHistory} from 'react-router';
import * as Redux from 'react-redux';

import firebase from 'app/firebase/';

export var Profile = React.createClass({
  renderUserData: function() {
    var user, name, email, userImage, userID;
    if (firebase.auth().currentUser) {
      user = firebase.auth().currentUser;
      console.log(user);
      name = user.displayName;
      email = user.email;
      userImage = user.photoURL;
      console.log(userImage);
      userID = user.uid;
      return (
        <div>
          <div class="row">
            <img src={userImage}></img>
            <h2>{name}</h2>
          </div>
          <p>{email}</p>
        </div>
      );
    } else {
      return <p>No User Data Available</p>;
    }
    
    
    
  },
  
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
        {this.renderUserData()}
        <Orders/>
      </div>
    );
  }
});

export default Redux.connect()(Profile);