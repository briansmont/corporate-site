var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Order = React.createClass({

  
  
  render: function() {
    var {item, price, id, purchasedAt} = this.props;
    
    return (
      <div>
          <p>
            <strong>{item}:</strong> for 
            ${price} ||  

            <small>Order #:{id}</small>, ordered: {purchasedAt}
          </p> 

      </div>
    );
  }
});

module.exports = connect()(Order);