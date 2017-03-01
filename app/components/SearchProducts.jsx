var React = require('react');

var SearchProducts = React.createClass({
  handleSearch : function() {
    var searchText = this.refs.searchText.value;
  },
  
  render: function() {
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Search Catalog" onChange={this.handleSearch}/>
        </div>
      </div>
      
    );
  }
});

module.exports = SearchProducts;