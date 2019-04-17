<template>
  <div class="korean-painting-container">
    <img class="korean-painting" v-bind:src="item.primaryimageurl">
    <div class="overlay">
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]
};
</script>

<style scoped>
.korean-painting {
  height: 300px;
}
.korean-painting-container {
  font-size: 10px;
  display: flex;
  flex-direction: column;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
}
.korean-painting-container:hover .overlay {
  opacity: 1;
}
.text {
  background-color: white;
  opacity: 0.75;
  color: black;
  font-size: 12px;
  position: absolute;
  bottom: 17px;
  padding: 7px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
</style>
