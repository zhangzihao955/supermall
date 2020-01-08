import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/fonts/iconfont.css" //这里引入字体图标文件
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')