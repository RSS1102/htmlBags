import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"
import Menus from '../router/menu.js'
//createRouter 定义了存放路由的数组
//createMemoryHistory 定义了路由模式
//RouteRecordRaw 定义了路由格式
import Index from '@/pages/index.vue'
const routers: RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        children: []
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: []    
    },
    ...Menus
   
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router
