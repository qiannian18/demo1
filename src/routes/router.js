import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode:"history",
	routes: [{
			path: "/tblist",
			name: "淘宝数据列表",
			component: () => import('@/views/tb/tblist')
		},
		{
			path: "/home",
			name: "首页",
			component: () => import('@/views/home/home')
		},
	]
})


export default router
