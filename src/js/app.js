const TWITTER_API_BASE =
	'http://circuslabs.net/proxies/twitter/twitter-proxy.php';

let app = new Vue({
	el: '#app',
	data: {
		tweets: [],
		hashtag: '',
	},
	methods: {
		getTweets: function () {
			var uri =
				TWITTER_API_BASE +
				'?op=search_tweets&q=' +
				encodeURIComponent(this.hashtag);
			console.log('getTweets', uri);
			axios
				.get(uri)
				.then((response) => {
					console.log(response);
					if (response && response.data && response.data.statuses) {
						this.tweets = response.data.statuses;
					} else {
						console.warn(
							'Valid response from twitter api/proxy, but bad data'
						);
						this.tweets = [];
					}
				})
				.catch((error) => {
					console.warn(error);
				});
		},
	},
});
