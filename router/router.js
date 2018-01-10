/**
 * @authors Your Name (you@example.org)
 * @date    2017-12-26 22:26:19
 * @version $Id$
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import Tickets from '../views/tickets.vue';
import Special from '../views/special.vue';
import Me from '../views/me.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/Tickets', component: Tickets },
  { path: '/Special', component: Special },
  { path: '/Me', component: Me },
];

const router = new VueRouter({routes});

export default router;
