<template>
  <md-card>
    <md-card-actions>
      <br />
      <div class="md-subhead">
        <span>Featuring: Korean Paintings</span>
        <span>（</span>
        <span>한국화</span>
        <span>）</span>
      </div>
      <br />
      <md-button
        class="md-icon-button"
        target="_blank"
        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/24-effect-coverflow.vue"
      >
      </md-button>
    </md-card-actions>
    <md-card-media class="swiper-inner">
      <swiper :options="swiperOption">
        <swiper-slide v-bind:key="item.id" v-for="item in items">
          <Item v-bind:item="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>


<script>
import Vue from "vue";
import Item from "./Item.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

export default {
  name: "ItemsContainer",
  components: {
    Item
  },
  props: ["items"],
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>