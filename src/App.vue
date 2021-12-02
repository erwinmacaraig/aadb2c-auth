<template>
  <HeaderBar />
  <div class="logo_container"><img alt="Vue logo" src="./assets/logo.png"></div>
  <HelloWorld />
</template>

<script>
import HeaderBar from '@/components/header-bar';
import HelloWorld from '@/components/HelloWorld';
import store from '@/store';
export default {
  name: 'App',
  store,
  components: {
    HeaderBar,
    HelloWorld
    
  }
}
</script>

<style lang="scss">
  @import '@/styles/index.scss';
</style>
