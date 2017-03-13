var React = require('react');
var {Link} = require('react-router');
import Orders from 'Orders';

var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Your Account!</h1>
      
        <Orders/>
      </div>
    );
  }
});

module.exports = Profile;