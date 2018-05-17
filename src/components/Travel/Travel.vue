<template>
  <div>
    <div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
      <div style="text-align: left; font-size: 20px; font-weight: 500; margin-bottom: 20px">普吉岛之行</div>
      <img src="https://jasonblog.oss-cn-hangzhou.aliyuncs.com/2%20%2889%29.jpg?x-oss-process=style/shuiyin" class="content-img"/>
      <div style="text-align: left; font-size: 12px; font-weight: 300; margin-bottom: 20px">2018-05-17</div>
      <img src="https://jasonblog.oss-cn-hangzhou.aliyuncs.com/2%20%2891%29.jpg?x-oss-process=style/shuiyin" class="content-img"/>
      <div style="text-align: left; font-size: 12px; font-weight: 300">2018-05-17</div>
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
