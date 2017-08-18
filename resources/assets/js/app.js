require('./bootstrap');

import Vue from 'vue';
import router from './routes';
import store from './store/index';
import App from './components/App.vue';
import auth from './helpers/jwt-auth';

Vue.component('app', App);

const app = new Vue({
    router,
    store,
    created () {
        auth.init()
    }
}).$mount('#app');
