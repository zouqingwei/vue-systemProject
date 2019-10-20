// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
Vue.prototype.$axios=axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts



Vue.config.productionTip = false
//自定义指令 设置随机字体颜色
Vue.directive('changeStyle',function (el,binding) {
  // console.log(binding.arg)
  el.style.color="#"+Math.random().toString(16).slice(9,15);
  // el.style.fontSize=binding.value.font;
  if(binding.arg==='ita'){
    el.style.fontStyle='italic';
  }else if(binding.arg==='bol'){
   el.style.fontWeight='bold';
  }
})

//过滤器
Vue.filter('upper',function (val) {
  return val.toUpperCase()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
