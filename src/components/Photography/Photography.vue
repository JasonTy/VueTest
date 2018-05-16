<template>
  <div>
    <img v-bind:src="xinzhi" class="content-img"/>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'context',
    props: ['xinzhi'],
    data () {
      return  {
        msg: ''
      }
    },
    created() {
      setTimeout(() => {
      this.$nextTick(() => {
        if (document.getElementsByClassName('2_link') && document.getElementsByClassName('2_link')[0]) {
          document.getElementsByClassName('2_link')[0].className = 'active'
        }
    })
    },100)
    }
  }
</script>
<style scoped>
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
</style>
