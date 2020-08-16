"use strict";

Vue.component('amount-of-tweets', {
  template: "\n    <span> Here are {{tweets.length}} tweets with the hashtag {{hashtag}}</span>\n    ",
  props: ['tweets', 'hashtag']
});
//# sourceMappingURL=amountOfTweets.js.map
