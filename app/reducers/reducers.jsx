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
        {
          id: uuid(),
          item: action.productName,
          price: action.productPrice,
          addedAt: moment().format('LLLL')
        }
      ];
    // case 'BUY_PRODUCT':
    //   return [
    //     ...state,
    //     {
    //       purchaseId: uuid(),
    //       item: action.productName,
    //       price: action.productPrice,
    //       purchasedAt: moment().format('LLLL')
    //     }
    //   ];
      

    default:
      return state;
  }
};

export var purchaseReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      return [
        ...state,
        {
          id: uuid(),
          item: action.productName,
          price: action.productPrice,
          purchasedAt: moment().format('LLLL')
        }
      ];
      

    default:
      return state;
  }
};






