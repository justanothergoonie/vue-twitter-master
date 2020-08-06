Vue.component('search-interface', {
	template: `
    <input  
    v-model="tweetHashtag"
    type="text" 
    name="tweet-search" 
    class="hashtag" 
   />
    `,
	props: ['hashtag'],

	data: function () {
		return {
			tweetHashtag: '',
		};
	},
});
