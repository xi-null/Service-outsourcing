import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager_view from '../views/Manager/Manager_view.vue'
import ManagerEchart from '../views/Manager/ManagerEchart.vue'
import TopChart from '../views/Manager/TopChart.vue'
import Login_It from '../views/Login/Login_It.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login_It',
    component: Login_It
  },
  {
    path: '/TopChart',
    name: 'TopChart',
    component: TopChart
  },
  {
    path: '/myechart',
    name: 'myechart',
    component: ManagerEchart
  },
  {
    path: '/Manager_view',
    name: 'Manager_view',
    component: Manager_view
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
