import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/Home';

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:"Home",
            component: Home
        },
        {
            path: '*',
            name:"NotFound",
            component: () => import('@/components/NotFound.vue')
        }
    ]
});