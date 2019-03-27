import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/Home';
import Review from '@/components/Review';

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:"Home",
            component: Home
        },
        {
            path:'/review',
            name:"Review",
            component: Review
        },
        {
            path: '*',
            name:"NotFound",
            component: () => import('@/components/NotFound.vue')
        }
    ]
});