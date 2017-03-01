var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var SearchProducts = require('SearchProducts');
var ProductList = require('ProductList');
var AddProduct = require('AddProduct');



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
          id: uuid(), item: "hat", price: 24
        },
        {
          id: uuid(), item: "shirt", price: 55
        },
        {
          id: uuid(), item: "picture frame", price: 20
        },
        {
          id: uuid(), item: "cell phone", price: 400
        },
        {
          id: uuid(), item: "monitor", price: 125
        },
        {
          id: uuid(), item: "camera", price: 250
        },
        {
          id: uuid(), item: "magazine", price: 6
        },
        {
          id: uuid(), item: "desk chair", price: 80
        },
        {
          id: uuid(), item: "binder", price: 18
        },
      ]
    };
  },
  
  handleAddProduct: function(productName, productPrice) {
    this.setState({
      products: [
       ...this.state.products,
       {
         id: uuid(),
         item: productName,
         price: productPrice,
         addedAt: moment().format('LLLL')
       }
        
      ]
    });
  },
  
  
  handleSearch : function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  },
  
  
  render: function() {
    
    var {products} = this.state;
    
    return (
      <div className="comp-pad">
        <h1 className="center-text"><u>Products</u></h1>
        <SearchProducts onSearch={this.handleSearch}/>
        <ProductList products={products}/>
        <div className="column small-centered small-11 medium-6 large-5">
          <AddProduct onNewProduct={this.handleAddProduct}/>
        </div>
      </div>
    );
  }
});

module.exports = Products;