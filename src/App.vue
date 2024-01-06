<template>
  <div id="app">
    <HomeView/>
  </div>
</template>

<style>

</style>
<script>
import HomeView from "@/views/HomeView.vue";
// eslint-disable-next-line vue/no-export-in-script-setup
export default {
  name: 'App',
  components : {
    HomeView
  }
}
</script>