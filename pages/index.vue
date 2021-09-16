<template>
  <div id="home" :class="[lang, { fadein: fadein }]">
    <div class="lang-wrapper">
      <div class="lang" @click="toggleLang">
        <p class="text">{{ text['lang'][lang] }}</p>
      </div>
    </div>
    <div class="flex">
      <div class="section">
        <div class="catch-copy-wrapper">
          <h2 class="catch-copy">{{ text['music'][lang] }}</h2>
          <h2 class="catch-copy">{{ text['vietnam'][lang] }}</h2>
          <h2 class="catch-copy">{{ text['technology'][lang] }}</h2>
          <h2 class="catch-copy last">{{ text['and'][lang] }}</h2>
        </div>
      </div>
      <div class="section">
        <div class="intro">
          <div class="flex-wrapper">
            <div class="border"></div>
            <h3 class="header3">{{ text['greeting'][lang] }}</h3>
          </div>
          <h4 class="header">{{ text['work'][lang] }}</h4>
          <h4 class="header last">{{ text['website'][lang] }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: 'en',
      fadein: false,
      text: {
        lang: {
          en: 'Tiếng Việt',
          vn: 'Enligsh',
        },
        music: {
          en: 'Music,',
          vn: 'Âm nhạc,',
        },
        vietnam: {
          en: 'Vietnam,',
          vn: 'Việt Nam,',
        },
        technology: {
          en: 'Technology,',
          vn: 'Kỹ thuật,',
        },
        and: {
          en: 'and Many Good Things.',
          vn: 'Và những điều tốt đẹp.',
        },
        greeting: {
          en: "Hi! I'm Ryo Kobayashi.",
          vn: 'Xin chào! Tôi là Ryo Kobayashi.',
        },
        work: {
          en: "I'm a web-application engineer working at Tokyo, Japan.",
          vn: 'Tôi là kỹ sư phần mềm ở Tokyo, Nhật Bản.',
        },
        website: {
          en: 'Here is my official website, discover more from menu button above!',
          vn: 'Đây là trang web chính thức của tôi, hãy xem thêm từ nút menu bên trên!',
        },
      },
    }
  },
  methods: {
    toggleLang() {
      this.fadein = true
      if (this.lang === 'en') {
        this.lang = 'vn'
      } else {
        this.lang = 'en'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#home {
  max-width: 950px;
  box-sizing: border-box;
  .flex {
    min-height: calc(100vh - 150px - 52px);
    @include pc {
      min-height: calc(100vh - 150px - 38px);
    }
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
  .lang-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }
  .lang {
    font-family: $josefin;
    padding: 6px 9px 1px 11px;
    width: 105px;
    text-align: center;
    margin-top: 0;
    color: $text-color-normal;
    border-bottom: 1px solid $text-color-muted;
    margin-bottom: 16px;
    @include pc {
      text-align: center;
      font-size: 18px;
      padding: 6px 12px 0 12px;
      margin-bottom: 0;
    }
    &:hover {
      cursor: pointer;
    }
    .text {
      margin: 0;
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
.vn.fadein {
  p,
  h2,
  h3,
  h4 {
    animation: update-article1 1s ease 0s 1 normal;
  }
}
.en.fadein {
  p,
  h2,
  h3,
  h4 {
    animation: update-article2 1s ease 0s 1 normal;
  }
}
@keyframes update-article1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes update-article2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
