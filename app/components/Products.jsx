var React = require('react');
var Faker = require('faker');

var Products = React.createClass({
  renderCatalog: function() {
    var products = [];
    for (var i = 0; i < 8; i++) {
      var product = {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
      };
      products.push(
        <div>
          Item: {product.name}, Price: {product.price}
        </div>  
        
      );
    }
    return products;
  },
  
  
  render: function() {
    return (
      <div>
        <h1 className="center-text"><u>Products</u></h1>
        {this.renderCatalog()}

        
        
      </div>
    );
  }
});


module.exports = Products;