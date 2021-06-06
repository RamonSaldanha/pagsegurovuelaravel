import Vue from 'vue';
import VueRouter from 'vue-router';
import beforeEach from './beforeEach'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('../components/Pages/Welcome'), meta: {auth: false} },
    { path: '/login', component: () => import('../components/Pages/Login'), meta: {auth: false} },
    { path: '/register', component: () => import('../components/Pages/Register'), meta: {auth: false} },
    { path: '/pricing', component: () => import('../components/Pages/Pricing'), meta: {auth: false} },

    // steps join
    { path: '/join', component: () => import('../components/Pages/Join'), meta: {auth: false} },
    { path: '/checkout/:plan', component: () => import('../components/Pages/Checkout'), meta: {auth: false} },

    /* autenticated pages */
    { path: '/home', component: () => import('../components/Pages/Logged'), meta: {auth: true, role: 1} },
    { path: '/admin', component: () => import('../components/Pages/Admin/Dashboard'), meta: {auth: true, role: 9} },
    
    { path: "/*", component: () => import('../components/Pages/PageNotFound'), meta: {auth: false} },
  ],
  mode: 'history'
})

router.beforeEach(beforeEach)

export default router