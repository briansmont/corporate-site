var React = require('react');
var {Link} = require('react-router');

export var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <h2>Footer will live down here!</h2>
        <ul className="footer-menu">
          <li className="footer-menu-text">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
    
  }
});

export default Footer;