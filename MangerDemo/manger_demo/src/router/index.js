import Vue from 'vue'
import Router from 'vue-router'


import LoginView from '../views/LoginView.vue'

Vue.use(Router)


const constantRouter=[
    {
        path:"",
        name:"blankPage",
        redirect:"/login"
    },
    {
        path:"/login",
        name:"loginPage",
        component:LoginView,
        meta:
        {
            title:"登录页面"
        }
    }
]

const router=new Router({
    routes:constantRouter
})

export default router