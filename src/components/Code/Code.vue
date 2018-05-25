<template>
<div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
  <ul style="text-align: left">
    <li v-for="item in itemed" :key="item.id">
      <span v-html="item.title"></span>
      <span v-html="item.stitle" class="span-ty" v-on:click="redirect($event)" :data-url="item.id"></span>
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


