import { createRouter,createWebHashHistory} from 'vue-router'


const routes:any = [
    {
        path:"/",
        component: () => import("../view/Login.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router