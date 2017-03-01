var React = require('react');

var SearchProducts = React.createClass({
  handleSearch: function() {
    var searchText = this.refs.searchText.value;
    this.props.onSearch(searchText);
  },
  
  render: function() {
    return (
      <div>
        <div className="column small-centered small-11 medium-6 large-5">
          <input type="text" ref="searchText" placeholder="Search Catalog" onChange={this.handleSearch}/>
        </div>
      </div>
      
    );
  }
});

module.exports = SearchProducts;