<template>
  <div id="layout">
    <h1>后台管理系统</h1>
    <nav>
      <router-link to="/user/login">登录</router-link>
      <router-link to="/user/register">注册</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>