<template>
  <div>
    <div>
      <div class="header">
        <img v-bind:src="pathImg" class="img-ty"/>
        <div class="title">
          <h1>唐的博客</h1>
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/article/code">代码</router-link>
        </li>
        <li>
          <router-link to="/article/photography">摄影</router-link>
        </li>
        <li>
          <router-link to="/article/design">设计</router-link>
        </li>
        <li>
          <router-link to="/article/basketball">篮球</router-link>
        </li>
        <li>
          <router-link to="/article/travel">旅行</router-link>
        </li>
        <li>
          <router-link to="/article/sanda">散打</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    name: "context",
    props: ['pathImg', 'xinzhi'],
    data () {
      return {
        msg: "内容"
      }
    }
  }
</script>
<style scoped>
  .header {
    width: 862px;
    margin: 0px auto 0 auto;
    text-align: left;
  }
  .header > .title {
    display: inline-block;
  }
  .content {
    margin: 0px auto 0 auto;
  }
/* eslint-disable */
  ul {
    display: inline-block;
  }
  ul > li {
    list-style: none;
    float: left;
    width: 120px;
    display: inline-block;
    text-align: left;
  }

  a {
    position: relative;
    height: 18px;
    line-height: 1;
    text-decoration: none;
    color: #777777;
    display: inline-block;
  }

  a::before {
    visibility: visible;
    content: "";
    width: 100%;
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #1B3DCC;
    transform:scaleX(0);
    transition: all .25s ease;
  }
  a:hover {
    color: #1B3DCC;
  }
  a:hover::before {
    visibility: visible;
    width: 100%;
    transform:scaleX(1);
    transition: all .25s ease;
  }
  .img-ty {
    width: 60px;
    height: 60px;
    position: relative;
    top: 18px;
  }
  .content-img {
    margin: 0;
    padding: 0;
  }


  @media (max-width: 600px) {
    .content-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
