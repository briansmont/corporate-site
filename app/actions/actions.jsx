import firebase, {firebaseRef, googleProvider} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// CREATE NEW PRODUCTS AND ADD TO CATALOG
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

// SHOW PRODUCT CATALOG
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


// MAKE PURCHASES
export var buyProduct = (purchase) => {
  return {
    type: 'BUY_PRODUCT',
    purchase
  };
};

export var startBuyProduct = (productName, productPrice) => {
  return (dispatch, getState) => {
    var purchase = {
          productName,
          productPrice,
          purchasedAt: moment().format('LLLL')
    };
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var purchaseRef = firebaseRef.child(`users/${uid}/purchases`).push(purchase);
    purchaseRef.then(() => {
      dispatch(buyProduct({
        ...purchase,
        id: purchaseRef.key
      }));
    });
  };
};



// SHOW PURCHASES IN PROFILE
export var getPurchases = (purchases) => {
  return {
    type: 'GET_PURCHASES',
    purchases
  };
};

export var startGetPurchases = (uid) => {
  return (dispatch, getState) => {
    console.log('uid is here from startGetPurchases:', uid);
    var purchasesRef = firebaseRef.child(`users/${uid}/purchases`);
    return purchasesRef.once('value').then((snapshot) => {
      var purchases = snapshot.val() || {};
      var parsedPurchases = [];
      
      Object.keys(purchases).forEach((purchaseId) => {
        parsedPurchases.push({
          id: purchaseId,
          ...purchases[purchaseId]
        });
      });
      dispatch(getPurchases(parsedPurchases));
    });
  };
};


// LOG IN & LOG OUT ACTIONS

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(googleProvider).then((result) => {
      dispatch(startGetPurchases(result.user.uid));
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    });
  };
};


