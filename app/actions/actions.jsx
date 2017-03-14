import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  };
};

export var startAddProduct = (productName, productPrice) => {
  return (dispatch, getState) => {
    var product = {
          productName,
          productPrice,
          addedAt: moment().format('LLLL')
    };
    var productRef = firebaseRef.child('products').push(product);
    productRef.then(() => {
      dispatch(addProduct({
        ...product,
        id: productRef.key
      }));
    });
  };
};

export var buyProduct = (productName, productPrice) => {
  return {
    type: 'BUY_PRODUCT',
    productName,
    productPrice
  };
};