<template>
  <div class="jindong">
    <slider></slider>
    <optionlink></optionlink>
    <tab :choosen="choosenTabs" :recommend="recommendTabs" :cpntId="cpntId" :scrollable="sonScrollable" :scrollTop="sonScrollTop"></tab>
  </div>
</template>

<script>
import Tab from './Tab'
import OptionLink from './OptionLink'
import Slider from './Slider'

export default {
  name: 'jindong',
  props: ['cpntId', 'sonScrollable', 'sonScrollTop'],
  components: {
    'tab':Tab,
    'optionlink': OptionLink,
    'slider': Slider
  },
  data () {
    return {
      choosenTabs: [
        {index: 21, name: '精选', default: true, component: 'listview', text: 'test1'},
        {index: 22, name: '女装', default: false, component: 'listview', text: 'text2'},
        {index: 23, name: '家居', default: false, component: 'listview', text: 'text3'},
        {index: 24, name: '数码', default: false, component: 'listview', text: 'text4'},
        {index: 25, name: '运动', default: false, component: 'listview', text: 'test3'}
      ],
      recommendTabs: [
        {index: 26, name: '9块9', default: false, component: 'listview', text: 'test1'},
        {index: 27, name: '绅士', default: false, component: 'listview', text: 'test2'}
      ]
    }
  },
  mounted:function(){
    this.$root.eventHub.$on('myclick',function(index){console.log(index)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
