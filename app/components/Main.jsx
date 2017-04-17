var React = require('react');
import Nav from 'Nav';
import Footer from 'Footer';
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

module.exports = Main;