var React = require('react');
var Faker = require('faker');

var catalog = [
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.business()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.animals()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.fashion()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.nature()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.people()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.food()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.nightlife()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.sports()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.abstract()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.technics()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.transport()},
  {name: Faker.commerce.productName(), price: Faker.commerce.price(), image: Faker.image.city()},
];

var Products = React.createClass({
  renderCatalog: function() {
    var products = [];
    for (var i = 0; i < catalog.length; i++) {
      var product = {
        name: catalog[i].name,
        price: catalog[i].price,
        // image: catalog[i].image,
      };
      products.push(
        <div className="column">
          <p><strong>{product.name}:</strong> Price: ${product.price}</p> <button className="button">Buy Now!</button>
        </div>
      
        // <img src={product.image} height="20%" width="20%" alt="product" className="comp-pad"></img>
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