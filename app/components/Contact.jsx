var React = require('react');

var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="centered">How can we help?</h1>
        <div className="small-centered small-11 medium-6 large-5">
          <form onSubmit={this.handleSubmit}>
            <input autoFocus type="text" ref="fullName" placeholder="Enter Full Name"/>
            <input type="text" ref="email" placeholder="Email Address" />
            <input type="number" ref="phoneNumber" placeholder="Phone Number" />
            <textarea ref="message" placeHolder="Let us know how we can help"></textarea>
            <button className="button expanded">Submit!</button>
          </form>
        </div>
        
        
      </div>
    );
  }
});


module.exports = Contact;