<template>
  <div>
    <div class="blog-nav">
      <div class="link pre">
        <div v-if="post.previous_id" class="nuxt-link">
          {{ prev }}
          <nuxt-link v-if="post.previous_id" class="nuxt-link-a" :to="`${listPath}/${post.previous_id}/`"></nuxt-link>
        </div>
      </div>
      <div class="link home">
        <nuxt-link class="nuxt-link" :to="listPath">Blog</nuxt-link>
      </div>
      <div class="link next">
        <div v-if="post.next_id" class="nuxt-link">
          {{ next }}
          <nuxt-link v-if="post.next_id" class="nuxt-link-a" :to="`${listPath}/${post.next_id}/`"></nuxt-link>
        </div>
      </div>
    </div>
    <article v-if="post" class="article">
      <p class="date">{{ post.date }}</p>
      <h1 class="title">{{ post.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="parsedContent"></div>
    </article>
    <post-button class="good-btn" :count="count" :count-up="countUp" />
    <div v-if="post" class="blog-nav">
      <div class="link pre">
        <div v-if="post.previous_id" class="nuxt-link">
          {{ prev }}
          <nuxt-link v-if="post.previous_id" class="nuxt-link-a" :to="`${listPath}/${post.previous_id}/`"></nuxt-link>
        </div>
      </div>
      <div class="link top">
        <nuxt-link class="nuxt-link" :to="listPath">Back to Top</nuxt-link>
      </div>
      <div class="link next">
        <div v-if="post.next_id" class="nuxt-link">
          {{ next }}
          <nuxt-link v-if="post.next_id" class="nuxt-link-a" :to="`${listPath}/${post.next_id}/`"></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { marked, Renderer } from 'marked'
import Prism from '@/plugins/prism'
export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
    count: {
      required: true,
      type: Number,
    },
    countUp: {
      required: true,
      type: Function,
    },
    lang: {
      required: true,
      type: String,
    },
  },
  computed: {
    listPath() {
      return this.lang === 'en' ? '/blog/en' : '/blog'
    },
    parsedContent() {
      const renderer = new Renderer()
      renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${href}">${text}</a>`
      // eslint-disable-next-line new-cap
      const markedInstance = new marked.setOptions({
        langPrefix: 'language-',
        highlight: (code, lang) => {
          if (lang && lang.match(':')) {
            lang = lang.substring(0, lang.indexOf(':'))
          }
          if (lang in Prism.languages) {
            return Prism.highlight(code, Prism.languages[lang])
          } else {
            return code
          }
        },
        renderer,
      })
      return markedInstance(this.post.content)
    },
    prev() {
      return '< Prev'
    },
    next() {
      return 'Next >'
    },
  },
  methods: {
    async addGood() {
      await this.$axios.$post(`/api/posts/${this.post.id}/good`, { add: 1 })
    },
  },
}
</script>
<style lang="scss" scoped>
.good-btn {
  margin-top: 25px;
  margin-bottom: 40px;
}
</style>
