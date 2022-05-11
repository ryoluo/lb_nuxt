<template>
  <PostList :posts="posts" />
</template>
<script>
export default {
  async asyncData({ $http }) {
    const posts = await $http.$get('/api/posts/en/index')
    return { posts }
  },
  head: {
    title: 'Blog - Lotus Base',
    htmlAttrs: {
      lang: 'en',
    },
  },
}
</script>
