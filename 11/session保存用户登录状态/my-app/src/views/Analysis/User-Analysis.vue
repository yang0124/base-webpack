<template>
  <div>
    <h1>用户分析</h1>
  </div>
</template>

<script>
import ajax from "../../ajax";
export default {
  mounted() {
    ajax
      .get("/api/goods")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
