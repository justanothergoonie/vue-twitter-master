Vue.component('search-interface', {
	template: `
    <input  
    v-model="tweetHashtag"
    type="text" 
    name="tweet-search"  
    @keyup="hashtagSearch"
   />
    `,
	data: function () {
		return {
			tweetHashtag: '',
		};
	},
	methods: {
		hashtagSearch: function () {
			this.$emit('hashtag', this.tweetHashtag);
			this.hashtag = this.tweetHashtag;
		},
	},
});
