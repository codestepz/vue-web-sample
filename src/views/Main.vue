<template>
  <div id="main">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () { return { msg: 'HELLO WORLD!' } },
  }
</script>

<style lang="scss">
  #main { padding: 100px 0; text-align: center; }
  h1 { font-weight: normal; font-weight: bold; }
</style>