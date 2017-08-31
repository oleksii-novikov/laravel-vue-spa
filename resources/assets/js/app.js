require('./bootstrap');

import Vue from 'vue';
import router from './routes';
import store from './store/index';
import auth from './helpers/jwt-auth';
import App from './components/App.vue';

Vue.component('app', App);

const app = new Vue({
    router,
    store,
    created () {
        auth.init()
    }
}).$mount('#app');
