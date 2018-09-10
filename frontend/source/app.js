import Vue from 'vue';
import axios from 'axios';
import store from './store';
import App from './App.vue';

axios.defaults.baseURL = '/api';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	render: h => h(App)
});
