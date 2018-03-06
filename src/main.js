// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import filters from './filters/index.js';

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

require('./assets/css/base.css'); //全局引入
require('./assets/js/font.js');
require('./assets/js/jquery.js');
require('./assets/js/ajax.js');
require('./assets/js/swipe.js');


Vue.config.productionTip = false;
/* eslint-disable no-new */
axios.interceptors.request.use(function (config) {  //配置发送请求的信息  
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  return response;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$http = axios;
// Vue.prototype.$jquery = jquery;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components:  {App}
});
