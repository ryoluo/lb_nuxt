<template>
  <footer class="footer">
    <div class="wrapper">
      <p class="support">
        Support me:
        <a href="bitcoin:bc1qt82nf74gnfa7v3fvr29fm8w85v5mwcqz7nakuf">bc1qt82nf74gnfa7v3fvr29fm8w85v5mwcqz7nakuf</a>
      </p>
      <p class="copyright">© 2019-{{ curYear }} Ryo Kobayashi</p>
    </div>
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
  height: 74px;
  width: 100%;
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 12px;
  text-align: center;
  .wrapper {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .support {
    margin: 8px 0 0 0;
  }
  .copyright {
    margin: 0 2px 0 0;
  }
}
</style>
