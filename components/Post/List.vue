<template>
  <div>
    <h1 class="page-title">Blog</h1>
    <ul class="posts-wrapper">
      <li v-for="post in posts" :key="post.id" class="section">
        <div class="post-item">
          <nuxt-link class="router-link-img" :to="String(post.id)" append>
            <img class="post-img" :src="[post.path ? post.path : '/img/logo-sumbnail-gradation.png']" alt />
          </nuxt-link>
          <nuxt-link :to="String(post.id)" class="text" append>
            <p class="date">
              {{ post.date }}
              <span class="category-name">{{ post.category.name }}</span>
            </p>
            <p class="title">{{ post.title }}</p>
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
}
</script>
<style lang="scss">
.posts-wrapper {
  list-style: none;
  width: 100%;
  margin: auto;
  padding: 0;
  @include pc {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 45px;
  }
  .section {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    @include pc {
      width: 50%;
    }
  }
  .post-item {
    position: relative;
    display: block;
    max-width: 400px;
    margin-top: 40px;
    margin-bottom: 75px;
    margin-right: auto;
    margin-left: auto;
    @include pc {
      margin-bottom: 50px;
      max-width: 420px;
    }
    .router-link-img {
      position: relative;
      display: block;
      width: 80%;
      margin: auto;
      position: relative;
      z-index: 0;
    }
    .post-img {
      position: relative;
      z-index: 0;
      width: 100%;
      height: calc(80vw / 16 * 9);
      max-height: calc(400px * 0.8 / 16 * 9);
      display: block;
      box-shadow: 0 0 5px 1px #111;
      background-color: #222222;
      object-fit: cover;
      @include pc {
        max-height: calc(420px * 0.8 / 16 * 9);
      }
    }
    .text {
      display: block;
      padding: 5px 10px 8px;
      width: 85%;
      background-color: #585858;
      position: relative;
      z-index: 2;
      box-shadow: 11px 11px 0 -3px $theme-color-green;
      margin: auto;
      margin-top: -20px;
      @include pc {
        box-shadow: 16px 16px 0 -5px $theme-color-green;
      }
    }
    .date {
      font-family: 'Josefin Sans', sans-serif;
      color: $text-color-normal;
      margin-bottom: 0;
      margin-top: 0;
      padding-top: 2px;
      .category-name {
        margin-left: 1rem;
        font-size: 14px;
      }
    }
    .title {
      margin-top: 0;
      margin-bottom: 0;
      font-weight: normal;
      font-size: 17px;
      padding-bottom: 1px;
      @include pc {
        font-style: 18px;
      }
    }
  }
}
</style>
