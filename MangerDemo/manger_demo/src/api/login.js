
import OrderView from '@/views/OrderView.vue'
import GraphView from '@/views/GraphView.vue'
import { addRoutes } from '@/utils/routerUtils.js'
import permission from '../store/modules/PermissionModule.js'
import UserView from '../views/UserView.vue'
import GraphChildView from '../views/GraphChildView.vue'
import permissionModule from '../store/modules/PermissionModule.js'
import router from '../router'

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
        //装载路由
        loadRoutes(userInfo.userId, router)
        //跳转
        router.push("/home")
    } else {
        console.log("登录失败!");
    }
    return userInfo;
}

export function loadRoutes(userId, router) {
    //获取路由信息，新增路由
    var routes = getRoutes(userId)
    //添加到全局
    addRoutesToGlobal(routes)
    //挂载路由
    addRoutes(routes, router)
}

function toReloadRoutes() {
    if (permissionModule.state.userId == null) {
        toLogout(router)
        return
    }
    loadRoutes(permissionModule.state.userId, router)
}



const addRoutesToGlobal = function (routes) {
    console.log("全局")
    console.log(routes)
    permission.commit("initRoutes", routes)
}

const adminRoutes = [
    {
        path: "/order",
        name: "orderPage",
        component: OrderView,
        title: "订单页面",
        icon: "el-icon-s-order"
    },
    {
        path: "/manager/graph",
        name: "graphPage",
        component: GraphView,
        title: "统计主页",
        icon: "el-icon-s-data",
        children: [
            {
                path: "/manager/graph/child",
                name: "graphChildPage",
                component: GraphChildView,
                title: "统计子页"
            }
        ]
    },
    {
        path: "/manager/user",
        name: "userPage",
        component: UserView,
        title: "用户页面",
        icon: "el-icon-s-data"
    }
]
const guestRoutes = [
    {
        path: "/manager/graph",
        name: "graphPage",
        component: GraphView
    }
]