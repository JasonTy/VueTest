<template>
  <div>
    <div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
      <img v-bind:src="gaoqing01" class="content-img"/>
      <img v-bind:src="gaoqing02" class="content-img"/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'context',
    data () {
      return  {
        msg: ''
      }
    },
    props: ['gaoqing01', 'gaoqing02'],
    created() {
      setTimeout(() => {
        this.$nextTick(() => {
        if (document.getElementsByClassName('5_link') && document.getElementsByClassName('5_link')[0]) {
        document.getElementsByClassName('5_link')[0].className = 'active'
      }
    })
    },100)
    }
  }
</script>
<style scoped>
  .content-img {
    width: 100%;
    height: 100%;
  }


  @media (max-width: 600px) {
    .content-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
