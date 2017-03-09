var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddProduct = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var productName = this.refs.productName.value;
    var productPrice = this.refs.productPrice.value;
    if (productName.length > 0 && productPrice > 0) {
      this.refs.productName.value = '';
      this.refs.productPrice.value = '';
      dispatch(actions.addProduct(productName, productPrice));
    } else {
      this.refs.productName.focus();
    }
  },
  
  
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="productName" placeholder="item name"/>
          <input type="number" ref="productPrice" placeholder="price"/>
          <button className="button expanded">Add item</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddProduct);