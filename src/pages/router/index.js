import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: resolve => require(['@/pages/components/Index.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      /*path：路由路径*/
      path: '/index',
      /*name：路由名称（路由跳转时用）*/
      name: 'index',
      /*使用懒加载，导入对应组件*/
      component: resolve => require(['@/pages/components/Index.vue'], resolve),
      /*keepAlive：不重复加载。*/
      meta: {keepAlive: true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: resolve => require(['@/pages/components/Profile.vue'], resolve),
      meta: {keepAlive: true}
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/pages/components/Detail.vue'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/pages/components/Search.vue'], resolve)
    },
    {
      path: '/browse_records',
      name: 'browse_records',
      component: resolve => require(['@/pages/components/BrowseRecords.vue'], resolve)
    },
    {
      path: '/pay_records',
      name: 'pay_records',
      component: resolve => require(['@/pages/components/PayRecords.vue'], resolve)
    },
    {
      path: '/point_page',
      name: 'point_page',
      component: resolve => require(['@/pages/components/PointPage.vue'], resolve)
    },
    {
      path: '/setting',
      name: 'setting',
      component: resolve => require(['@/pages/components/Setting.vue'], resolve)
    },
    {
      path: '/buy_records',
      name: 'buy_records',
      component: resolve => require(['@/pages/components/BuyRecords.vue'], resolve)
    },
    {
      path: '/mydata',
      name: 'mydata',
      component: resolve => require(['@/pages/components/Mydata.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/components/Login.vue'], resolve)
    },
    {
      path: '/mark_records',
      name: 'mark_records',
      component: resolve => require(['@/pages/components/MarkRecords.vue'], resolve)
    }
  ]
})
