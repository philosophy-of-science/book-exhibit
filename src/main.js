import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
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
  uniBookAlt,
  uniFileDownloadAlt,
  uniHome,
  uniTimesCircle,
  uniClipboard,
  uniClipboardNotes,
  uniBookmarkMonochrome,
  uniBookmark,
  uniCircleLayerMonochrome,
  uniBooks,
  uniQuestionCircle,
} from "vue-unicons/dist/icons";

Unicon.add([
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
  uniBookAlt,
  uniFileDownloadAlt,
  uniHome,
  uniTimesCircle,
  uniClipboard,
  uniClipboardNotes,
  uniBookmarkMonochrome,
  uniBookmark,
  uniCircleLayerMonochrome,
  uniBooks,
  uniQuestionCircle,
]);
Vue.use(Unicon);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
