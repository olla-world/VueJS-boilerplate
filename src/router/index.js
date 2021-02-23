import Vue from 'vue';
import Router from 'vue-router';

import {routes} from './routes';
import {publicPages} from './publicPages';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: routes
});


router.beforeEach((to, from, next) => {
 
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});