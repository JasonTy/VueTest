<template>
  <div>
    Sanda
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
        if (document.getElementsByClassName('6_link') && document.getElementsByClassName('6_link')[0]) {
        document.getElementsByClassName('6_link')[0].className = 'active'
      }
    })
    },100)
    }
  }
</script>
