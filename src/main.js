import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
import router from "./routes/router.js"
import "./css/iconfont.css"

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
