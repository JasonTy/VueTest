<template>
  <div style="width: 600px;min-height: 300px;margin: 16px auto 40px auto; text-align: left;">
    <VueMarkdown :source="detail" style="overflow: hidden"></VueMarkdown>
    <VueMarkdown :source="messages" style="overflow: hidden"></VueMarkdown>
    <textarea v-model="messages" style="outline: none; min-width: 600px; min-height: 120px; border: 1px solid #777777; margin-top: 20px; padding: 8px">

    </textarea>
  </div>
</template>
<script>
/* eslint-disable */
  import VueMarkdown from 'vue-markdown'
  import moment from 'moment'
  import {mapState, mapActions} from 'vuex'
  import {fetchApi} from './../../service/apiFetch'
  export default {
    name: 'context',
    props: ['contents'],
    components: {
      'VueMarkdown': VueMarkdown
    },
    data () {
      return {
        messages: 'dasadsads'
      }
    },
    computed: mapState({
      detail: function (state) {
        return state.detail.content
      }}),
    mounted() {
      if (document.getElementsByClassName('1_link') && document.getElementsByClassName('1_link')[0]) {
        document.getElementsByClassName('1_link')[0].className = 'active'
      }
      this.setData()
    },
    methods: {
      ...mapActions(['INSERTDATADETAIL']),
      setData() {
        fetchApi('v1/api/blogDetail', {id: parseInt(this.$route.params.id), temptime:moment().format('YYYY-MM-DD HH:mm:ss'), appKey: '14b2139df051205336c561d4c139dd51'})
          .then(res => res.json())
        .then(json => {
          this.INSERTDATADETAIL(json.data)
        })
        .catch(e => console.log(e))
      }
    }
  }
</script>


