import {Workbox} from 'workbox-window'

if ("serviceWorker" in navigator) {
  const workbox = new Workbox('./sw.js');

  workbox.register();
}

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: "#app",
  components: { App },
  template: '<App/></App>'
});
