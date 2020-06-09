<template>
<div class="van-swipe swiper-container" ref="swiper">
  <div class="swiper-wrapper">
    <slot/>
  </div>

  <!-- <pagination v-model="activeIndex" :length="length"/> -->
  <pagination :value="activeIndex" @input="inputAction" :length="length"/>

</div>

</template>

<script>
import pagination from './van-swipe-pagination'
export default {
  components: {
    pagination
  },
  props: {
    autoplay: Number,
    index: Number
  },
  data(){
    return {
      activeIndex: this.index,
      length: 0
    }
  },
  mounted(){
    this.length = this.$children.length - 1;

    this.mySwiper = new Swiper(this.$refs.swiper, {
      // loop: true,
      autoplay: this.autoplay,
      initialSlide: this.index,
      onSlideChangeEnd: (swiper)=>{
        this.activeIndex = swiper.realIndex;
      }
    });

  },
  methods: {
    inputAction(index){
      this.activeIndex = index;
      console.log(index);
      this.mySwiper && this.mySwiper.slideTo(index, 200);
    }
  }
}
</script>

<style>
.pagination{
  width: 100%;
  height: 10px;
  background: red;
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination-item{
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 4px;
  margin: 0 4px;
}
.pagination-item.active{
  background: blue;
}
</style>