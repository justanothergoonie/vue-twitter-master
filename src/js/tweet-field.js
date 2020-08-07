Vue.component('tweets-here', {
	template: `
	
    <ul  >
        <liv-for="tweet in tweets" :tweets="tweets">
        {{tweet.text}}
        </li>
	</ul>
	
    `,
	props: ['tweets'],
	methods: {},
});
