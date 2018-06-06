<template>
  <div class="div-margin">
    <div class="div-index">
      <div class="div-context">
        <h1>唐的博客</h1>
        <div class="my-label">代码/个人简历/跑步/电影/篮球/设计/散打/一切有趣的/...</div>
        <div class="my-link">
        </div>
        <div class="enter-article">
          <router-link to="/article/code">进入文章</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "jquery"
  export default {
    name: "JasonBlog",
    data () {
      return {
        msg: "JasonBlog"
      }
    }
  }
</script>
<style scoped>
/* eslint-disable */
  div {
    box-sizing: border-box;
  }
  .div-margin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    width: 100%;
    height: 100%;
  }
  .div-index {
    display: inline-block;
    box-sizing: border-box;
    width: 600px;
    height: 285.5px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .div-index > .div-context {
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -ms-transition: 0.6s;
    -o-transition: 0.6s;
    transition: 0.6s;
    position: relative;
    width: 600px;
    padding: 40px;
    background: #f7f7fa;
    box-shadow: 0px 14px 50px -19px rgba(13, 23, 42, 1);
    animation: div-context 2s ease-in-out forwards;
    letter-spacing: 4px;
    line-height: 3;
    user-select: none;
  }
@keyframes div-context {
   from {opacity: 0}
   to {opacity: 1}

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

@media (max-width: 600px) {
  .div-index {
    width: 100%;
    height: 42%;
  }
  .div-index > .div-context  {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
  }
}


</style>
