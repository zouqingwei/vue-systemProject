import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('@/components/Home')
const Detail=()=>import('@/components/Detail')
const Head=()=>import('@/components/Head')
const List=()=>import('@/components/List')
const Shop=()=>import('@/components/Shop')
const Single=()=>import('@/components/Single')
const Login=()=>import('@/components/Login')
const DetailOne=()=>import('@/components/DetailOne')
const DetailTwo=()=>import('@/components/DetailTwo')
const DetailThree=()=>import('@/components/DetailThree')
const DetailFour=()=>import('@/components/DetailFour')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
        path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      redirect:'/detailone',
      name: 'Detail',
      component: Detail,
      // children:[
      //   {path:'/detail',component:Detail},
      //   {path:'detailone',component:DetailOne},
      //   {path:'detailtwo',component:DetailTwo},
      //   {path:'detailthree',component:DetailThree},
      //   {path:'detailfour',component:DetailFour}
      // ]

    },
    {
      path: '/detailone',
      name: 'DetailOne',
      component: DetailOne
    },
    {
      path: '/detailtwo',
      name: 'DetailTwo',
      component: DetailTwo
    },
    {
      path: '/detailthree',
      name: 'DetailThree',
      component: DetailThree
    },
    {
      path: '/detailfour',
      name: ' DetailFour',
      component: DetailFour
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter:((to,from,next)=>{  //路由的独享守卫写在router  index.js 某一个路由中
        alert('请您先登录');   //守护某一个对应路由的页面
        if(to.path==='/login'){
          next()
        }else {
          next('/login');
        }

      })
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/shop',
      name: 'Shop',
      component:Shop,
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },

  ]
})
