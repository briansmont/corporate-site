var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Product = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var productName = this.refs.productName.value;
    var productPrice = this.refs.productPrice.value;
    if (productName && productPrice) {
      dispatch(actions.buyProduct(productName, productPrice));
    } else {
      alert('issue with your order, please try again later');
    }
  },
  
  
  render: function() {
    var {productName, productPrice, id, addedAt} = this.props;
    
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
          <img src="/images/awesome.jpeg" height="30%" width="30%" alt="product" className="comp-pad"></img>
          <button className="button">Get it Now!</button> 
        </form>
      </div>
    );
  }
});

module.exports = connect()(Product);