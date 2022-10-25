import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
// import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  modules,
  getters,
  strict: true,
  plugins: [createLogger()]
});

export default store;
