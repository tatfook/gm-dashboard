import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import servers from './modules/servers'
import monitor from './modules/monitor'
import permission from './modules/permission'
import resource from './modules/resource'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    resource,
    servers,
    monitor
  },
  getters
})

export default store
