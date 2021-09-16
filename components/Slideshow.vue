<template>
  <div class="wrapper">
    <hooper ref="hooper" :settings="hooperSettings" class="eg-slideshow" @slide="updateCarousel">
      <slide v-for="img in imgList" :key="img" class="eg-slide">
        <img :src="img" :alt="img" class="img" />
      </slide>
    </hooper>
    <div class="dots">
      <div class="prev" @click="slidePrev()">
        <div v-if="imgList.length > 1" class="arrow"></div>
      </div>
      <div v-for="i in imgList.length" :key="i" class="dot-wrapper">
        <div class="dot" :class="{ active: i - 1 === carouselData }"></div>
      </div>
      <div class="next" @click="slideNext()">
        <div v-if="imgList.length > 1" class="arrow"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: { Hooper, Slide },
  props: {
    imgList: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      carouselData: 0,
    }
  },
  computed: {
    hooperSettings() {
      return {
        wheelControl: false,
      }
    },
  },
  watch: {
    carouselData() {
      this.$refs.hooper.slideTo(this.carouselData)
    },
  },
  methods: {
    slidePrev() {
      this.$refs.hooper.slidePrev()
    },
    slideNext() {
      this.$refs.hooper.slideNext()
    },
    updateCarousel(payload) {
      this.carouselData = payload.currentSlide
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.eg-slideshow {
  background-color: #333333;
  position: relative;
  height: 80vw;
  @include pc {
    height: 80vw * 0.55;
    max-height: 1024 * 0.55 * 0.8px;
  }
  .eg-slide {
    height: fit-content;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 6vw;
    margin: auto;
    @include pc {
      padding-bottom: calc(6vw * 0.55);
    }
    @include wider1024 {
      padding-bottom: calc(1024 * 0.06 * 0.55px);
    }
    .img {
      position: relative;
      display: block;
      margin: auto;
      border-radius: 5px;
      max-width: 90vw;
      box-shadow: 2px 2px 5px 1px #222;
      background-color: #fff;
      object-fit: cover;
      @include pc {
        width: calc(100vw * 0.55 * 0.9);
        max-width: calc(1024 * 0.55 * 0.9 * 1px);
      }
    }
  }
}
.dots {
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: fit-content;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: calc(6vw - 15px);
  @include pc {
    margin-bottom: calc(6vw * 0.55 - 36px * 0.55);
  }
  @include wider1024 {
    margin-bottom: calc(1024 * 0.06 * 0.55px - 36px * 0.55);
  }
  .next,
  .prev {
    display: none;
    @include pc {
      display: block;
      height: 36px;
      width: 36px;
      position: relative;
      .arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 6px;
        height: 6px;
        margin: auto;
        border-top: 1.5px solid $text-color-muted;
        border-right: 1.5px solid $text-color-muted;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  .prev {
    .arrow {
      transform: rotate(-135deg);
    }
  }
  .next {
    .arrow {
      transform: rotate(45deg);
    }
  }
  .dot-wrapper {
    width: 30px;
    height: 30px;
    position: relative;
    @include pc {
      width: 36px;
      height: 36px;
    }
  }
  .dot {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 5px;
    height: 5px;
    margin: auto;
    border-radius: 100%;
    background-color: $text-color-muted;
    transition: 0.3s;
    &.active {
      background-color: #fff;
    }
  }
}
</style>
