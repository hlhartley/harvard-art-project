<template>
  <div class="banner">
    <a href="https://www.harvardartmuseums.org/" target="_blank">
      <img class="harvard-art-museum-text" src='../assets/harvard-art-museums.jpg'/>
    </a>
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

<style scoped>
  .banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 150px;
    padding: 15px;
    padding-top: 0px; 
  }

  .harvard-art-museum-text {
    height: 75px;
  }
</style>
