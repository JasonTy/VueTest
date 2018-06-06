<template>
  <div style="text-align: left;" class="writingBoard">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
/* eslint-disable */
  import StyleEditor from './StyleEditor'
  import ResumeEditor from './ResumeEditor'
  import './../../assets/reset.css'
  import {fullStyle, fullMarkdown} from './../../data/mock-data'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 20,
        currentStyle: '',
        enableHtml: false,
        fullStyle: fullStyle,
        currentMarkdown: '',
        fullMarkdown: fullMarkdown
      }
    },
    created() {
      this.makeResume()
      setTimeout(() => {
        this.$nextTick(() => {
        if (document.getElementsByClassName('8_link') && document.getElementsByClassName('8_link')[0]) {
        document.getElementsByClassName('8_link')[0].className = 'active'
      }
    })
    },100)
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
        resolve()
      })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
            let interval = this.interval
            let showStyle = (async function () {
              let style = this.fullStyle[n]
              if (!style) { return }
              // 计算前 n 个 style 的字符总数
              let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
              let prefixLength = length - style.length
              if (this.currentStyle.length < length) {
                let l = this.currentStyle.length - prefixLength
                let char = style.substring(l, l + 1) || ' '
                this.currentStyle += char
                if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                  this.$nextTick(() => {
                    this.$refs.styleEditor.goBottom()
                })
                }
                setTimeout(showStyle, interval)
              } else {
                resolve()
              }
            }).bind(this)
        showStyle()
      })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
            let length = this.fullMarkdown.length
            let interval = this.interval
            let showResume = () => {
            if (this.currentMarkdown.length < length) {
          this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
          let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
          let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
          if (prevChar === '\n' && this.$refs.resumeEditor) {
            this.$nextTick(() => this.$refs.resumeEditor.goBottom())
          }
          setTimeout(showResume, interval)
        } else {
          resolve()
        }
      }
        showResume()
      })
      }
    }
  }

</script>
