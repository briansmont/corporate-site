export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// export var buyProduct 
// export var showProducts
// export var showPurchases
// export var searchItem


export var addProduct = (productName, productPrice) => {
  return {
    type: 'ADD_PRODUCT',
    productName,
    productPrice
  };
};

export var buyProduct = (productName, productPrice) => {
  return {
    type: 'BUY_PRODUCT',
    productName,
    productPrice
  };
};