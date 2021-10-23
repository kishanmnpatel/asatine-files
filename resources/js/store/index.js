import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/'
import alert from './modules/alert/'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
      auth,
      alert,
  },
});
