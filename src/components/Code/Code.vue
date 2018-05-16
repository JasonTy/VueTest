<template>
<div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
  <div v-html="compiledMarkdown" style="text-align: left"></div>
</div>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'context',
    props: ['contents'],
    computed: {
      compiledMarkdown: function () {
        return marked(this.contents, { sanitize: true })
      }
    },
    data () {
      return  {
        content: '# das'
      }
    },
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
    }
  }
</script>


