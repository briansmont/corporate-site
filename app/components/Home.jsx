var React = require('react');
import Footer from 'Footer';
// const clutter = require("url-loader?limit=10000!../images/capstone/office-clutter.jpeg");
// const dualMonitor = require("url-loader?limit=10000!../images/capstone/dual-monitor.jpeg");
// const laptops = require("url-loader?limit=10000!../images/capstone/office-laptops.jpeg");
//         <div className="row comp-pad">
//           <div className="small-2 large-4 columns"><img src={clutter}></img></div>
//           <div className="small-4 large-4 columns"><img src={dualMonitor}></img></div>
//           <div className="small-6 large-4 columns"><img src={laptops}></img></div>
//         </div>
        
        
var Home = React.createClass({
  render: function() {
    return (
      <div className="comp-pad">
        <div className="row background-pic">
          <div className="center-text">
            <h1>BSM Corp</h1>
            <p>Since we began, we have prided ourselves on delivering quality service and products to all of our customers.</p>
            <p>People are important to us. We want to give you what you need now and predict what you will need in the future. So we can provide this, we value all feedback and communication. Get in touch with us about anything, we love all feedback</p>
            <p>Our goal is to exceed your expectations, in both the short & long term. </p>
            <p>Our team is here to help</p>
          </div>
        </div>
        
        <div className="row top-pad">
          <div className="small-2 large-4 columns"><img src="/images/office-clutter.jpeg"></img></div>
          <div className="small-4 large-4 columns"><img src="/images/dual-monitor.jpeg"></img></div>
          <div className="small-6 large-4 columns"><img src="/images/office-laptops.jpeg"></img></div>
        </div>
        <div className="row top-pad center-text">
          <div className="small-2 large-4 columns"><strong>Better Organization</strong></div>
          <div className="small-4 large-4 columns"><strong>Higher Efficiency</strong></div>
          <div className="small-6 large-4 columns"><strong>Simplify Management</strong></div>
        </div>
        
      </div>
    );
  }
});


module.exports = Home;