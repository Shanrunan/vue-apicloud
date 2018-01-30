<template>
  <div id="app">
    <!--transition过渡-->
    <transition name="shake-in">
      <!--提示框-->
      <div class="notification" v-show="notiShow">{{notiInfo}}</div>
    </transition>
    <!--keep-alive缓存组件，不重复加载-->
    <!--2.1.0后提供了include/exclude两个属性 可以针对性缓存相应的组件-->
    <keep-alive exclude="'detail'">//?
      <!--路由的内容将被渲染在view中。-->
      <!--$route.path路由路径-->
      <router-view :key="$route.path"></router-view>//?
    </keep-alive>
      <!--底栏Tabfooter-->
    <tabfooter></tabfooter>
  </div>
</template>

<script>
import Tabfooter from '../../components/Tabfooter'

export default {
  name: 'app',
  components: {
    Tabfooter
  },
  data () {
    return {
      notiShow: false,
      notiInfo: '',
      itemId:''
    }
      },
      methods: {
        /*动画内容出现和消失*/
        showNotification: function (info, time = 3000) {
          if (!this.notiShow) {
            this.notiShow = true
            this.notiInfo = info
            setTimeout(() => {
              this.notiShow = false
         }, time)
        }
       },
        assignData:function(item){
        this.$root.eventHub.$emit('toDetailDate',item)
    }
  },
  mounted () {    //?
    /*放到index页面*/
    this.$root.eventHub.$emit('pushToIndex')
    /*监听动画*/
    this.$root.eventHub.$on('showNotification', this.showNotification)
    
  },
  updated(){
    this.$root.eventHub.$on('toAppDate',this.assignData)
   
  }
}
</script>

<style lang='scss'>
html, body {
  overflow: hidden;
}

body * {
  max-height: 999999px;   // overflow在hidden和scroll切换的时候字体会自动改变，可以用这个方法解决.
}

body {
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
a, img, button, input, textarea, div, li {
  -webkit-tap-highlight-color:rgba(255,255,255,0);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  font-size: 1rem;
}

.notification {
  position: absolute;
  display: inline-block;
  padding: 0 0.5rem;
  top: 38.2%;
  left: 50%;
  height: 2rem;
  line-height: 2rem;
  transform: translateX(-50%);
  background-color: black;
  opacity: 0.5;
  color: white;
  z-index: 999;
  border-radius: 0.5rem;
}
/*过渡动画*/
.shake-in-enter-active {
  animation: shake 10s;
}

@keyframes shake
{
from {transform: translateX(calc(-50% + 0));}
10% {transform: translateX(calc(-50% - 1rem));}
30% {transform: translateX(calc(-50% + 1rem));}
50% {transform: translateX(calc(-50% - 1rem));}
80% {transform: translateX(calc(-50% + 1rem));}
to {transform: translateX(calc(-50% + 0));}
}

@-moz-keyframes shake /* Firefox */
{
from {transform: translateX(0);}
10% {transform: translateX(-5px);}
30% {transform: translateX(5px);}
50% {transform: translateX(-5px);}
80% {transform: translateX(5px);}
to {transform: translateX(0);}
}

@-webkit-keyframes shake /* Safari 和 Chrome */
{
from {transform: translateX(0);}
10% {transform: translateX(-5px);}
30% {transform: translateX(5px);}
50% {transform: translateX(-5px);}
80% {transform: translateX(5px);}
to {transform: translateX(0);}
}

@-o-keyframes shake /* Opera */
{
from {transform: translateX(0);}
10% {transform: translateX(-5px);}
30% {transform: translateX(5px);}
50% {transform: translateX(-5px);}
80% {transform: translateX(5px);}
to {transform: translateX(0);}
}
</style>
