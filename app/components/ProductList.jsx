var React = require('react');
var Product = require('Product');
var {connect} = require('react-redux');

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
      <div className="row small-up-1 medium-up-2 large-up-3 comp-pad">
        {renderProducts()}
      </div>
      
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      products: state.products
    };
  }
  
)(ProductList);