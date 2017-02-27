var React = require('react');
var Faker = require('faker');

var Products = React.createClass({
  renderCatalog: function() {
    var products = [];
    for (var i = 0; i < 5; i++) {
      var product = {
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
      };
      products.push(product);
    }
    for (var i = 0; i < products.length; i++) {
      return (
        <div>
          <h5>{products[i].name}</h5>
          <p>{products[i].price}</p>
        </div>
      );
    }
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