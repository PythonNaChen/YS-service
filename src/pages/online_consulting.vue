<template>
    <div style="text-align: center;margin-top: 20%;">
        <a href="https://det.zoosnet.net/lr/chatpre.aspx?id=det55046512&lng=cn">
            <button class="enterSession" open-type="contact" session-from="weapp">进入客服会话</button>
        </a>

        <a href="tel:4000-360-028">
            <button class="call" type="default">拨打电话</button>
        </a>

        <tab-bar select="online_consulting"></tab-bar>
    </div>
</template>

<script>
  import tabBar from "../components/tabbar";

  export default {
    name: "online_consulting",
    components: {
      tabBar
    },
    data() {
      return {
      };
    },
    methods: {
    },
    created(){
    }
  };
</script>

<style scoped>
    .enterSession {
        width: 60%;
        margin: 0.6rem auto 0;
        color: #fff;
        text-align: center;
        font-size: 0.5rem;
        border-radius: 7px;
        padding: 0.3rem 0;
        background-color: #ea5a43;
    }

    .call {
        width: 60%;
        margin: 0.6rem auto 0;
        color: #ffffff;
        text-align: center;
        font-size: 0.5rem;
        border-radius: 7px;
        padding: 0.3rem 0;
        background-color: green;
    }

    button {
        outline: none;
        border: none;
    }
</style>
