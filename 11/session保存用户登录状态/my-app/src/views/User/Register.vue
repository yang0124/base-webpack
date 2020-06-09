<template>
  <div>
    <h1>注册</h1>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <input type="password" v-model="repassword" />
    <button @click="registerAction">注册</button>
  </div>
</template>

<script>
import ajax from "../../ajax";
export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    registerAction() {
      if (this.password === this.repassword) {
        ajax
          .post("/api/user/register", {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .then(() => {
            this.$router.push("/user/login");
          });
      } else {
        this.$notification.error({ message: "两次密码不一致" });
      }
    }
  }
};
</script>
