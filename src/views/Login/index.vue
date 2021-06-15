<template>
  <div><el-button @click="handleLogin">登录</el-button></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      login: "user/login",
    }),
    async handleLogin() {
      const result = await this.login();
      if (result) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
</style>