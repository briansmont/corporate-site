var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var $ = require('jQuery');

import router from 'Router';

var actions = require('actions');
var store = require('configureStore').configure();
var {Provider} = require('react-redux');

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addProduct('Boat', 10000));
store.dispatch(actions.setSearchText('car'));


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