module.exports = {
  filterProducts: function(products, searchText) {
    var filteredProducts = products;
    
    //Filter by searchText
    filteredProducts = filteredProducts.filter((product) => {
      var item = product.productName.toLowerCase();
      var lowerSearchText = searchText.toLowerCase();
      return lowerSearchText.length === 0 || item.indexOf(lowerSearchText) > -1;
    });
    
    return filteredProducts;
  },
  
  filterOrders: function(purchases) {
    var filteredOrders = purchases;
    var reversedOrders = filteredOrders.reverse();
    return reversedOrders;
  }
  
};