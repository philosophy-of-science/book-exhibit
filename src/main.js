import Vue from "vue";
import App from "./App.vue";

import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniPlusCircle,
  uniCheckCircle,
  uniExternalLinkAlt,
  uniMeetingBoard,
  uniFileAlt,
  uniHeart,
  uniFacebook,
  uniTwitter,
  uniLinkedin,
  uniDocumentLayoutLeft,
  uniInstagram,
  uniFavoriteMonochrome,
  uniFavorite,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniPlusCircle,
  uniCheckCircle,
  uniExternalLinkAlt,
  uniMeetingBoard,
  uniFileAlt,
  uniHeart,
  uniFacebook,
  uniTwitter,
  uniLinkedin,
  uniDocumentLayoutLeft,
  uniInstagram,
  uniFavoriteMonochrome,
  uniFavorite,
]);
Vue.use(Unicon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
