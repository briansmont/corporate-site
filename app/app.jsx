var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

import router from 'Router';

var actions = require('actions');
var store = require('configureStore').configure();
var {Provider} = require('react-redux');

store.dispatch(actions.startGetProducts());
store.dispatch(actions.startGetPurchases());

// load foundation
//$(document).foundation();

// load APP css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
  {router}
  </Provider>,
  document.getElementById('app')
);