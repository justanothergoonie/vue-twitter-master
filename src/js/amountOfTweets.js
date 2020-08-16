Vue.component('amount-of-tweets', {
	template: `
    <span> Here are {{tweets.length}} tweets with the hashtag {{hashtag}}</span>
    `,
	props: ['tweets', 'hashtag'],
});
