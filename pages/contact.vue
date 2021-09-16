<template>
  <div>
    <transition name="fade" type="out-in">
      <div v-show="displayModal" class="modal-wrapper">
        <div class="modal">
          <h3 class="modal-title">Confirm</h3>
          <p>メッセージを送信します。</p>
          <p>入力されたメールアドレスが正しいことをご確認ください。</p>
          <p class="email">{{ email }}</p>
          <div class="btn-wrapper">
            <button class="btn-primary" :disabled="sending" @click="sendMessage">
              <p v-if="sending" class="btn-text">Sending...</p>
              <p v-else class="btn-text">Send</p>
            </button>
            <button class="btn-secondary" :disabled="sending" @click="hideModal">
              <p class="btn-text">Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade" type="out-in">
      <div v-if="displayToast" class="toast" :class="{ 'toast-error': isErrorToast }">
        <p class="toast-message">
          {{ toastMessage1 }}
          <br />
          {{ toastMessage2 }}
        </p>
      </div>
    </transition>
    <h1 class="page-title">Contact</h1>
    <div class="form">
      <form @submit.prevent @submit="confirm()">
        <p class="prop">Name</p>
        <input id="name" v-model="name" type="text" required />
        <p class="prop">Email</p>
        <input id="email" v-model="email" type="email" required />
        <p class="prop">Content</p>
        <textarea id="content" v-model="content" rows="10" required></textarea>
        <button class="submit btn-primary" type="submit">
          <p class="btn-text">Submit</p>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      content: '',
      displayModal: false,
      sending: false,
      displayToast: false,
      toastMessage1: '',
      toastMessage2: '',
      isErrorToast: false,
    }
  },
  head: {
    title: 'Contact - Lotus Base',
  },
  computed: {
    params() {
      return {
        name: this.name,
        email: this.email,
        content: this.content,
      }
    },
  },
  methods: {
    confirm() {
      this.displayModal = true
    },
    hideModal() {
      this.displayModal = false
    },
    async sendMessage() {
      this.sending = true
      await this.$axios.$get('/api/token')
      await this.$axios
        .$post('/api/contact/submit', this.params)
        .then((response) => {
          this.hideModal()
          setTimeout(this.makeSendingFalse, 500)
          this.toastSuccess()
          this.name = ''
          this.email = ''
          this.content = ''
        })
        .catch(() => {
          this.hideModal()
          setTimeout(this.makeSendingFalse, 500)
          this.toastError()
        })
    },
    toastSuccess() {
      this.toastMessage1 = 'お問い合わせありがとうございます。'
      this.toastMessage2 = 'メッセージを送信しました。'
      this.isErrorToast = false
      this.displayToast = true
      setTimeout(this.hideToast, 2000)
    },
    toastError() {
      this.toastMessage1 = 'エラーが発生しました。'
      this.toastMessage2 = 'メッセージの送信に失敗しました。'
      this.isErrorToast = true
      this.displayToast = true
      setTimeout(this.hideToast, 2000)
    },
    hideToast() {
      this.displayToast = false
    },
    makeSendingFalse() {
      this.sending = false
    },
  },
}
</script>
<style lang="scss" scoped>
.form {
  width: 90%;
  margin: auto;
  max-width: 500px;
  padding-bottom: 30px;
  position: relative;
  .prop {
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    font-size: 17px;
    margin-bottom: 10px;
    width: 100%;
  }
  input,
  textarea,
  select,
  option {
    box-sizing: border-box;
    display: block;
    width: 100%;
    background-color: #333;
    color: $text-color-normal;
    border: none;
    padding: 6px 7.5px;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  select {
    height: 40px;
    padding: 5px 7.5px;
  }
  button {
    margin-top: 30px;
  }
  textarea {
    resize: vertical;
    max-height: 500px;
  }
}
.modal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #333333bb;
  .modal {
    box-sizing: border-box;
    padding: 0 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 95%;
    max-width: 540px;
    height: fit-content;
    background-color: #222;
    z-index: 21;
    box-shadow: 0 0 5px 1px #111;
    margin: auto;
    @include pc {
      padding: 0 20px;
      padding-bottom: 10px;
    }
    .modal-title {
      font-family: $josefin;
      font-weight: normal;
      border-bottom: 2px solid #555;
      margin: 15px 0;
      font-size: 21px;
    }
    .email {
      color: #ffffff;
      font-size: 110%;
      border-left: 5px solid #555;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
    }
    .btn-wrapper {
      margin-top: 25px;
      margin-bottom: 15px;
      .btn-primary {
        margin-right: 25px;
      }
    }
  }
}
.toast {
  max-width: 500px;
  width: fit-content;
  padding: 5px;
  border-radius: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 25px auto;
  z-index: 12;
  background-color: #1f9273ee;
  &.toast-error {
    background-color: #af3058ee;
  }
  @include pc {
    margin-top: 90px;
    padding: 5px 20px;
  }
  .toast-message {
    color: #ffffff;
    width: fit-content;
    margin: 5px auto;
    padding: 0 20px;
    text-align: center;
  }
}
</style>
