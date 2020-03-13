import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespace:true,
    state: {
        barHidden: false
    },
    getter: {
        getHidden(state) {
            return state;
        }
    }
    ,
    mutations: {
        clickHidden(state) {
            state.barHidden = !state.barHidden
        }
    }
})

export default store;