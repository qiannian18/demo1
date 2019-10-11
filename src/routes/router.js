import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [{
			path: "/",
			name: "首页",
			component: () => import('@/views/main.vue'),
			children: [{
					path: "/tblist",
					name: "数据",
					component: () => import('@/views/tb/tblist'),
					meta: {
						active: "2-1",
						title:"文章列表"
					}
				},
				{
					path: "/home",
					name: "首页",
					component: () => import('@/views/home/home'),
					meta: {
						active: "1",
					}
				},
				{
					path: "/newarticle",
					name: "写文章",
					component: () => import('@/views/article/newarticle'),
					meta: {
						active: "2-2",
						title:"写文章"
					}
				},
				{
					path: "/addclass",
					name: "添加分类",
					component: () => import('@/views/article/class'),
					meta: {
						active: "3-1",
						title:"添加分类"
					}
				},
			]
		},
	]
})


export default router
