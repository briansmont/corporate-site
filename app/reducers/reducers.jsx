var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.product
      ];
    case 'GET_PRODUCTS':
      return [
        ...state,
        ...action.products
      ];
    default:
      return state;
  }
};

export var purchaseReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      return [
        ...state,
        action.purchase
      ];
    case 'GET_PURCHASES':
      return [
        ...state,
        ...action.purchases
      ];
      

    default:
      return state;
  }
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
