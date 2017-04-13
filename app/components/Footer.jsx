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
                <li>Where we are</li>
                <li>How our deliveries work</li>
                <li>Our distribution partners</li>
                <li>History about our company</li>
                <li>Understanding who we are</li>
                <li>Choice Programs</li>
                <li>Regulatory Filings</li>
              </ul>
            </div>
            
            <div className="small-2 large-4 columns">
              <ul className="cont-info">
                <h5>Reach out to us</h5>
                <li>1-800-123-4567</li>
                <li>info@bsmcorp.com</li>
                <li>
                  <Link to="/contact">Contact us here</Link>
                </li>
                <li>Always looking for new sales partners</li>
                <li>BSM LLC</li>
                <li>Add to your resources</li>
                <li>Work for us</li>
                <li>Why choose us?</li>
              </ul>
            </div>
            
            <div className="small-2 large-4 columns">
              <h5>Thanks!</h5>
              <p>We appreciate you checking us out. If there is anything you need let us know!</p>
            </div>
            
          </div>
          <div className="row">
            <div>
              <h4 className="center-text"><em>Our Team is Here to Help</em></h4>
            </div>
          </div>
      </div>
    );
    
  }
});

export default Footer;