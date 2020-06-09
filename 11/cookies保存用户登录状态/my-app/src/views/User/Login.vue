<template>
  <div>
    <h1>登录</h1>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="loginAction">登录</button>
  </div>
</template>

<script>
import ajax from "../../ajax";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginAction() {
      ajax
        .post("/api/user/login", {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>
