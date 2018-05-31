<template>
<div style="width: 600px;min-height: 300px;margin: 16px auto 40px auto;">
  <ul style="text-align: left">
    <li v-for="item in itemed" :key="item.id">
      <!--<span v-html="formatDate(item.title)" class="title"></span>-->
      <!--<span v-html="item.stitle" class="span-ty" v-on:click="redirect($event)" :data-url="item.id"></span>-->
      <!--<br/>-->
      <!--<div v-html="item.scontent" class="scontent"></div>-->
      <div style="display: flex; flex-direction: row; align-content: center">
        <div style="flex: 1" v-html="formatDate(item.title)" class="title"></div>
        <div style="flex: 3">
          <span v-html="item.stitle" class="span-ty" v-on:click="redirect($event)" :data-url="item.id"></span>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; align-content: center">
        <div style="flex: 1"></div>
        <div style="flex: 3" v-html="item.scontent" class="scontent">
        </div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
/* eslint-disable */
  import {mapState, mapActions} from 'vuex'
  import $ from 'jquery'
  import moment from 'moment'
  import {fetchApi} from './../../service/apiFetch'
  export default {
    name: 'context',
    data () {
      return  {
        items: []
      }
    },
    created() {
      this.setData()
    },
    computed: mapState({
      itemed: function (state) {
        return state.itemed
      }}),
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
    },
    methods: {
      ...mapActions(['INSERTDATA']),
      setData() {
        fetchApi('v1/api/blogList', {temptime:moment().format('YYYY-MM-DD HH:mm:ss'), appKey: '14b2139df051205336c561d4c139dd51'})
          .then(res => res.json())
          .then(json => {
            this.INSERTDATA(json.data)
          })
          .catch(e => console.log(e))
      },
      redirect(event) {
        const url = $(event.target).attr('data-url')
        window.location.href = `/article/code/${url}`
      },
      formatDate(date) {
        return moment(date).format('YYYY-MM-DD')
      },
      replaceText(text) {

      }
    }
  }
</script>
<style scoped>
  ul > li {
    list-style: none;
    font-size: 18px;
    font-weight: 500;
    height: 150px;
  }
  .span-ty {
    position: relative;
    cursor: pointer;
    font-size: 22px;
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
  .title {
    font-size: 14px;
    margin:auto;
  }
  .scontent {
    font-size: 12px;
    width: 400px;
    height: 52px;
    color: #66665f;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
  }
</style>


