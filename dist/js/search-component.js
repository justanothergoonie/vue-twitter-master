"use strict";

Vue.component('search-interface', {
  template: "\n    <input  \n    v-model=\"tweetHashtag\"\n    type=\"text\" \n\tname=\"tweet-search\"  \n\tclass=\"hashtag-search\"\n    @keyup=\"hashtagSearch\"\n   />\n    ",
  data: function data() {
    return {
      tweetHashtag: ''
    };
  },
  methods: {
    hashtagSearch: function hashtagSearch() {
      this.$emit('user-initiated-search', this.tweetHashtag);
    }
  }
});
//# sourceMappingURL=search-component.js.map
