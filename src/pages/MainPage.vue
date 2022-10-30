<template>
  <component
      v-bind:is="currentTabComponent"
      @singOut="changeTab"
      @singIn="changeTab">
  </component>
</template>

<script>
import SingIn from "@/components/SingIn";
import UserProfile from "@/components/UserProfile";

export default {
  name: "MainPage",
  data() {
    return {
      currentTabComponent: !sessionStorage.getItem('is-authenticated') ?  SingIn : UserProfile
    }
  },
  methods: {
    changeTab(state) {
      this.currentTabComponent = !state ? SingIn : UserProfile
    }
  }
}
</script>

<style scoped>

</style>