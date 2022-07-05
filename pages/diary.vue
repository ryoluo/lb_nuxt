<template>
  <div id="diary">
    <h1 class="page-title">Diary</h1>
    <article>
      <div v-for="diary in diaries" :key="diary.id" class="diary-item">
        <p class="date">{{ diary.date }}</p>
        <h2 class="title">{{ diary.title }}</h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="parseContent(diary.content)"></div>
      </div>
    </article>
  </div>
</template>
<script>
import { marked, Renderer } from 'marked'
import Prism from '@/plugins/prism'
export default {
  data() {
    return {
      diaries: [],
    }
  },
  computed: {
    markedInstance() {
      const renderer = new Renderer()
      renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${href}">${text}</a>`
      // eslint-disable-next-line new-cap
      return new marked.setOptions({
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
    },
  },
  async mounted() {
    this.diaries = await this.$axios.$get('/api/diaries/index')
  },
  methods: {
    parseContent(content) {
      return this.markedInstance(content)
    },
  },
}
</script>
<style lang="scss" scoped>
.diary-item {
  margin-bottom: 100px;
}
</style>
