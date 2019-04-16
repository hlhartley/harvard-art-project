<template>
  <div id="app">
    <Banner />
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
      items: []
    }
  },
  created () {
    this.$http.get(`https://api.harvardartmuseums.org/object?hasimage=1&culture=Korean&classification=Paintings&apikey=${apiKey}`).then(function(data) {
      this.items = data.body.records
      console.log(data.body.records)
    })
  }
}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
}
</style>
