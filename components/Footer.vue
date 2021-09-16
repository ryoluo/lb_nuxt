<template>
  <footer class="footer">
    <p class="copyright">© 2019-{{ curYear }} Ryo Kobayashi</p>
  </footer>
</template>
<script>
export default {
  computed: {
    curYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>
<style lang="scss" scoped>
.footer {
  background-image: $theme-gradation-green;
  height: 75px;
  width: 100%;
  position: relative;
  .copyright {
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    padding-bottom: 10px;
    font-size: 12px;
  }
}
</style>
