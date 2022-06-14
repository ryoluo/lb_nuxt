<template>
  <div>
    <div class="btn-border">
      <button class="btn-good" :class="{ clicked: isBtnClicked }" @click="good">
        <font-awesome-icon class="btn-icon" icon="thumbs-up" />
        <p class="btn-count">{{ count === -1 ? '-' : count }}</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      required: true,
      type: Number,
    },
    countUp: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {
      isBtnClicked: false,
    }
  },
  methods: {
    async good() {
      this.isBtnClicked = true
      await this.$sleep(100)
      this.isBtnClicked = false
      this.countUp()
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-border {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: $theme-gradation-green;
}
.btn-good {
  display: block;
  width: 92px;
  height: 92px;
  border-radius: 100%;
  padding: 0;
  border: none;
  background: #222;
  &.clicked {
    background: #292929;
  }
  &:hover {
    cursor: pointer;
  }
}
.btn-icon {
  color: $text-color-normal;
  margin-top: 8px;
  height: 30px;
  width: 30px;
}
.btn-count {
  color: $text-color-normal;
  margin: 8px 0 0 0;
}
</style>
