'use strict'
/* eslint-disable */
let fullStyle = [`
  /*
  * 大家好，我是小唐
  * 六月了，好多公司都在招聘，我也想试试。
  * 说做就做，我也来写一份简历！
  */
  
  /* 首先给所有元素加上过渡效果 */
  * {
    transition: all .3s;
  }
  /* 白色背景太单调了，我们来点背景 */
  .writingBoard {
    color: rgb(222,222,222); background: rgb(0,43,54);
  }
  /* 文字离边框太近了 */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; height: 90vh;
    background: rgb(0,43,54);
  }
  /* 代码高亮 */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.punctuation{ color: yellow; }
  .token.function{ color: rgb(42,161,152); }
  
  /* 加点 3D 效果呗 */
  .writingBoard{
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed; left: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
  }
  
  /* 接下来我给自己准备一个编辑器 */
  .resumeEditor{
    position: fixed; right: 0; top: 0;
    padding: .5em;  margin: .5em;
    width: 48vw; height: 90vh;
    border: 1px solid;
    background: black; color: white;
    overflow: auto;
  }
  /* 好了，我开始写简历了 */
  
  
  `,
  `
  /* 这个简历好像差点什么
   * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
   * 简单，用开源工具翻译成 HTML 就行了
   */
  `
  ,
  `
  /* 再对 HTML 加点样式 */
  .resumeEditor{
    padding: 2em;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
  /* 加点 3D 效果呗 */
  .resumeEditor {
    position: fixed; right: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(-10deg) translateZ(-100px) ;
            transform: rotateY(-10deg) translateZ(-100px) ;
  }
  /* 将文本首字下沉  */
  h2::first-letter{
    float: left;
    color: green;
    font-size: 30px;
  }
`]

let fullMarkdown = `
  唐轶
  ----
  
  Node.js全栈工程师
  
  技能
  ----
  
  * 前端开发
  * 后端 开发
  * Node.js 开发
  * docker开发
  
  
  工作经历
  ----
  
  1. 壹财富
  2. 壹财宝
  3. 腾云资产
  4. 九天云财富
  
  
  个人博客
  ----
  
  https://www.jasonty.com
`

export {fullStyle, fullMarkdown}

