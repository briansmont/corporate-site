var React = require('react');


var Home = React.createClass({
  render: function() {
    return (
      <div className="comp-pad">
        <div className="row background-pic">
          <div className="center-text">
            <h1>BSM Corp</h1>
            <p>Since we began, we have prided ourselves on delivering quality service and products to all of our customers.</p>
            <p>People are important to us. We want to give you what you need, as well as predict what you will need in the future. Based on this, we value all feedback and communication.</p>
            <p>Our goal is to exceed your expectations, in both the short & long term. </p>
          </div>
        </div>
        
        <div className="row">
          <div className="small-2 large-4 columns small-left"><p>One</p></div>
          <div className="small-4 large-4 columns"><p>Two</p></div>
          <div className="small-6 large-4 columns"><p>Three</p></div>
        </div>
  
      </div>
    );
  }
});


module.exports = Home;