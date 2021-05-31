<template>
  <div id="app">
    <Loading v-if="getFetchingData"></Loading>
    <router-view v-show="!getFetchingData"></router-view>
  </div>
</template>

<script>
import Loading from './components/Loading'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Loading
  },
  computed:{
    ...mapGetters([
      'getFetchingData'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
