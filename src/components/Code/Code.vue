<template>
<div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
  <ul style="text-align: left">
    <li v-for="item in items" :key="item.id">
      <span v-html="item.date"></span>
      <span v-html="item.message" class="span-ty" v-on:click="redirect($event)" :data-url="item.url"></span>
    </li>
  </ul>
</div>
</template>
<script>
/* eslint-disable */
  import $ from 'jquery'
  export default {
    name: 'context',
    data () {
      return  {
        items: [
          {date: '2018-05-15', message: 'Mac 环境下上传本地项目到gitHub', url: '20180515'},
          {date: '2018-05-12', message: '服务器如何安装jenkins', url: '20180512'}
        ]
      }
    },
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
    },
    methods: {
      redirect(event) {
        const url = $(event.target).attr('data-url')
        window.location.href = `code/${url}`
      }
    }
  }
</script>
<style scoped>
  ul > li {
    list-style: none;
    line-height: 60px;
    font-size: 18px;
    font-weight: 500;
  }
  .span-ty {
    position: relative;
    cursor: pointer;
    margin-left: 20px;
  }
  .span-ty::before {
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
  .span-ty:hover {
    color: #1B3DCC;
  }
  .span-ty:hover::before {
    visibility: visible;
    width: 100%;
    transform:scaleX(1);
    transition: all .25s ease;
  }
</style>


