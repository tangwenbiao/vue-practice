import Vue from 'vue'
import Router from 'vue-router'


import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/components/NotFound.vue'
import OrderView from '@/views/OrderView.vue'

Vue.use(Router)


const constantRouter = [
    {
        path: "",
        name: "blankPage",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "loginPage",
        component: LoginView,
        meta:
        {
            title: "登录页面"
        }
    },
    {
        path: "/home",
        name: "homePage",
        component: HomeView
    }
]

const router = new Router({
    routes: constantRouter
})

export default router