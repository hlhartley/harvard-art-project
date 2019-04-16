<template>
  <div class="banner">
    <img class="harvard-art-museum-text" src='../assets/harvard-art-museums.jpg'/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 150px;
}
.harvard-art-museum-text {
  height: 50%
}
</style>
