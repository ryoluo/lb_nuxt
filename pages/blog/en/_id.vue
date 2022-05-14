<template>
  <PostView :post="post" lang="en" />
</template>
<script>
export default {
  async asyncData({ params, $http }) {
    const post = await $http.$get(`/api/posts/en/${params.id}`)
    return { post }
  },
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.digest,
        },
        { hid: 'og:url', property: 'og:url', content: `${this.$config.baseURL}/blog/en/${this.post.id}` },
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
  },
}
</script>
