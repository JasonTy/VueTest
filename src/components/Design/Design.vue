<template>
  <div>
    Design
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
        if (document.getElementsByClassName('3_link') && document.getElementsByClassName('3_link')[0]) {
        document.getElementsByClassName('3_link')[0].className = 'active'
      }
    })
    },100)
    }
  }
</script>
