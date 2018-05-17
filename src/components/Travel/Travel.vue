<template>
  <div>
    <div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
      <img src="https://jasonblog.oss-cn-hangzhou.aliyuncs.com/2%20%2889%29.jpg?Expires=1526534148&OSSAccessKeyId=TMP.AQFydQ2JKr7MwKR2TZkSCuUmxRfeP_ynXaQB_YV8e7R9AzhIctcYW-55bJ4gADAtAhQyLhThv0obW81RMO4T1i78tz5KgwIVALpTBQL4pzXiXiTGhXIr9BJb-PiP&Signature=7RdVHeBaqTZwtWke7jwbAVhWmRA%3D" class="content-img"/>
      <img src="https://jasonblog.oss-cn-hangzhou.aliyuncs.com/2%20%2891%29.jpg?Expires=1526534223&OSSAccessKeyId=TMP.AQFydQ2JKr7MwKR2TZkSCuUmxRfeP_ynXaQB_YV8e7R9AzhIctcYW-55bJ4gADAtAhQyLhThv0obW81RMO4T1i78tz5KgwIVALpTBQL4pzXiXiTGhXIr9BJb-PiP&Signature=zs2DoXGOADBlf48FI2vNPtDsrzY%3D" class="content-img"/>
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
