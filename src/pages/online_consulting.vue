<template>
    <div>
        <div>在线咨询</div>
        <tab-bar :select="this_path"></tab-bar>
    </div>
</template>

<script>
  import tabBar from "../components/tabbar";

  export default {
    name: "online_consulting",
    data() {
      return {
        this_path: null
      };
    },
    components: {
      tabBar
    },
    methods: {
      getPath() {
        this.this_path = this.$route.path.slice(1);
      }
    },
    created() {
      this.getPath();
    }
  };
</script>

<style scoped>

</style>