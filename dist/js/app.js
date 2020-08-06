"use strict";

var TWITTER_API_BASE = 'http://circuslabs.net/proxies/twitter/twitter-proxy.php';
var app = new Vue({
  el: '#app',
  data: {
    tweets: [],
    hashtag: ''
  },
  methods: {
    getTweets: function getTweets() {
      var _this = this;

      var uri = TWITTER_API_BASE + '?op=search_tweets&q=' + encodeURIComponent(this.hashtag);
      console.log('getTweets', uri);
      axios.get(uri).then(function (response) {
        console.log(response);

        if (response && response.data && response.data.statuses) {
          _this.tweets = response.data.statuses;
        } else {
          console.warn('Valid response from twitter api/proxy, but bad data');
          _this.tweets = [];
        }
      }).catch(function (error) {
        console.warn(error);
      });
    },
    hashtagSearch: function hashtagSearch() {
      this.hashtag = this.tweetHashtag; // console.log('hello2', this.tweetHashtag);
    }
  }
});
//# sourceMappingURL=app.js.map
