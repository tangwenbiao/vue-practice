import NotFoundView from '@/components/NotFound.vue'

export function addRoutes(routes,router) {
    console.log("路由信息")
    router.options.routes.forEach((item,index) => {
        if(item.name=="homePage"){
            console.log(item.path)
            item.children=routes
        }
    });
    console.log(router.options.routes)
    //router.addRoutes(routes);
    router.addRoutes(notFoundRoutes);
    console.log(router.options)
}

const emptyRoutes=[]

const notFoundRoutes = [
    {
        path: "/404",
        name: "404",
        component: NotFoundView
    },
    {
        path: "*",
        redirect: "/404"
    }
]