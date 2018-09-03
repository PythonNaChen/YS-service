<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$router.push("/mine");
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
</style>
