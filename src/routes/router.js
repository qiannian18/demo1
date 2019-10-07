import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode:"history",
	routes: [{
			path: "/tblist",
			name: "数据",
			component: () => import('@/views/tb/tblist')
		},
		{
			path: "/home",
			name: "首页",
			component: () => import('@/views/home/home')
		},
		{
			path: "/newarticle",
			name: "写文章",
			component: () => import('@/views/article/newarticle')
		},
	]
})


export default router
