import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        suppliers: []
    },
    actions: {
        LOAD_SUPPLIERS_LIST: function ({ commit }) {
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers').then((response) => {
                commit('SET_SUPPLIERS_LIST', { list: response.data })
            }, (err) => {
                window.console.log(err)
            })
        }
    },
    mutations: {
        SET_SUPPLIERS_LIST: (state, { list }) => {
            state.suppliers = list
        }
    },
    getters: {
        completedSuppliers: state => {
            return state.suppliers.filter(suppliers => suppliers.completed).length
        },

        filteredByStateKo(state) {
            return state.suppliers.filter(suppliers => suppliers.status)
        },

        filteredByStateOk(state) {
            return state.suppliers.filter(suppliers => !suppliers.status)
        }
    }
})