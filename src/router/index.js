import Vue from 'vue';
import Router from 'vue-router';

import Main from './../views/Main';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});