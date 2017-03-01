var React = require('react');
var Product = require('Product');

var ProductList = React.createClass({
  
  render: function() {
    var {products} = this.props;
    var renderProducts = () => {
      return products.map((product) => {
        return (
          <Product key={product.id} {...product}/>  
          
        );
      });
    };
    
    return (
      <div className="row small-up-1 medium-up-2 large-up-3">
        {renderProducts()}
      </div>
      
    );
  }
});

module.exports = ProductList;