import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from "@/store/module/robots";
import usersModule from "@/store/module/users";








Vue.use(Vuex);




export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
