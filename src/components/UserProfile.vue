<template>
  <div class="singOut">
    <span class="singOut__name">имя: {{username}}</span>
    <button
        class="singOut__button"
        @click="singOut">
      ВЫХОД
    </button>
  </div>
</template>

<script>

import {fetchUserInfo} from "@/services/fetchers";

export default {
  name: "UserProfile",
  data() {
    return {
      username: ''
    }
  },
  methods: {
    singOut() {
      sessionStorage.removeItem('is-authenticated')
      this.$emit('singOut', false)
    },
    async getUserInfo() {
      try {
        const response = await fetchUserInfo()
        this.username = response.username
      } catch (e) {
        alert('error' + e)
      }
    }
  },
  mounted() {
    this.getUserInfo()
  }

}
</script>

<style scoped>
.singOut {
  display: flex;
  flex-direction: column;
}
.singOut__button {
  margin-top: 12px;
}
</style>