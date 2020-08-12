Vue.component('tweets-here', {
	template: `
        <ul>
        <li v-for="tweet in tweets">{{tweet.text}}</li>
		</ul>

    `,
	props: ['tweets'],
	methods: {},
});
