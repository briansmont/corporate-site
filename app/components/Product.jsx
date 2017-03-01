var React = require('react');

var Product = React.createClass({
  
  render: function() {
    var {item, price, id, addedAt} = this.props;
    
    return (
      <div className="column product-border">
        <p>
          <strong>{item}:</strong> for 
          ${price}
        </p>
        <p>
          <small>ID:{id}</small>, added: {addedAt}
        </p> 
        <img src="/images/awesome.jpeg" height="30%" width="30%" alt="product" className="comp-pad"></img><button className="button">Buy Now!</button> 
      </div>
    );
  }
});

module.exports = Product;