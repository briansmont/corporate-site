var React = require('react');
var uuid = require('node-uuid');

var SearchProducts = require('SearchProducts');
var ProductList = require('ProductList');

var Products = React.createClass({
  
  getInitialState: function() {
    return {
      searchText: '',
      products: [
        {
          id: uuid(), item: "ball", price: 10
        }, 
        {
          id: uuid(), item: "computer", price: 1000
        }, 
        {
          id: uuid(), item: "dogfood", price: 50
        }, 
        {
          id: uuid(), item: "notebook", price: 5
        }, 
        {
          id: uuid(), item: "post-its", price: 2
        },
        {
          id: uuid(), item: "car", price: 15000
        }, 
        {
          id: uuid(), item: "pizza", price: 15
        }
      ]
    };
  },
  
  handleSearch : function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  },
  
  
  render: function() {
    
    var {products} = this.state;
    
    return (
      <div>
        <h1 className="center-text"><u>Products</u></h1>
        <SearchProducts onSearch={this.handleSearch}/>
        <div>
          <ProductList products={products}/>
        </div>
      </div>
    );
  }
});

module.exports = Products;