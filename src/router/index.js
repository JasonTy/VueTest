import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Article from '@/components/Article/Article'
import Code from '@/components/Code/Code'
import Basketball from '@/components/Basketball/Basketball'
import Design from '@/components/Design/Design'
import Photography from '@/components/Photography/Photography'
import Sanda from '@/components/Sanda/Sanda'
import Travel from '@/components/Travel/Travel'
import logo from '@/assets/mounck.png'
import xinzhi from '@/assets/xinzhi.jpg'
Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "唐的博客"
      }
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
      children: [
        {path: 'code', component: Code},
        {path: 'basketball', component: Basketball},
        {path: 'design', component: Design},
        {path: 'photography', component: Photography},
        {path: 'basketball', component: Basketball},
        {path: 'sanda', component: Sanda},
        {path: 'travel', component: Travel},
      ],
      props: {
        pathImg: logo,
        xinzhi
      },
      meta: {
        title: "唐的博客"
      }
    }
  ]
})
