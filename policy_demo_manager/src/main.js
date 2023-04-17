import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import * as echarts from 'echarts'
import "echarts-wordcloud/dist/echarts-wordcloud.js";
import "echarts-wordcloud/dist/echarts-wordcloud.min.js";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
