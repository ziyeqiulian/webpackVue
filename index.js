import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'
import Base from './component/base'
import router from './router/router'
import store from './store/data'

Vue.config.debug = true;

// Vue.use(VueRouter)

const app = new Vue({
	router,
	store,
    render: h => h(Base),
}).$mount('#app');
