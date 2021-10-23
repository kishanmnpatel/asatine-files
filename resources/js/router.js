
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
              requiresAuth: true,
            },
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                auth: true,
              },
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: true,
              },
        },
    ]
});

export default router;