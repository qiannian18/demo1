import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import iView from 'iview';
import 'iview/dist/styles/iview.css';


import axios from "axios"

Vue.prototype.$http=axios
Vue.prototype.$message=ElementUI.$message
Vue.prototype.baseUrl="http://localhost:8088/back"
Vue.prototype.ImgbaseUrl="http://localhost:8088/images/"
Vue.use(iView);
Vue.use(ElementUI)
import router from "./routes/router.js"
import "./css/iconfont.css"



new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
