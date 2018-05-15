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
        {path: 'code', component: Code, props: { xinzhi }, meta: {type: 1, title: "唐的博客"}},
        {path: 'basketball', component: Basketball, meta: { type: 2, title: "唐的博客"}},
        {path: 'design', component: Design, meta: { type: 3, title: "唐的博客"}},
        {path: 'photography', component: Photography, meta: { type: 4, title: "唐的博客"}},
        {path: 'basketball', component: Basketball, meta: { type: 5, title: "唐的博客"}},
        {path: 'sanda', component: Sanda, meta: { type: 6, title: "唐的博客"}},
        {path: 'travel', component: Travel, meta: { type: 7, title: "唐的博客"}},
      ],
      props: {
        pathImg: logo
      },
      meta: {
        title: "唐的博客"
      }
    }
  ]
})
