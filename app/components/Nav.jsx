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
          <li>
            <Link to="/news" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>News</Link>
          </li>          
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
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