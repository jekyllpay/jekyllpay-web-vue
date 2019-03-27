
const state = {
    payment: window.localStorage.getItem('payment')
};

const getters = {
    getPayment: state => JSON.parse(state.payment)
};

//Mutations Must Be Synchronous
const mutations = {
    setPayment: (state, newPayment) => {
        state.payment = JSON.stringify(newPayment);
        window.localStorage.setItem('payment', JSON.stringify(newPayment))
    },
    deletePayment: () => {
        state.payment = null;
        window.localStorage.removeItem('payment');
    }
};

const actions = {
    async updatePayment({ commit }, payload) {
        if (payload.currentPayment === null) {
            commit('deletePayment');
            return;
        }
        commit('setPayment', payload.currentPayment);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}