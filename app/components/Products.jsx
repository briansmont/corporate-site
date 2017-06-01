var React = require('react');
import * as Redux from 'react-redux';
var {Link} = require('react-router');

import SearchProducts from 'SearchProducts';
import ProductList from 'ProductList';
import AddProduct from 'AddProduct';
import Footer from 'Footer';

import firebase from 'app/firebase/';
export var Products = React.createClass({
  renderAddProduct: function() {
    
    if (firebase.auth().currentUser) {
      var user = firebase.auth().currentUser;
      var email = user.email;
      if (email === 'briansmont830@gmail.com') {
        return (
          <AddProduct/>
        );
      }
    }
  },
  
  render: function() {
    
    return (
      <div className="comp-pad">
        <h1 className="page-title">Products</h1>
        <p className="center-text"><em>If you can't find what you're looking for, <Link to="/contact">request it here!</Link></em></p>
        <SearchProducts/>
        <ProductList/>
        <div className="column small-centered small-11 medium-6 large-5">
          {this.renderAddProduct()}
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Products);