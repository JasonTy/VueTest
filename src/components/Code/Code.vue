<template>
<div>
  <img v-bind:src="xinzhi" class="content-img"/>
</div>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'context',
    props: ['xinzhi', 'type'],
    data () {
      return  {
        msg: ''
      }
    },
    created() {
      setTimeout(() => {
      this.$nextTick(() => {
        if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
          document.getElementsByClassName('1_link')[0].className = 'active'
        }
    })
    },100)
    }
  }
</script>


