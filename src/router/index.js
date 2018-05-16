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
        {path: 'code', component: Code, props: { contents: `
# Mac 环境下上传本地项目到gitHub

1.默认你本地已经安装git，同时你也注册了github账号

2.因为本地git仓库和github仓库之间的传输是通过ssh加密的，所以首先要获取本地的公钥

3.检查本地是否存在.ssh 文件，该文件下存在id\_rsa（私钥） 和 id\_rsa.pub（公钥）

4.如果没有，首先在终端创建mkdir .ssh，然后进入cd .ssh , 在该文件里生成公钥，输入ssh-Keygen -t rasa -C “your\_email@example.com”回车，

 输入ls -la 查看是否存在id\_rsa（私钥） 和 id\_rsa.pub（公钥）

5.拷贝公钥，pbcopy \< ~/.ssh/id\_rsa.pub

6.登录gitHub，Account Setting —\> SSH Keys 添加ssh，title 为你项目所在目录

 Key：将你刚复制的key填写此处

7.密钥左边的点最开始是灰色的，输入ssh -T git@github.com，刚开始的网页刷新之后会变成绿色。

8.在git创建个人项目，这时在本地终端输入ssh -T git@github.com 如果出现如下提示，表示你已经连上

 Hi MiracleHe! You've successfully authenticated, but GitHub does not provide shell access.

9.根据如下步骤来

 1\.进入本地项目根目录，输入touch README.md 创建一个记录提交操作的文档

 2\. git init 初始化本地仓库

 3\. git add README.md 添加

 4\. git add \* 加入所有项目

 5\. git status 检查状态，如果都是绿的，证明成功

 6\. git commit -m “first commit” 提交到远程仓库，并写下注释

 7\. git remote add origin git@github.com:youname/Test.git 链接远程仓库并创建一个名叫 origin 的别名

 8\. git push -u origin master 将本地仓库的东西提交到地址是origin的地址，master分支下
        ` }, meta: {type: 1, title: "唐的博客"}},
        {path: 'basketball', component: Basketball, meta: { type: 2, title: "唐的博客"}},
        {path: 'design', component: Design, meta: { type: 3, title: "唐的博客"}},
        {path: 'photography', component: Photography, props: {xinzhi}, meta: { type: 4, title: "唐的博客"}},
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
