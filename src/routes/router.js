import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: "/tblist",
			component: () => import('@/views/tb/tblist')
		},

	]
})

export default router