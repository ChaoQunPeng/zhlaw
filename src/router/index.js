import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

import Profile from '../views/profile';
import Contact from '../views/contact';

const routes = [
  {
    path: '/',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;