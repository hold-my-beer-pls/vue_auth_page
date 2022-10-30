<template>
  <div class="singIn">
    <div class="singIn__fieldName">Почта</div>
    <input
        class="singIn__input"
        v-bind:value="email"
        @input="email = $event.target.value">
    <div class="singIn__fieldName">Пароль</div>
    <input
        class="singIn__input_password"
        v-bind:value="password"
        @input="password = $event.target.value"
        type="password">
    <button
        class="singIn__button"
        @click="singIn">
      ВОЙТИ
    </button>
  </div>
</template>

<script>
import {fetchLogin} from "@/services/fetchers";

export default {
  name: "SingIn",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async singIn() {
      if (this.email.length > 0 && this.password.length) {
        try {
          await fetchLogin(this.email, this.password)
          this.$emit('singIn', true)
        } catch (e) {
          alert(e.response.data?.errorMessage || 'error')
        }
      } else {
        alert('Поля почты и пароля должны быть заполнены')
      }
    }
  }
}
</script>

<style scoped>
.singIn {
  display: flex;
  flex-direction: column;
}
.singIn__fieldName {
  margin: 6px 0;
}
.singIn__button {
  margin-top: 12px;
}
</style>