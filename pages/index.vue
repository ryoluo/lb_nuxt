<template>
  <div id="home" :class="[lang, { fadein: fadein }]">
    <div class="flex">
      <div class="section">
        <div class="catch-copy-wrapper">
          <h2 class="catch-copy">Thoughts on</h2>
          <h2 class="catch-copy">Technology,</h2>
          <h2 class="catch-copy">Society,</h2>
          <h2 class="catch-copy">and the World.</h2>
        </div>
      </div>
      <div class="section">
        <div class="intro">
          <div class="flex-wrapper">
            <div class="border"></div>
            <h3 class="header3">Hi! I'm Ryo Kobayashi.</h3>
          </div>
          <h4 class="header">I'm a software engineer working at Tokyo, Japan.</h4>
          <h4 class="header last">Here is my official website, discover more from menu button above!</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [{ hid: 'og:type', property: 'og:type', content: 'website' }],
    }
  },
}
</script>
<style lang="scss" scoped>
#home {
  max-width: 950px;
  box-sizing: border-box;

  .flex {
    min-height: calc(100vh - 150px);
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }

  .section {
    width: 100%;
  }

  .catch-copy-wrapper {
    min-width: 260px;
    width: fit-content;
    background-color: #555555;
    background-image: $theme-gradation-gray;
    margin-top: 5px;
    padding: 5px 30px 5px 10px;
    margin-bottom: 35px;
    position: relative;

    @include pc {
      box-sizing: border-box;
      width: 420px;
      margin-top: 0;
      padding: 10px 75px 10px 20px;
      margin-bottom: 0;
    }

    .catch-copy {
      font-family: $josefin;
      margin: 0;
      padding: 5px 0;
      font-size: 22px;
      position: relative;
      font-weight: normal;

      @include pc {
        font-size: 28px;
      }
    }

    &::after {
      top: 0;
      left: 0;
      z-index: -1;
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      background-image: linear-gradient(135deg, #015956, #05433d);
      position: absolute;
      margin-top: 10px;
      margin-left: 10px;

      @include pc {
        margin-top: 20px;
        margin-left: 20px;
      }
    }
  }

  .intro {
    font-weight: normal;
    padding-bottom: 36px;
    width: 95%;
    margin: auto;

    @include pc {
      width: fit-content;
      margin-top: 55px;
      margin-right: 20px;
      padding-bottom: 72px;
      width: 600px;
      box-sizing: border-box;
    }

    .flex-wrapper {
      display: flex;

      @include pc {
        margin-bottom: 36px;
        width: fit-content;
      }
    }

    .border {
      width: 5px;
      margin-right: 7.5px;
      background-image: $theme-gradation-green;

      @include pc {
        width: 9px;
        margin-right: 15px;
      }
    }

    .header {
      font-weight: normal;
      color: $text-color-normal;

      @include pc {
        font-family: Arial, Helvetica, sans-serif;
        width: fit-content;
        font-size: 20px;
      }

      &.last {
        margin-bottom: 0;
      }
    }

    .header3 {
      color: #fff;
      font-family: $josefin;
      font-weight: normal;
      margin: 16px 0;

      @include pc {
        margin: 16px 0;
        font-size: 24px;
      }
    }

    .separator {
      height: 1.5px;
      width: 75%;
      background-image: $theme-gradation-green;
    }
  }
}
</style>
