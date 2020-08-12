"use strict";

Vue.component('tweets-here', {
  template: "\n        <ul>\n        <li v-for=\"tweet in tweets\">{{tweet.text}}</li>\n\t\t</ul>\n\n    ",
  props: ['tweets'],
  methods: {}
});
//# sourceMappingURL=tweet-field.js.map
