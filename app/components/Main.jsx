var React = require('react');
import Nav from 'Nav';
import Footer from 'Footer';
var Main = (props) => {
  return (
    <div className="content">
      <Nav/>
      <div className="row">
        <div>
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

module.exports = Main;