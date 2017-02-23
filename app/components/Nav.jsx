var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({ 
  render: function() {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Your Company Site</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
          </li>
          <li>
          <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products</Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <strong>Let us serve you!</strong>
          </li>
        </ul>
      </div>
    </div>
    ); 
  }
  
});

module.exports = Nav;