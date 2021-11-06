import Vue from 'vue';
// import App from './App.vue';
// import { router } from './routes';
// import App from '../__tests__/sample/router/App.vue';
import App from '../TodoApp/App.vue';
import router from '../__tests__/sample/router/router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
