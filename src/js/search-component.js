Vue.component('search-interface', {
	template: `
    <input  
	v-model="tweetHashtag"
	placeholder="#"
	value="#"
    type="text" 
	name="tweet-search"  
	class="hashtag-search"
    @keyup="hashtagSearch"
   />
    `,
	data: function () {
		return {
			tweetHashtag: '',
		};
	},
	methods: {
		hashtagSearch: function hashtagSearch() {
			if (this.tweetHashtag.length > 0 && this.tweetHashtag[0] != '#') {
				this.tweetHashtag = '#' + this.tweetHashtag;
			}
			this.$emit('user-initiated-search', this.tweetHashtag);
		},
	},
});
