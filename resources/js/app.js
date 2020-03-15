/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Spa from "./components/Spa";
import router from "./routes";
import VueRouter from "vue-router";


require('./bootstrap');

window.Vue = require('vue');
import vuetify from "./plugins/vuetify";


Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    vuetify,
    router,
    components: {
        'spa': Spa,
    }
});
