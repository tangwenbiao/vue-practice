import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const permissionModule = new Vuex.Store({
    namespace: true,
    state: {
        routes: [],
        userId: null
    },
    getters: {
        getRoutes: state => {
            return function () {
                //路由为空尝试加载本地信息，解决本地问题
                if (state.routes.length == 0) {
                    state.routes = JSON.parse(sessionStorage.getItem("routes"))
                }
                return state.routes
            }
        }
    },
    mutations: {
        initRoutes(state, routes) {
            state.routes = wrapperRoutes(routes);
            //存储到本地
            sessionStorage.setItem("routes", JSON.stringify(state.routes))
        },
        addRoutes(state, routes) {
            state.routes.push(routes)
        },
        setUserId(state, userId) {
            state.state = userId
        }
    }
})

const wrapperRoutes = function (routes) {
    var wrapRoutes = []
    routes.forEach((item, i) => {
        console.log(item)
        var temp = item;
        temp.hidden = false;
        wrapRoutes.push(temp);
    });
    return wrapRoutes;
}

export default permissionModule;
