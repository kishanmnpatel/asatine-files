
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Shared from './pages/shared/Shared.vue';
import Folder from './pages/Folder.vue';
import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              requiresAuth: true,
            },
        },
        {
            path: '/f/:hashed_id',
            name: 'f',
            component: Folder,
            meta: {
              requiresAuth: true,
            },
        },
        {
            path: '/shared',
            name: 'shared',
            component: Shared,
            meta: {
              requiresAuth: true,
            },
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