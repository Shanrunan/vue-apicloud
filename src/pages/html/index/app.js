import App from './app.vue';
import Vue from 'vue';
import vTap from 'v-tap';
import router from '../../router'
Vue.use(vTap); //添加vue tap事件


window.apiready = function() {
    new Vue({
        el: '#app',
        render: h => h(App),
        router,
        template: '<App/>',
        components: { App },
        data: {
          /*事件代理*/
          eventHub: new Vue()
        }
    })
}