import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth/'
import alert from './modules/alert/'
import folder from './modules/folder/'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
      auth,
      alert,
      folder,
  },
});

