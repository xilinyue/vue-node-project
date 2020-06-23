import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/loginPage')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/registerPage')
    },
    {
        path: '/findPassword',
        name: 'findPassword',
        component: () => import('../views/findBackPassword')
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('../views/userInfo')
    },
    {
        path: '/movieList',
        name: 'MovieList',
        component: () => import('../views/movieList')
    },
    {
        path: '/movieDetail',
        name: 'MovieDetail',
        component: () => import('../views/movieDetail')
    },
    {
        path: '/newDetail',
        name: 'NewDetail',
        component: () => import('../views/newDetail')
    }
];

export default new VueRouter({
    routes
});