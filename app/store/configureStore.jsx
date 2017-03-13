var redux = require('redux');
var {searchTextReducer, productsReducer, purchaseReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    products: productsReducer,
    purchases: purchaseReducer
  });
  
  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
};