var React = require('react');
// var NewsAPI = require('NewsAPI');
var axios = require('axios');

// const OPEN_NEWS_URL = 'https://newsapi.org/v1/articles?source=SOURCEGOESHERE&apiKey=5230f5c0e6e148b8a73a4f9485c91065';

var bbcObject ={};
var espnObject = {};
var cnbcObject = {};
var hackerObject = {};
var apObject = {};
var breitObject = {};
var alJazObject = {};

var News = React.createClass({
  getNews: function() {

    var bbcResponse = axios.get('https://newsapi.org/v1/articles?source=bbc-news&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        bbcObject.title= response.title;
        bbcObject.desc = response.description;
      }
    });
    
    
    var espnResponse = axios.get('https://newsapi.org/v1/articles?source=espn&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        espnObject.title= response.title;
        espnObject.desc = response.description;
      }
    });
    
    var cnbcResponse = axios.get('https://newsapi.org/v1/articles?source=cnbc&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        cnbcObject.title= response.title;
        cnbcObject.desc = response.description;
      }
    });
    
    var response = axios.get('https://newsapi.org/v1/articles?source=hacker-news&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        hackerObject.title= response.title;
        hackerObject.desc = response.description;
      }
    });
    
    var apResponse = axios.get('https://newsapi.org/v1/articles?source=associated-press&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        apObject.title= response.title;
        apObject.desc = response.description;
      }
    });
    
    var breitResponse = axios.get('https://newsapi.org/v1/articles?source=breitbart-news&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        breitObject.title= response.title;
        breitObject.desc = response.description;
      }
    });
    
    var aljazResponse = axios.get('https://newsapi.org/v1/articles?source=al-jazeera-english&apiKey=5230f5c0e6e148b8a73a4f9485c91065').then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        var response = res.data.articles[0];
        alJazObject.title= response.title;
        alJazObject.desc = response.description;
      }
    });
  },
  
  showBBC: function(e) {
    e.preventDefault();
    document.getElementById("bbc-heading").innerHTML = bbcObject.title;
    document.getElementById("bbc-description").innerHTML = bbcObject.desc;
    document.getElementById("bbc-more").className = "unhidden";
  },
  hideBBC: function(e) {
    e.preventDefault();
    document.getElementById("bbc-heading").innerHTML = '';
    document.getElementById("bbc-description").innerHTML = '';
    document.getElementById("bbc-more").className = "hidden";
  },
  
  showESPN: function(e) {
    e.preventDefault();
    document.getElementById("espn-heading").innerHTML = espnObject.title;
    document.getElementById("espn-description").innerHTML = espnObject.desc;
    document.getElementById("espn-more").className= "unhidden";
  },
  hideESPN: function(e) {
    e.preventDefault();
    document.getElementById("espn-heading").innerHTML = '';
    document.getElementById("espn-description").innerHTML = '';
    document.getElementById("espn-more").className = "hidden";
  },
  
  showCNBC: function(e) {
    e.preventDefault();
    document.getElementById("cnbc-heading").innerHTML = cnbcObject.title;
    document.getElementById("cnbc-description").innerHTML = cnbcObject.desc;
    document.getElementById("cnbc-more").className = "unhidden";
  },
  hideCNBC: function(e) {
    e.preventDefault();
    document.getElementById("cnbc-heading").innerHTML = '';
    document.getElementById("cnbc-description").innerHTML = '';
    document.getElementById("cnbc-more").className = "hidden";
  },
  
  showHacker: function(e) {
    e.preventDefault();
    document.getElementById("hacker-heading").innerHTML = hackerObject.title;
    document.getElementById("hacker-description").innerHTML = hackerObject.desc;
    document.getElementById("hacker-more").className = "unhidden";
  },
  hideHacker: function(e) {
    e.preventDefault();
    document.getElementById("hacker-heading").innerHTML = '';
    document.getElementById("hacker-description").innerHTML = '';
    document.getElementById("hacker-more").className = "hidden";
  },
  
  showAP: function(e) {
    e.preventDefault();
    document.getElementById("ap-heading").innerHTML = apObject.title;
    document.getElementById("ap-description").innerHTML = apObject.desc;
    document.getElementById("ap-more").className = "unhidden";
  },
  hideAP: function(e) {
    e.preventDefault();
    document.getElementById("ap-heading").innerHTML = '';
    document.getElementById("ap-description").innerHTML = '';
    document.getElementById("ap-more").className = "hidden";
  },
  
  showBreit: function(e) {
    e.preventDefault();
    document.getElementById("breit-heading").innerHTML = breitObject.title;
    document.getElementById("breit-description").innerHTML = breitObject.desc;
    document.getElementById("breit-more").className = "unhidden";
  },
  hideBreit: function(e) {
    e.preventDefault();
    document.getElementById("breit-heading").innerHTML = '';
    document.getElementById("breit-description").innerHTML = '';
    document.getElementById("breit-more").className = "hidden";
  },
  
  showAljaz: function(e) {
    e.preventDefault();
    document.getElementById("aljaz-heading").innerHTML = alJazObject.title;
    document.getElementById("aljaz-description").innerHTML = alJazObject.desc;
    document.getElementById("aljaz-more").className = "unhidden";
  },
  hideAljaz: function(e) {
    e.preventDefault();
    document.getElementById("aljaz-heading").innerHTML = '';
    document.getElementById("aljaz-description").innerHTML = '';
    document.getElementById("aljaz-more").className = "hidden";
  },
  
  
  
  
  
  
  render: function() {
    return (
      <div>
        <h1>Check out what's happening now.</h1>
        {this.getNews()}
        
        <div id="bbc">
          <div className="row">
            <div className="small-1 large-1 columns"><h4>BBC</h4></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showBBC}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideBBC}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="bbc-heading" className="heading"></div>
            <div id="bbc-description" className="desc"></div>
            <p id="bbc-more" className="hidden">See more at <a href="https://www.bbc.com" target="_blank">BBC</a></p>
          </div>
        </div>
        
        <div id="espn">
          <div className="row">
            <div className="small-1 large-1 columns"><h4>ESPN</h4></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showESPN}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideESPN}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="espn-heading" className="heading"></div>
            <div id="espn-description" className="desc"></div>
            <p id="espn-more" className="hidden">See more at <a href="https://www.espn.com" target="_blank">ESPN</a></p>
          </div>
        </div>
        
        <div id="cnbc">
          <div className="row">
            <div className="small-1 large-1 columns"><h4>CNBC</h4></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showCNBC}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideCNBC}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="cnbc-heading" className="heading"></div>
            <div id="cnbc-description" className="desc"></div>
            <p id="cnbc-more" className="hidden">See more at <a href="https://www.cnbc.com" target="_blank">CNBC</a></p>
          </div>
        </div>
        
        <div id="hacker">
          <div className="row">
            <div className="small-1 large-1 columns"><h4>Hacker</h4></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showHacker}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideHacker}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="hacker-heading" className="heading"></div>
            <div id="hacker-description" className="desc"></div>
            <p id="hacker-more" className="hidden">See more at <a href="https://news.ycombinator.com/" target="_blank">Hacker-News</a></p>
          </div>
        </div>
        
        <div id="ap">
          <div className="row">
            <div className="small-1 large-1 columns"><h3>A.P.</h3></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showAP}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideAP}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="ap-heading" className="heading"></div>
            <div id="ap-description" className="desc"></div>
            <p id="ap-more" className="hidden">See more at <a href="https://www.ap.org/en-us/" target="_blank">Associated Press</a></p>
          </div>
        </div>
        
        <div id="breit">
          <div className="row">
            <div className="small-1 large-1 columns"><h3>Breit</h3></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showBreit}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideBreit}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="breit-heading" className="heading"></div>
            <div id="breit-description" className="desc"></div>
            <p id="breit-more" className="hidden">See more at <a href="https://www.breitbart.com/" target="_blank">Breitbart News</a></p>
          </div>
        </div>
        
        <div id="aljaz">
          <div className="row">
            <div className="small-1 large-1 columns"><h3>AlJaz</h3></div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.showAljaz}>
                <button className="button hollow">Expand</button>
              </form>
            </div>
            <div className="small-1 large-1 columns">
              <form onSubmit={this.hideAljaz}>
                <button className="button hollow">Hide</button>
              </form>
            </div>
            <div className="small-9 large-9 columns"></div>
          </div>
          <div className="row">
            <div id="aljaz-heading" className="heading"></div>
            <div id="aljaz-description" className="desc"></div>
            <p id="aljaz-more" className="hidden">See more at <a href="https://www.aljazeera.com/" target="_blank">Breitbart News</a></p>
          </div>
        </div>
      </div>
    );
  }  
});

module.exports = News;
