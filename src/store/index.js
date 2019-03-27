
import Vue from 'vue'
import Vuex from 'vuex'

import orderid from './modules/orderid'
import payment from './modules/payment'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        orderid,
        payment
    }
});