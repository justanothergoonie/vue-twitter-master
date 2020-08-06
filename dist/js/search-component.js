"use strict";

Vue.component('search-interface', {
  template: "\n    <input  \n    v-model=\"tweetHashtag\"\n    type=\"text\" \n    name=\"tweet-search\"  \n    @keyup=\"hashtagSearch\"\n   />\n    ",
  data: function data() {
    return {
      tweetHashtag: ''
    };
  },
  methods: {
    hashtagSearch: function hashtagSearch() {
      this.$emit('hashtag', this.tweetHashtag);
      this.hashtag = this.tweetHashtag;
    }
  }
});
//# sourceMappingURL=search-component.js.map
