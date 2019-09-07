<template>
  <div id="app">
    <Main/>
   </div>
</template>

<script>
import Main from "@/components/main/main.vue"
export default {
  components:{Main},
  name: 'App'
}
</script>
<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
