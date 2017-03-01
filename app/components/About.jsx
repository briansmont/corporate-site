var React = require('react');
var {Link} = require('react-router');
// const skyline_image = require("url-loader?limit=10000!../images/capstone/philly-skyline-night.jpg");


var About = React.createClass({
  render: function() {
    return (
      <div className="comp-pad">
        <div className="row">
          <img src="/images/philly-skyline-night.jpg" className="small-6 large-12 columns"></img>
        </div>
        <h1 className="centered">About Us:</h1>
        
        <h4>History</h4>
        <p>The company was founded in Philadelphia, PA in 2017. We exist in Center City East, primarily in Old City & Northern Liberties areas. Our goal is to provide our customers with the best product and customer service possible, to earn their trust and build long lasting relationships.</p>
        
        <h4>Customers</h4>
        <p>We work with everyone, from an individual person up to a large corporation. It doesn't matter to us, our customers are valued at any size.</p>
        
        <h5>Products</h5>
        <p>Our products make our customers' lives easier. Items range from something a person might need throughout their daily life, corporate work materials, or family fun. We have pretty much everything, and if we don't, contact us and let us know! We'd be happy to add it to our catalog!</p>
        <p>Take a look at our <Link to="/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products Catalog</Link> and we guarantee there's something for you!</p>
      
      
        <p>If you have any questions or comments, you can reach us <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>here</Link> </p>
      </div>
    );
  }
});


module.exports = About;