if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  })
}

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: "#app",
  components: { App },
  template: '<App/></App>'
});
