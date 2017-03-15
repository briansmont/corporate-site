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


export var getProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    products
  };
};

export var startGetProducts = () => {
  return (dispatch, getState) => {
    var productsRef = firebaseRef.child('products');
    return productsRef.once('value').then((snapshot) => {
      var products = snapshot.val() || {};
      var parsedProducts = [];
      
      Object.keys(products).forEach((productId) => {
        parsedProducts.push({
          id: productId,
          ...products[productId]
        });
      });
      dispatch(getProducts(parsedProducts));
    });
  };
};