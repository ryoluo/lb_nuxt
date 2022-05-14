<template>
  <div id="about">
    <h1 class="page-title">About</h1>
    <div class="upper">
      <div class="photo-and-name">
        <div class="img-wrapper">
          <img class="myphoto" src="/img/myphoto.jpg" alt="myphoto" />
        </div>
        <div class="name">
          <h3 class="name-en">Kobayashi Ryo</h3>
          <h2 class="name-jp">小林&ensp;涼</h2>
        </div>
      </div>
      <div class="message">
        <p class="message-top">ご訪問ありがとうございます。サイト運営者の小林涼と申します。</p>
        <p>某外資系企業にてITエンジニア・コンサルタントとして活動中です。</p>
        <p class="message-bottom">
          お問い合わせは
          <nuxt-link to="/contact/">Contact</nuxt-link>&nbsp;もしくは
          <a href="/open/twitter/" target="_blank">Twitter</a>
          からお願いいたします。
        </p>
      </div>
    </div>
    <div class="introduction">
      <ul class="ul">
        <li class="li">
          <h4 class="title">Languages</h4>
          <p class="detail">
            ベトナム語 / 英語<br />
            JavaScript / PHP / Go / Python
          </p>
        </li>
        <li class="li">
          <h4 class="title">Quolifications</h4>
          <p class="detail">
            基本情報技術者試験 (2019.04)<br />
            応用情報技術者試験 (2019.10)<br />
            AZ-900: Azure Fundamentals (2020.11)<br />
            情報処理安全確保支援士試験 (2021.04)
          </p>
        </li>
        <li class="li">
          <h4 class="title">Bio</h4>
          <dl class="dl">
            <dt class="dt">2015.04</dt>
            <dd class="dd">横浜国立大学経済学部 入学</dd>
            <dt class="dt">2017.07 - 2018.07</dt>
            <dd class="dd">ベトナム・ハノイ貿易大学 交換留学</dd>

            <dt class="dt">2020.03</dt>
            <dd class="dd">横浜国立大学経済学部 卒業</dd>
          </dl>
        </li>
        <li class="li">
          <h4 class="title">Experiences</h4>
          <dl class="dl">
            <dt class="dt">2019.06 - 2020.03</dt>
            <dd class="dd">
              ベトナム語による事務業務補助
              <br />@Ueda Trading Co., Ltd.
            </dd>
            <dt class="dt">2019.02 - 2020.07</dt>
            <dd class="dd">
              ITエンジニアインターン
              <br />@Howtelevision, Inc.
            </dd>
            <dt class="dt">2020.08 - Now</dt>
            <dd class="dd">ITエンジニア・コンサルタント</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'About - Lotus Base',
  },
}
</script>
<style lang="scss" scoped>
#about {
  max-width: 950px;
  .upper {
    display: flex;
    flex-wrap: wrap;
    @include pc {
      flex-wrap: nowrap;
    }
  }
  .photo-and-name {
    display: flex;
    align-items: center;
    width: 95%;
    margin: auto;
    margin-bottom: 45px;
    margin-top: 15px;
    @include pc {
      margin-top: 40px;
      width: fit-content;
    }
    .img-wrapper {
      width: 150px;
      height: 150px;
      position: relative;
      margin-left: 10px;
      @include pc {
        width: 185px;
        height: 185px;
      }
      &::after,
      &::before {
        display: block;
        content: '';
        position: absolute;
        width: 75%;
        height: 75%;
        z-index: -1;
      }
      &::after {
        background-color: $theme-color-light-green;
        background-image: $theme-gradation-green-2;
        bottom: 0;
        left: 0;
        margin-bottom: -10px;
        margin-left: -10px;
      }
      &::before {
        width: 50%;
        height: 50%;
        background-image: $theme-gradation-blue;
        top: 0;
        right: 0;
        margin-top: -10px;
        margin-right: -10px;
      }
      .myphoto {
        width: 150px;
        height: 150px;
        object-fit: cover;
        @include pc {
          width: 185px;
          height: 185px;
        }
      }
    }
    .name {
      margin-left: 30px;
      height: fit-content;
      .name-en {
        font-family: $josefin;
        font-weight: normal;
        margin: 0;
        @include pc {
          font-size: 20px;
        }
      }
      .name-jp {
        font-family: 'Yu Gothic', '游ゴシック', YuGothic, '游ゴシック体', 'ヒラギノ角ゴ Pro W3', 'メイリオ';
        font-weight: normal;
        font-size: 26px;
        margin: 0;
        @include pc {
          font-size: 28px;
        }
      }
    }
  }

  .message {
    box-sizing: border-box;
    width: 95%;
    position: relative;
    background-color: #222222;
    margin: 15px auto 30px auto;
    padding: 14px;
    @include pc {
      width: 50%;
      margin: 30px auto;
    }
    &::after,
    &::before {
      position: absolute;
      display: block;
      background-image: $theme-gradation-green;
      width: 112px;
      height: 112px;
      content: '';
      z-index: -1;
    }
    &::before {
      top: 0;
      left: 0;
      margin-top: -2px;
      margin-left: -2px;
    }
    &::after {
      bottom: 0;
      right: 0;
      margin-bottom: -2px;
      margin-right: -2px;
    }
    .message-top {
      margin-top: 2px;
    }
    .message-bottom {
      margin-bottom: 2px;
    }
  }
  .introduction {
    width: 95%;
    margin: auto;
    padding-bottom: 20px;
    .ul {
      list-style: none;
      margin: 0;
      padding: 0;
      @include pc {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
      }
      .li {
        @include pc {
          padding-left: 50px;
          width: 50%;
          box-sizing: border-box;
        }
      }
    }
  }
  .title {
    min-width: 130px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    width: fit-content;
    margin: 10px 0 17px;
    padding: 4px 10px 2px;
    font-size: 18px;
    box-shadow: 10px 10px 0 -3px $theme-color-green;
    background-color: #555;
    @include pc {
      font-size: 19px;
    }
  }
  .detail {
    margin: 10px 5px 40px 14px;
    line-height: 2;
  }
  .dl {
    margin-top: 15px;
    margin-left: 14px;
    margin-bottom: 40px;
    .dt {
      font-family: 'Josefin Sans', sans-serif;
      margin-bottom: 5px;
      color: #e8e8e8;
      font-size: 17px;
    }
    .dd {
      padding: 0;
      margin: 0;
      margin-bottom: 25px;
      margin-left: 0.5rem;
    }
  }
}
</style>
