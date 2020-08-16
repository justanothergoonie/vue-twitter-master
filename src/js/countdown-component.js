Vue.component('ticker', {
	template: `
    <span>New Tweets Incoming in <span :class="'counter'+counter">{{counter}}</span></span>
    `,
	props: ['counter'],
});
