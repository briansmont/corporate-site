var React = require('react');
var Faker = require('faker');

const awesome = require("url-loader?limit=10000!../images/capstone/awesome.jpeg");

var catalog =[];
for (var i = 0; i < 18; i++) {
  catalog.push({name: Faker.commerce.productName(), price: Faker.commerce.price()});
}

// var catalog = [
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
//   {name: Faker.commerce.productName(), price: Faker.commerce.price()},
// ];

var Products = React.createClass({
  renderCatalog: function() {
    var products = [];
    for (var i = 0; i < catalog.length; i++) {
      var product = {
        name: catalog[i].name,
        price: catalog[i].price,
      };
      products.push(
        <div className="column">
          <p><strong>{product.name}:</strong> for ${product.price}</p> <img src={awesome} height="30%" width="30%" alt="product" className="comp-pad"></img><button className="button">Buy Now!</button>
        </div>
      );
    }
    return products;
  },
  
  render: function() {
    return (
      <div>
        <h1 className="center-text"><u>Products</u></h1>
        <div className="row small-up-1 medium-up-2 large-up-3">
          {this.renderCatalog()}
        </div>
      </div>
    );
  }
});

module.exports = Products;