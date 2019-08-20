import {Workbox} from 'workbox-window'

if ("serviceWorker" in navigator) {
  const workbox = new Workbox('./sw.js');

  workbox.register().then(() => {
    console.log('Service Worker is registered.')
  });
}

import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'

new Vue({
  el: "#app",
  vuetify,
  components: { App },
  template: '<App/></App>'
});
