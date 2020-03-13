
import OrderView from '@/views/OrderView.vue'
import GraphView from '@/views/GraphView.vue'
import { addRoutes } from '@/utils/routerUtils.js'
import permission from '../store/modules/PermissionModule.js'

const getUserInfo = function (info) {
    var userInfo
    if (info.username == "admin") {
        userInfo = {
            userId: 10,
            status: true,
            message: "abc"
        }
    } else {
        userInfo = {
            userId: 20,
            status: true,
            message: "acc"
        }
    }

    return userInfo;
}


const getRoutes = function (userId) {
    if (userId == 10) {
        return adminRoutes;
    }
    return guestRoutes;
}

//退出
export function toLogout(router) {
    router.push("/login")
    //重新载入，清空router路由（vue-router没有提供相关接口）
    location.reload()
}

//访问登录方法
export function toLogin(info, router) {
    //登录
    var userInfo = getUserInfo(info);
    if (userInfo.status) {
        //获取路由信息，新增路由
        var routes = getRoutes(userInfo.userId)
        //添加到全局
        addRoutesToGlobal(routes)
        //挂载路由
        addRoutes(routes, router)
        //跳转
        router.push("/home")
    } else {
        console.log("登录失败!");
    }
    return userInfo;
}

const addRoutesToGlobal = function (routes) {
    console.log("路由信息")
    console.log(routes)
    permission.commit("initRoutes", routes)
}

const adminRoutes = [
    {
        path: "/order",
        name: "orderPage",
        component: OrderView
    }
]
const guestRoutes = [
    {
        path: "/graph",
        name: "graphPage",
        component: GraphView
    }
]