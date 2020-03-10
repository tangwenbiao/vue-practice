import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SimpleModel from '@/components/SimpleModel'
import SimpleInstance from '@/components/practice/SimpleInstance'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path:'/',
      name:'home',
      component:HelloWorld
    },
    {
      path:'/simple',
      name:'SimpleModel',
      component: SimpleModel,
      children:[
        {
          path:'instance',
          name:'SimpleInstance',
          component: SimpleInstance
        }
      ]
    }
  ]
})
