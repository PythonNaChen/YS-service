<template>
  <div>
    <button class="enterSession" open-type="contact" session-from="weapp">进入客服会话</button>

    <button class="call" type="default" @click="calling">拨打电话</button>

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
      },
      calling: function () {
        wx.makePhoneCall({
            phoneNumber: '4000360028',
            success: function () {
              console.log("拨打电话成功！")
            },
            fail: function () {
              console.log("拨打电话失败！")
            }
          }
        )
      }
    },
    created() {
      this.getPath();
    }
  };
</script>

<style scoped>
  .enterSession {
    width: 60%;
    margin: 30px auto 0;
    color: #fff;
    text-align: center;
    font-size: 16px;
    border-radius: 7px;
    padding: 10px 0;
    background-color: #ea5a43;
  }

  .call {
    width: 60%;
    margin: 30px auto 0;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    border-radius: 7px;
    padding: 10px 0;
    background-color: green;
  }

  button {
    outline: none;
    border: none;
  }
</style>
