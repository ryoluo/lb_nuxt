<template>
  <div class="not-found-container">
    <!-- <h1>{{ error.statusCode }}</h1> -->
    <div class="not-found">
      <p class="text">404</p>
      <div class="bar"></div>
      <p class="text">Not Found</p>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line
  //   props: [error],
}
</script>
<style lang="scss" scoped>
.not-found-container {
  min-height: calc(100vh - 150px) !important;
  position: relative;
  .not-found {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    height: fit-content;
    width: fit-content;
    .text {
      margin: 0;
      padding-top: 4px;
      font-size: 22px;
      font-family: $josefin;
      height: fit-content;
    }
    .bar {
      width: 3px;
      background-image: $theme-gradation-green;
      margin: 0 13px;
    }
  }
}
</style>
