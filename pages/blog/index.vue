<template>
  <PostList :posts="posts" />
</template>
<script>
export default {
  async asyncData({ $http }) {
    const posts = await $http.$get('/api/posts/index')
    return { posts }
  },
  head: {
    title: 'Blog - Lotus Base',
  },
}
</script>
