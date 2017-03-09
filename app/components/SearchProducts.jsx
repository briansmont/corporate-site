var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var SearchProducts = React.createClass({

  render: function() {
    var {dispatch, searchText} = this.props;
    
    return (
      <div>
        <div className="column small-centered small-11 medium-6 large-5">
          <input type="search" ref="searchText" placeholder="Search Catalog" value={searchText} onChange={() => {
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
          }}/>
        </div>
      </div>
      
    );
  }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText
    };
  }
)(SearchProducts);