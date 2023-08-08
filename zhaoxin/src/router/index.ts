import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path:'/',
        redirect:'/project',
    },
    {
        path: '/project',
        name: 'projectGroup',
        component: () => import("../views/project/index.vue"),
        children: [
            {
                path: '/fan',
                name: "fanImg",
                component: () => import("../views/page/Fan-chart.vue")
            },
            {
                path: '/histogram',
                name: "histogram",
                component: () => import("../views/page/Histogram.vue")
            },
            {
                path: '/sign',
                name: "sign",
                component: () => import("../views/page/Sign.vue")
            }
        ],
    }
]
const router = createRouter(
    {
        history: createWebHashHistory(),
        routes,
    }
)
export default router