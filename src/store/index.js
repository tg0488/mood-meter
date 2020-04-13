import Vue from 'vue'
import Vuex from 'vuex'
import teams from './modules/teams'
import journals from './modules/journals'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        teams,
        journals,
    }
});

export default store