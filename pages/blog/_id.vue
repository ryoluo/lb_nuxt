<template>
  <PostView :post="post" :count="count" :count-up="countUp" lang="ja" />
</template>
<script>
export default {
  async asyncData({ params, $http }) {
    const post = await $http.$get(`/api/posts/${params.id}`)
    return { post }
  },
  data() {
    return {
      count: -1,
      click: 0,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.digest,
        },
        { hid: 'og:url', property: 'og:url', content: `${this.$config.baseURL}/blog/${this.post.id}` },
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.digest,
        },
        { hid: 'og:image', property: 'og:image', content: this.ogImage },
      ],
    }
  },
  computed: {
    ogImage() {
      return this.post.path ? `${this.$config.baseURL}${this.post.path}` : `${this.$config.baseURL}/img/ogp/logo-fb.png`
    },
    url() {
      return `/api/posts/${this.post.id}/good`
    },
    param() {
      return {
        add: this.click,
      }
    },
  },
  watch: {
    async click(newValue) {
      if (newValue === 0) return
      await this.$sleep(500)
      if (newValue === this.click) {
        await this.$axios.$post(this.url, this.param)
        this.click = 0
      }
    },
  },
  async mounted() {
    await this.$axios.$get(this.url).then((res) => {
      this.count = res.count
    })
  },
  methods: {
    countUp() {
      this.count++
      this.click++
    },
  },
}
</script>
