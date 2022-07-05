<template>
  <transition name="fade">
    <nav v-show="showNav" class="nav">
      <ul class="links">
        <li class="link" @click="hideNav">
          <nuxt-link to="/about/" class="text">About</nuxt-link>
        </li>
        <li class="link" @click="hideNav">
          <nuxt-link to="/blog/" class="text">Blog</nuxt-link>
        </li>
        <li class="link" @click="hideNav">
          <nuxt-link to="/diary/" class="text">Diary</nuxt-link>
        </li>
        <li class="link" @click="hideNav">
          <nuxt-link to="/contact/" class="text">Contact</nuxt-link>
        </li>
      </ul>
      <ul class="icons">
        <li class="icon">
          <a class="link" href="/open/twitter/" target="_blank">
            <font-awesome-icon class="fab fa-twitter" :icon="['fab', 'twitter']"></font-awesome-icon>
          </a>
        </li>
        <li class="icon">
          <a class="link" href="/open/instagram/" target="_blank">
            <font-awesome-icon class="fab fa-instagram" :icon="['fab', 'instagram']"></font-awesome-icon>
          </a>
        </li>
        <li class="icon">
          <a class="link" href="/open/github/" target="_blank">
            <font-awesome-icon class="fab fa-github" :icon="['fab', 'github']"></font-awesome-icon>
          </a>
        </li>
      </ul>
    </nav>
  </transition>
</template>
<script>
export default {
  props: {
    showNav: {
      type: Boolean,
    },
  },
  methods: {
    hideNav() {
      this.$emit('hideNav')
    },
  },
}
</script>
<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(34, 34, 34, 1);
  z-index: 10;
  .links {
    margin: 87px auto 20px auto;
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    .link {
      position: relative;
      display: block;
      flex: 0 0 75%;
      margin: 18px auto;
      text-align: center;
      background-color: $theme-color-green;
      background-image: $theme-gradation-green;
      padding: 3px;
      .text {
        display: block;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
        line-height: 50px;
        padding-top: 3px;
        margin: 0;
        background-color: #222222;
        color: $text-color-normal;
        font-weight: normal;
        &.coming-soon {
          font-size: 18.5px;
        }
      }
      .shadow {
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding-top: 0px;
        display: block;
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
        position: absolute;
        background-color: rgba(34, 34, 34, 0.6);
      }
    }
  }
  .icons {
    padding: 0;
    margin: 25px 0;
    list-style: none;
    display: flex;
    width: calc(75% + 15px);
    justify-content: space-between;
    font-size: 26px;
    margin: auto;
    max-width: 950px * 0.9 * 0.5;
    .icon {
      .link {
        display: inline-block;
        line-height: 100%;
        width: 30px;
        text-align: center;
        padding: 7.5px;
        @include pc {
          padding: 10px;
        }
        .fab {
          @include pc {
            font-size: 110%;
          }
          line-height: 100%;
          color: $text-color-normal;
        }
      }
    }
  }
}
</style>
