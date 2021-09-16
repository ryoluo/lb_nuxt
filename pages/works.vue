<template>
  <div id="works">
    <h1 class="page-title">Works / Experiences</h1>
    <div class="item">
      <a class="sp name" href="/open/en2web" target="_blank">
        En2::Web
        <font-awesome-icon class="fas" :icon="['fas', 'external-link-alt']" />
      </a>
      <p class="sp frameworks">Laravel / Vue.js</p>
      <Slideshow class="slideshow" :img-list="imgList.en2web" />
      <div class="text">
        <a class="pc name" href="/open/en2web" target="_blank">
          En2::Web
          <font-awesome-icon class="fas" :icon="['fas', 'external-link-alt']" />
        </a>
        <p class="pc frameworks">Laravel / Vue.js</p>
        <p>
          学生団体メンバー専用のWebグループウェアです。設計〜デザイン〜コーディング〜運用を一貫して個人で行っています。
        </p>
        <p>ノートによる情報共有機能やプロフィール機能をはじめ、Slackとの連携や自動通知機能などを組み込んでいます。</p>
        <p>
          2018年2月にリリースし、2020年2月にはSPA化フルリニューアルを行いました（画像は旧バージョンのものになります）。
        </p>
      </div>
    </div>
    <hr />
    <div class="item">
      <a href="/open/gsskt" class="sp name jp" target="_blank">
        Howtelevision, inc.
        <font-awesome-icon class="fas" :icon="['fas', 'external-link-alt']" />
      </a>
      <p class="sp frameworks">CakePHP / React / Go</p>
      <Slideshow class="slideshow" :img-list="imgList.gsskt" />
      <div class="text">
        <a href="/open/gsskt" class="pc name jp" target="_blank">
          Howtelevision, inc.
          <font-awesome-icon class="fas" :icon="['fas', 'external-link-alt']" />
        </a>
        <p class="pc frameworks">CakePHP / React / Go</p>
        <p>2019年2月から2020年8月の1年半、ITエンジニアインターンとしてお世話になっていました。</p>
        <p>
          ユーザー向け新機能の開発、内部向けツールの開発・保守運用、データ集計・分析、APIエンドポイントの設計・実装など、多岐に渡る業務に携わらせていただきました。
        </p>
        <p>
          内部向けツール開発ではCRMシステムの内製化、各種事務処理のシステム化等を設計から実装・テストまで一貫して行っていました。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Works - Lotus Base',
    link: this.link,
  },
  computed: {
    imgDir() {
      return '/img/works/'
    },
    imgList() {
      const en2web = []
      const gsskt = []
      for (let i = 1; i <= 6; i++) {
        en2web.push(`${this.imgDir}en2web_${i}.png`)
      }
      for (let i = 1; i <= 3; i++) {
        gsskt.push(`${this.imgDir}gsskt_${i}.png`)
      }
      return { en2web, gsskt }
    },
    link() {
      const link = []
      const imgs = Object.values(this.imgList.en2web).concat(Object.values(this.imgList.gsskt))
      for (const img in imgs) {
        link.push({
          rel: 'preload',
          href: imgs[img],
          as: 'image',
        })
      }
      return link
    },
  },
}
</script>
<style lang="scss" scoped>
#works {
  hr {
    margin-bottom: 50px;
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 35px;
    @include pc {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .name {
      display: block;
      font-family: $josefin;
      font-size: 21px;
      margin: 0;
      width: fit-content;
      color: #fff;
      padding: 6px 13px 0 15px;
      background-color: #555;
      box-shadow: 10px 10px 0 -3px $theme-color-green;
      margin-bottom: 25px;
      .fas {
        font-size: 13px;
        color: $text-color-normal;
        vertical-align: top;
        padding-top: 9px;
        margin-left: 8px;
      }
      &.sp {
        margin-bottom: 10px;
      }
      &.pc {
        margin-top: 16px;
      }
    }
    .jp {
      padding: 7px 13px 0 15px;
      font-size: 20px;
      .fas {
        padding-top: 8px;
      }
    }
    .frameworks {
      font-family: $josefin;
      color: #fff;
      font-size: 110%;
      width: 100%;
      &.sp {
        margin-left: 5%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .text {
      width: 100%;
      margin: auto;
      @include pc {
        width: 40%;
      }
      p {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        @include pc {
          // width: 100%;
        }
      }
    }
    .slideshow {
      width: 100%;
      margin-bottom: 10px;
      @include pc {
        margin-bottom: 0;
        width: 55%;
      }
    }
  }
}
</style>
