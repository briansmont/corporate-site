var React = require('react');

var Contact = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    console.log('submitted!');
  },
  
  render: function() {
    return (
      <div className="comp-pad">
        <div className="small-centered small-11 medium-6 large-5">
          <h1>What's up?</h1>
          <form action="https://getsimpleform.com/messages?form_api_token=bf9ac70ecd711befee6b55ce8665958c" method="post">
            <input type='hidden' name='redirect_to' value='/' />
            <input autoFocus type="text" ref="fullName" placeholder="Enter Full Name"/>
            <input type="text" ref="email" placeholder="Email Address" />
            <input type="number" ref="phoneNumber" placeholder="Phone Number" />
            <textarea ref="message" placeholder="Let us know how we can help"></textarea>
            <button className="button expanded">Submit!</button>
          </form>
        </div>
        
        
      </div>
    );
  }
});


module.exports = Contact;