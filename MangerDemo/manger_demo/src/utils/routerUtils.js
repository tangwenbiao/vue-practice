import NotFoundView from '@/components/NotFound.vue'

export function addRoutes(routes,router) {
    router.addRoutes(routes);
    router.addRoutes(notFoundRoutes);
    console.log("路径信息")
    console.log(router.options.routes)
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