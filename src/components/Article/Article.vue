<template>
  <div>
    <div>
      <div class="navigation">
        <div class="header">
          <img v-bind:src="pathImg" class="img-ty"/>
          <router-link to="/">
            <div class="title">
              <span style="font-weight: bold; font-size: 16px; color: white">唐的博客</span>
            </div>
          </router-link>
        </div>
      </div>
      <ul style="margin-top: 5px">
        <li v-on:click="da(1, $event)">
          <router-link to="/article/code" class="active" v-if="type==1">代码</router-link>
          <router-link to="/article/code" class="1_link title02" v-else>代码</router-link>
        </li>
        <li v-on:click="da(8, $event)">
          <router-link to="/article/curriculumvitae" class="active" v-if="type==8">个人简历</router-link>
          <router-link to="/article/curriculumvitae" class="title02 8_link" v-else>个人简历</router-link>
        </li>
        <li v-on:click="da(3, $event)">
          <router-link to="/article/design" class="active" v-if="type==3">设计</router-link>
          <router-link to="/article/design" class="title02 3_link" v-else>设计</router-link>
        </li>
        <li v-on:click="da(4, $event)">
          <router-link to="/article/basketball" class="active" v-if="type==4">篮球</router-link>
          <router-link to="/article/basketball" class="title02 4_link" v-else>篮球</router-link>
        </li>
        <li v-on:click="da(5, $event)">
          <router-link to="/article/travel" class="active" v-if="type==5">旅行</router-link>
          <router-link to="/article/travel" class="title02 5_link" v-else>旅行</router-link>
        </li>
        <li v-on:click="da(6, $event)">
          <router-link to="/article/sanda" class="active" v-if="type==6">散打</router-link>
          <router-link to="/article/sanda" class="title02 6_link" v-else>散打</router-link>
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
  import {mapState, mapActions} from 'vuex'
  export default {
    name: "context",
    props: ['pathImg'],
    data () {
      return {
        msg: "内容"
      }
    },
    computed: mapState({
      type: function (state) {
      return state.type;
    }}),
    methods: {
      ...mapActions(['INCREMENT']),
      da(type, event) {
        if(event.target.tagName.toLowerCase() == 'a') {
          this.INCREMENT(type)
        }
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

  .title02::before {
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
  .title02:hover {
    color: #1B3DCC;
  }
  .title02:hover::before {
    visibility: visible;
    width: 100%;
    transform:scaleX(1);
    transition: all .25s ease;
  }
  .active{
    border-bottom: 1px solid #1B3DCC;
    color: #1B3DCC
  }
  .img-ty {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
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
  .navigation {
    height: 40px;
    background-color: black;
    line-height: 40px;
  }
</style>
