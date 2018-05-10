import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Article from '@/components/Article/Article'
import Code from '@/components/Code/Code'
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
        {path: 'code', component: Code}
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
