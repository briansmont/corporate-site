var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var SearchProducts = require('SearchProducts');
var ProductList = require('ProductList');
import AddProduct from 'AddProduct';


var Products = React.createClass({
  handleSearch : function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  },
  
  
  render: function() {
    
    return (
      <div className="comp-pad">
        <h1 className="center-text"><u>Products</u></h1>
        <SearchProducts onSearch={this.handleSearch}/>
        <ProductList/>
        <div className="column small-centered small-11 medium-6 large-5">
          <AddProduct/>
        </div>
      </div>
    );
  }
});

module.exports = Products;