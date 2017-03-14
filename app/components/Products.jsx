var React = require('react');
import * as Redux from 'react-redux';
var uuid = require('node-uuid');
var moment = require('moment');

import SearchProducts from 'SearchProducts';
import ProductList from 'ProductList';
import AddProduct from 'AddProduct';


export var Products = React.createClass({
  render: function() {
    
    return (
      <div className="comp-pad">
        <h1 className="center-text"><u>Products</u></h1>
        <SearchProducts/>
        <ProductList/>
        <div className="column small-centered small-11 medium-6 large-5">
          <AddProduct/>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Products);