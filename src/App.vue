<template>
  <div id="app">
    <router-view/>
  </div>
</template>
/* eslint-disable */
<script>
export default {
  name: 'App'
}
</script>

/* eslint-disable */
<style>
 html, body {
   height: 101%;
   width: 100%;
   font-size: 14px;
   color: #66665F;
   margin: 0px auto;
   position: relative;
 }
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   opacity: 0.9;
 }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #f7f7fa;
    text-align: center;
    font-size: 12px;
    color: #777777;
    line-height: 40px;
  }
</style>
