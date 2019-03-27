
const state = {
    orderid: window.localStorage.getItem('orderid')
};

const getters = {
    getOrderId: state => state.orderid
};

//Mutations Must Be Synchronous
const mutations = {
    setOrderId: (state, newOrderId) => {
        state.orderid = newOrderId;
        window.localStorage.setItem('orderid', newOrderId)
    },
    deleteOrderId: () => {
        state.orderid = null;
        window.localStorage.removeItem('orderid');
    }
};

const actions = {
    async updateOrderId({ commit }, payload) {
        if (payload.currentOrderId === null) {
            commit('deleteOrderId');
            return;
        }
        commit('setOrderId', payload.currentOrderId);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}