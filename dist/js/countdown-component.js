"use strict";

Vue.component('ticker', {
  template: "\n    <span>New Tweets Incoming in <span :class=\"'counter'+counter\">{{counter}}</span></span>\n    ",
  props: ['counter']
});
//# sourceMappingURL=countdown-component.js.map
