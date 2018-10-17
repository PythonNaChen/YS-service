<template>
  <li @click="change">
    <router-link :to="'/' + mark">
      <span v-show="bool"><slot name="active"></slot></span>
      <span v-show="!bool"><slot name="normal"></slot></span>
      <p :class="{red:bool}">{{title}}</p>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: "tabbarChild",
    data: function () {
      return {};
    },
    methods: {
      change() {
        this.$emit("option", this.mark);
      }
    },
    computed: {
      bool: function () {
        if (this.mark == this.sel) {
          return true;
        } else {
        }
        return false;
      },
    },
    props: ["title", "mark", "sel"]
  };
</script>
<style scoped>
  .red {
    color: #de5844;
  }

  p {
    color: #999999;
    line-height: 0.5rem;
    font-size: 0.36rem;
  }
</style>
