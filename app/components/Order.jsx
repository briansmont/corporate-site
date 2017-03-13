var React = require('react');
var {connect} = require('react-redux');

var Order = React.createClass({

  
  
  render: function() {
    var {item, price, id, purchasedAt} = this.props;
    
    return (
      <div>
          <p className="bottom-border">
            <strong>{item}:</strong> for 
            ${price} || <small>Order #:{id}</small>, ordered: {purchasedAt}
          </p> 

      </div>
    );
  }
});

module.exports = connect()(Order);