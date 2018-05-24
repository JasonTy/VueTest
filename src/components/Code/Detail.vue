<template>
  <div style="width: 600px;min-height: 300px;margin: 60px auto 40px auto;">
    <div v-html="compiledMarkdown" style="text-align: left"></div>
    <VueMarkdown># dasda</VueMarkdown>
  </div>
</template>
<script>
/* eslint-disable */
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'context',
    props: ['contents'],
    components: {
      'VueMarkdown': VueMarkdown
    },
    computed: {
      compiledMarkdown: function () {
        //marked(this.message, { sanitize: true })
        return '# dasd'
      }
    },
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
    }
  }
</script>


