import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import test from './modules/test';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    test,
  },
  actions,
  getters,
});

export default store;
