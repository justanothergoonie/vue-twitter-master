"use strict";

Vue.component('tweets-here', {
  template: "\n\t\n    <ul  >\n        <liv-for=\"tweet in tweets\" :tweets=\"tweets\">\n        {{tweet.text}}\n        </li>\n\t</ul>\n\t\n    ",
  props: ['tweets'],
  methods: {}
});
//# sourceMappingURL=tweet-field.js.map
