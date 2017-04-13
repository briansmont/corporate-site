var React = require('react');
var {Link} = require('react-router');

export var Footer = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
          <h3>BSM Corp</h3>
          <div className="row">
          
            <div className="small-2 large-4 columns">
              <h5>Learn More</h5>
              <ul className="footer-menu">
                <li className="footer-menu-text">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            
            <div className="small-2 large-4 columns">
              <ul className="cont-info">
                <li>1-800-123-4567</li>
                <li>info@bsmcorp.com</li>
                <li>
                  <Link to="/contact">Contact us here</Link>
                </li>
              </ul>
            </div>
            
            <div className="small-2 large-4 columns">
              <p>We appreciate you checking us out. If there is anything you need let us know</p>
            </div>
            
          </div>
          <div class="row">
            <div>
              <h5 className="center-text"><em>Our Team is Here to Help</em></h5>
            </div>
          </div>
      </div>
    );
    
  }
});

export default Footer;