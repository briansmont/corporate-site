var axios = require('axios');
var React = require('react');

const OPEN_NEWS_URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=5230f5c0e6e148b8a73a4f9485c91065';
// api key
// 5230f5c0e6e148b8a73a4f9485c91065

module.exports = {
  getBBCNews: function() {
    var requestUrl = `${OPEN_NEWS_URL}`;
    var newsObject = {};
    var response = axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        newsObject.title= response.title;
        newsObject.desc = response.description;
        newsObject.url = response.url;
        
        
        
      }
    });
    // console.log(newsObject);
    return newsObject;
  }
};