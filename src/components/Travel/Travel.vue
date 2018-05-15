<template>
  <div>
    Travel-Jason
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
