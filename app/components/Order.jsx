var React = require('react');
var {connect} = require('react-redux');

var Order = React.createClass({

  
  
  render: function() {
    var {productName, productPrice, id, purchasedAt} = this.props;
    
    return (
      <div>
          <p className="bottom-border">
            <strong>{productName}:</strong> for 
            ${productPrice} || <small>Order #:{id}</small>, ordered: {purchasedAt}
          </p> 

      </div>
    );
  }
});

module.exports = connect()(Order);