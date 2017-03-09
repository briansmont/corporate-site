var React = require('react');
import Product from 'Product';
var {connect} = require('react-redux');
var CorpAPI = require('CorpAPI');


var ProductList = React.createClass({
  
  render: function() {
    var {products, searchText} = this.props;
    var renderProducts = () => {
      var filteredProducts = CorpAPI.filterProducts(products, searchText);
      return filteredProducts.map((product)  => {
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
    return state;
  }
  
)(ProductList);