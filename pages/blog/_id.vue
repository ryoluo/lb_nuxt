<template>
  <div>
    <div class="blog-nav">
      <div class="link pre">
        <div v-if="post.previous_id" class="nuxt-link">
          {{ prev }}
          <nuxt-link v-if="post.previous_id" class="nuxt-link-a" :to="`/blog/${post.previous_id}`"></nuxt-link>
        </div>
      </div>
      <div class="link home">
        <nuxt-link class="nuxt-link" to="/blog">Blog</nuxt-link>
      </div>
      <div class="link next">
        <div v-if="post.next_id" class="nuxt-link">
          {{ next }}
          <nuxt-link v-if="post.next_id" class="nuxt-link-a" :to="`/blog/${post.next_id}`"></nuxt-link>
        </div>
      </div>
    </div>
    <article v-if="post" class="article">
      <p class="date">{{ post.date }}</p>
      <h1 class="title">{{ post.title }}</h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="post.content"></div>
    </article>
    <div v-if="post" class="blog-nav">
      <div class="link pre">
        <div v-if="post.previous_id" class="nuxt-link">
          {{ prev }}
          <nuxt-link v-if="post.previous_id" class="nuxt-link-a" :to="`/blog/${post.previous_id}`"></nuxt-link>
        </div>
      </div>
      <div class="link top">
        <nuxt-link class="nuxt-link" to="/blog">Back to Top</nuxt-link>
      </div>
      <div class="link next">
        <div v-if="post.next_id" class="nuxt-link">
          {{ next }}
          <nuxt-link v-if="post.next_id" class="nuxt-link-a" :to="`/blog/${post.next_id}`"></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scss'
export default {
  async asyncData({ params, $http }) {
    const renderer = new marked.Renderer()
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
    const post = await $http.$get(`http://localhost:8000/api/posts/${params.id}`)
    post.content = markedInstance(post.content)
    return { post }
  },
  head() {
    return {
      title: this.post.title + ' - Lotus Base',
    }
  },
  computed: {
    prev() {
      return '< Prev'
    },
    next() {
      return 'Next >'
    },
  },
}
</script>
