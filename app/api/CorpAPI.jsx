module.exports = {
  filterProducts: function(products, searchText) {
    var filteredProducts = products;
    
    //Filter by searchText
    filteredProducts = filteredProducts.filter((product) => {
      // console.log(product);
      var item = product.item.toLowerCase();
      return searchText.length === 0 || item.indexOf(searchText) > -1;
    });
    
    return filteredProducts;
  }
};