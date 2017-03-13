var React = require('react');
import Order from 'Order';
var {connect} = require('react-redux');
var CorpAPI = require('CorpAPI');


var Orders = React.createClass({
  
  render: function() {
    var {purchases} = this.props;
    var renderOrders = () => {
      var filteredOrders = CorpAPI.filterOrders(purchases);
      return filteredOrders.map((purchase)  => {
        return (
          <Order key={purchase.id} {...purchase}/>  
        );
      });
      
    };
    
    return (
      <div className="row">
        {renderOrders()}
      </div>
      
    );
  }
});

module.exports = connect(
  (state) => {
    return state;
  }
  
)(Orders);