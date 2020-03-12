import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import HelloWorld from '@/components/HelloWorld'
import SimpleModel from '@/components/SimpleModel'
import SimpleInstance from '@/components/practice/SimpleInstance'
import SimpleRender from '@/components/practice/SimpleRender'
import SimpleJump from '@/components/practice/SimpleJump'

Vue.use(Router)

const router=new Router({
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
        },
        {
          path:'render',
          name:'SimpleRender',
          component: SimpleRender
        },
        {
          path:'jump',
          name:'SimpleJump',
          component: SimpleJump
        }
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  NProgress.start(),
  console.log("触发:"+from.path+"->"+to.path)

  console.log("to.meta:"+to.meta.title)
  console.log(to.meta)
  var t=`${to.meta.title}`
  console.log(t)
  if(to.meta.title){
    console.log("undefined is false")
  }else{
    console.log("undefined is true")
  }
  console.log("from.meta"+from.meta.title)
  console.log(from.meta)
  next();
})

export default router;
