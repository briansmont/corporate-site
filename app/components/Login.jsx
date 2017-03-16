import React from 'react';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Login</h1>
        
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Log in with Google account below.</p>
              <button className="button">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;