var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var {Link} = require('react-router');
import firebase from 'app/firebase/';

var Product = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var productName = this.refs.productName.value;
    var productPrice = this.refs.productPrice.value;
    if (productName && productPrice) {
      dispatch(actions.startBuyProduct(productName, productPrice));
    } else {
      alert('issue with your order, please try again later');
    }
  },
  
  renderBuyButton: function() {
    if (firebase.auth().currentUser) {
      return (
        <button className="button">Get it Now!</button>
      );
    } else {
      return (
        <p><Link to="/login">Log In</Link> to make purchases!</p> 
      );
    }
  },
  
  isSignedIn() {
    if (!firebase.auth().currentUser) {
      return <p><Link to="/login">Log In</Link> to purchase!</p>;
    }
  },
  
  render: function() {
    var {productName, productPrice, id, addedAt} = this.props;
    // var stripePrice = productPrice * 100;
    
    return (
      <div className="column product-border">
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" ref="productName" value={productName}/>
          <input type="hidden" ref="productPrice" value={productPrice}/>
          <p>
            <strong>{productName}:</strong> for 
            ${productPrice}
          </p>
          <p>
            <small>ID:{id}</small>, added: {addedAt}
          </p> 
          {this.renderBuyButton()}
        </form>
      </div>
    );
  }
});

module.exports = connect()(Product);