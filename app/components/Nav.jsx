var React = require('react');
var {Link, IndexLink} = require('react-router');
import * as Redux from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';
import firebase from 'app/firebase/';

export var Nav = React.createClass({ 
  onLogout: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.startLogout());
    
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        hashHistory.push('/login');
      }
    });
    
  },
  
  renderLogout: function() {
    return (
        <li>
          <Link to="/login" onClick={this.onLogout} activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Logout</Link>
        </li>
    );
  },
  render: function() {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">BSM Corp</li>
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
          {this.renderLogout()}
          <li>
            <Link to="/login" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>
          </li>
          <li>
            <Link to="/profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Your Account</Link>
          </li>
        </ul>
      </div>
    </div>
    ); 
  }
  
});

export default Redux.connect()(Nav);