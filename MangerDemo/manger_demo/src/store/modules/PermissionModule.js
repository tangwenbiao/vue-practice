import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const permissionModule=new Vuex.Store({
    namespace:true,
    state:{
        routes:[]
    },
    mutations:{
        initRoutes(state,routes){
            console.log("触发初始化路由选项")
            state.routes=wrapperRoutes(routes);
        },
        addRoutes(state,routes){
            state.routes.push(routes)
        }
    }
})

const wrapperRoutes=function(routes){
    var wrapRoutes=[]
    routes.forEach((item,i) => {
        console.log(item)
        var temp=item;
        temp.hidden=false;
        console.log("单条内容")
        console.log(item)
        console.log(temp)
        wrapRoutes.push(temp);
    });
    return wrapRoutes;
}

export default permissionModule;