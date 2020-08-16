"use strict";

Vue.component('search-interface', {
  template: "\n    <input  \n\tv-model=\"tweetHashtag\"\n\tplaceholder=\"#\"\n\tvalue=\"#\"\n    type=\"text\" \n\tname=\"tweet-search\"  \n\tclass=\"hashtag-search\"\n    @keyup=\"hashtagSearch\"\n   />\n    ",
  data: function data() {
    return {
      tweetHashtag: ''
    };
  },
  methods: {
    hashtagSearch: function hashtagSearch() {
      if (this.tweetHashtag.length > 0 && this.tweetHashtag[0] != '#') {
        this.tweetHashtag = '#' + this.tweetHashtag;
      }

      this.$emit('user-initiated-search', this.tweetHashtag);
    }
  }
});
//# sourceMappingURL=search-component.js.map
