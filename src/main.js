// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入element-ui
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 修改element-ui插件的主题
import './element-variables.scss'
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
