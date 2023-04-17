import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/font.css'
import 'normalize.css/normalize.css'
import * as echarts from 'echarts'
import "echarts-wordcloud/dist/echarts-wordcloud.js";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
