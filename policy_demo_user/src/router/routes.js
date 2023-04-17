import Login_It from '@/pages/Login/Login_It.vue'
import Register_It from '../pages/Register/Register_It.vue'
import Complete_Message from '../pages/Complete_Message/Complete_Message.vue'
import Home_View from '../pages/Home/Home_View.vue'
import Personal_Center from '../pages/PersonalCenter/Personal_Center.vue'
import Search_Detail from '../pages/SearchDetail/Search_Detail.vue'
import Search_Result from '../pages/SearchResult/Search_Result.vue'
export default [
  {
    path: '/',
    component: Login_It
  },
  {
    path: '/register',
    component: Register_It
  },
  {
    path: '/complete_message',
    component: Complete_Message,
    meta: {
      title: '完善你的个人信息：'
    }
  },
  {
    path: '/home',
    component: Home_View
  },
  {
    path: '/personalCenter',
    component: Personal_Center,
    meta: {
      title: '根据您的企业信息，我们将为您提供更精确的搜索'
    }
  },
  {
    path: '/searchDetail',
    component: Search_Detail
  },
  {
    path: '/searchResult',
    component: Search_Result
  }
]