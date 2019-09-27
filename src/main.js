import Vue from 'vue';
import App from './App.vue';
import {
  router
} from './router';
import store from './store';
import './registerServiceWorker';

import {
  configureFakeBackend
} from './_helpers/fakebackend.helper';

Vue.config.productionTip = false;

configureFakeBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');