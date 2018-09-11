<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$router.push("/login");
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  p, span, a {
    font-weight: 800;
  }
  /* cube-ui 错误提示 样式调整 图标上移*/
  .cube-toast-icon {
    margin-top: -10px;
  }
</style>
