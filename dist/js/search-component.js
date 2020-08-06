"use strict";

Vue.component('search-interface', {
  template: "\n    <input  \n    v-model=\"tweetHashtag\"\n    type=\"text\" \n    name=\"tweet-search\" \n    class=\"hashtag\" \n   />\n    ",
  props: ['hashtag'],
  data: function data() {
    return {
      tweetHashtag: ''
    };
  },
  created: function created() {
    this.tweetHashtag = this.hashtag;
  },
  methods: {
    hashtagChange: function hashtagChange() {
      if (this.tweetHashtag.length > 0 && this.tweetHashtag[0] != '#') {
        this.tweetHashtag = '#' + this.tweetHashtag;
      }

      if (this.tweetHashtag.length > 3 && this.tweetHashtag != this.$root.hashtag) {
        this.$emit('hashtag', this.tweetHashtag);
      } else {
        this.$emit('hashtag', '');
      }
    }
  }
});
//# sourceMappingURL=search-component.js.map
