<template>
  <div id="app">
    <Banner msg="Welcome to Harvard Art Project"/>
    <ItemsContainer v-bind:items="items"/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import ItemsContainer from './components/ItemsContainer.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import { apiKey } from '../key.js'

export default {
  name: 'app',
  components: {
    Banner,
    ItemsContainer
  },
  data () {
    return {
      items: [{name: 'Art 1'}, {name: 'Art 2'}]
    }
  },
  created () {
    this.$http.get(`https://api.harvardartmuseums.org/object?apikey=${apiKey}`).then(function(data) {
      // this.art = data.body.records
      console.log(data.body.records)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
