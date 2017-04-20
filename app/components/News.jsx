var React = require('react');
var NewsAPI = require('NewsAPI');

        // <div className="news-api">
        //   {this.renderNews()}
        // </div>

var News = React.createClass({
  renderNews: function() {
    var newsObject = NewsAPI.getBBCNews();
    console.log(newsObject);
  },
  
  render: function() {
    return (
      <div>  
        <h4>What's New?</h4>
        {this.renderNews()}
      
      </div>
    );
  }
});

module.export = News;