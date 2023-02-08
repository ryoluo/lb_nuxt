<template>
  <div>
    <Header />
    <Nuxt class="view" />
    <adsbygoogle ad-slot="1732020500" :ad-style="{ display: 'block', margin: 'auto' }" />
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
.view {
  min-height: calc(100vh - 171px);
  @include pc {
    max-width: 1024px;
    margin: auto;
  }
}
</style>
