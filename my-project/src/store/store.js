import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  static:{
    storeList:[],
    storeMoreList:[],
  },
  mutations:{
    initList(state,listData){
      // state.storeList=listData;
      localStorage.setItem('list',JSON.stringify(listData));  //本地存储需要存储字符串
      state.storeList=JSON.parse(localStorage.getItem('list'));//从本地存储中取值
    },
    storeGetMoreList(state,moreList){
      state.storeMoreList=moreList;
    }
  }
});
export default store;
