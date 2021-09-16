<template>
  <iframe id="launch_frame" name="launch_frame" style="display: none"></iframe>
</template>
<script>
export default {
  layout: 'empty',
  mounted() {
    const id = 'ryoluo'
    const normalUrl = 'https://www.instagram.com/' + id
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.search(/iphone|ipad|ipod|android/) > -1) {
      // eslint-disable-next-line
      launch_frame.location.href = 'instagram://user?username=' + id
      setTimeout(function () {
        location.href = normalUrl
      }, 500)
    } else {
      document.location = normalUrl
    }
  },
}
</script>
