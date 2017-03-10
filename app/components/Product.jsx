var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Product = React.createClass({
  
  
  render: function() {
    var {item, price, id, addedAt, dispatch} = this.props;
    
    return (
      <div className="column product-border">
        <p>
          <strong>{item}:</strong> for 
          ${price}
        </p>
        <p>
          <small>ID:{id}</small>, added: {addedAt}
        </p> 
        <img src="/images/awesome.jpeg" height="30%" width="30%" alt="product" className="comp-pad"></img>
        <button onSubmit={this.handleSubmit} className="button">Get it Now!</button> 
      </div>
    );
  }
});

module.exports = connect()(Product);