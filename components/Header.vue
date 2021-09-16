<template>
  <div class="header-component">
    <Nav :show-nav="showNav" @hideNav="hideNav" />
    <header>
      <div class="header-content">
        <nuxt-link to="/">
          <div class="logo-container" @click="hideNav">
            <img class="logo-img" src="/img/icon/lotus-logo.svg" alt />
            <p class="logo-text">Lotus Base</p>
          </div>
        </nuxt-link>
        <div class="tap-area" :class="{ showNav: showNav }" @click="toggleNav">
          <div :class="{ showNav: showNav }" class="h-btn">
            <div class="bar bar-top"></div>
            <div class="bar bar-middle"></div>
            <div class="bar bar-bottom"></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNav: false,
    }
  },
  mounted() {
    this.showNav = false
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav
      document.body.classList.toggle('showNav')
    },
    hideNav() {
      this.showNav = false
      document.body.classList.remove('showNav')
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  background-image: $theme-gradation-green;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    padding: 0 2.5%;
    max-width: 1024px;
    margin: auto;

    .logo-container {
      width: 150px;
      z-index: 11;
      position: relative;
      .logo-img {
        width: 100%;
        display: block;
      }
      .logo-text {
        font-size: 20px;
        font-family: $josefin;
        color: #fff;
        text-align: center;
        margin: 0 auto;
        vertical-align: bottom;
        line-height: 1.3;
        letter-spacing: normal;
      }
    }
    .tap-area {
      width: 35px;
      height: 35px;
      z-index: 11;
      &:hover {
        cursor: pointer;
      }
    }
    .h-btn {
      margin: 7px 0;
      height: 21px;
      position: relative;
      .bar {
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        border-radius: 1px;
        background-color: #fff;
        width: 25px;
        margin: 0 auto;
        transition: 0.3s;
        transform-origin: 50% right;
      }
      .bar-top {
        top: 0;
      }
      .bar-middle {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .bar-bottom {
        bottom: 0;
      }
      &.showNav {
        .bar-top {
          top: 9.5px;
          transform: rotate(135deg);
          transition: 0.3s;
        }
        .bar-bottom {
          transform: rotate(-135deg);
          transition: 0.3s;
          bottom: 9.5px;
        }
        .bar-middle {
          width: 0;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
