var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

var Main = require('Main');
var About = require('About');
var Products = require('Products');
var Home = require('Home');
var Contact = require('Contact');
var YourAccount = require('YourAccount');
import router from 'Router';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addProduct('Car', 10000));
store.dispatch(actions.setSearchText('car'));


// load foundation
//$(document).foundation();

// load APP css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  {router},
  document.getElementById('app')
);