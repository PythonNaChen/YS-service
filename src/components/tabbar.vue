<template>
    <div class="tab_wrap">
        <item title="主页" mark="home" @option="getValue" :sel="select">
            <img src="../assets/images/index_icon_active.png" alt="" slot="active">
            <img src="../assets/images/index_icon_normal.png" alt="" slot="normal">
        </item>
        <item title="咪嘛课堂" mark="mima_classroom" @option="getValue" :sel="select">
            <img src="../assets/images/mimaClassroom_icon_active.png" alt="" slot="active">
            <img src="../assets/images/mimaClassroom_icon_normal.png" alt="" slot="normal">
        </item>
        <item title="在线咨询" mark="online_consulting" @option="getValue" :sel="select">
            <img src="../assets/images/onlineConsulting_icon_active.png" alt="" slot="active">
            <img src="../assets/images/onlineConsulting_icon_normal.png" alt="" slot="normal">
        </item>
        <item title="我的" mark="mine" @option="getValue" :sel="select">
            <img src="../assets/images/mine_icon_active.png" alt="" slot="active">
            <img src="../assets/images/mine_icon_normal.png" alt="" slot="normal">
        </item>
    </div>
</template>

<script>
  import item from "./tabbarChild";

  export default {
    name: "tabbar",
    components: {
      item
    },
    data() {
      return {
      };
    },
    methods: {
      getValue(n) {
        // this.select = n;
      },
    },
    computed: {},
    props: ["select"]
  };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    ul, li {
        list-style: none
    }

    .tab_wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        background-color: #e0e1e3;
        display: flex;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 5px 0 3px;
        border-top: 1px solid #b0b0b2;
        color: #999999;
    }

    .tab_wrap li {
        float: left;
        text-align: center;
        font-size: 12px;
        width: 25%;
    }

    .tab_wrap img {
        width: 30px;
        height: 30px;
    }

    .red {
        color: #de5844;
    }
</style>