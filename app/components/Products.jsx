var React = require('react');
var Faker = require('faker');

var catalog = [
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price()},
];

var Products = React.createClass({
  renderCatalog: function() {
    var products = [];
    for (var i = 0; i < catalog.length; i++) {
      var product = {
        name: catalog[i].name,
        price: catalog[i].price,
      };
      products.push(
        <div className="row comp-pad">
          <p>{product.name}: Price: ${product.price}</p> <button className="button">Buy Now!</button>
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