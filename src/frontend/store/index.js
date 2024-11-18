// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoggedIn: false,
        username: '',
    },
    mutations: {
        setLoginState(state, payload) {
            state.isLoggedIn = payload.isLoggedIn;
            state.username = payload.username;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.username = '';
        }
    },
    actions: {
        login({ commit }, userInfo) {
            commit('setLoginState', { isLoggedIn: true, username: userInfo.username });
        },
        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        username: state => state.username,
    }
});
