import React from 'react';
import {hashHistory, Route, Router, IndexRoute} from 'react-router';

import About from 'About';
import Products from 'Products';
import Contact from 'Contact';
import Profile from 'Profile';
import Main from 'Main';
import Home from 'Home';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/login');
  }
  next();
};
var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/profile');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" component={Profile} onEnter={requireLogin}/>
      <Route path="/login" component={Login} onEnter={redirectIfLoggedIn}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);