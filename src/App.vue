<template>
  <div id="app">
    <DevNav />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import DevNav from './components/DevNav'

export default {
  name: 'App',
  components: {
    DevNav
  }
}
</script>

<style>
#app {
}
</style>
