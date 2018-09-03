<template>
    <div class="page">
        <div class="logo">
            <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" class="logo">
        </div>
        <div class="info">
            <div class="phone">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/phone_03.png" alt="">
                <input type="text" placeholder="手机号" maxlength="11" v-model="customermobile ">
            </div>
            <div class="code">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/code_07.png" alt="">
                <input type="text" placeholder="输入验证码" v-model="pwd" maxlength="6">
                <span v-if="!bool" @click="changeCode()">
                    点击发送验证码
                </span>
                <span v-if="bool">
                    已发送，注意查收
                </span>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "index",
    watch: {
      "pwd": function() {
        if (this.customermobile) {
          if (this.pwd.length === 6) {
            this.loginValidate();
          }
        }
      },
      "bool": function(v) {
        let that = this;
        if (this.bool === true) {
          setTimeout(function() {
            console.log(that.bool = !v);
          }, 20000);
        }
      }
    },
    data() {
      return {
        customermobile: null,
        pwd: null,
        bool: false
      };
    },

    methods: {
      // 发送短信验证
      async changeCode() {
        let res = await axios.get(
          "/meixinJF/xcx/yzmTel",
          {
            params: {
              customermobile: this.customermobile
            }
          }
        );
        if (res) {
          console.log("发送短信验证", res);
        }
      },
      // 当验证码输入6 位长度后交给后台验证成功就跳转
      async loginValidate() {
        let res = await axios.get(
          "/meixinJF/xcx/start2",
          {
            params: {
              customermobile: this.customermobile,
              pwd: this.pwd
            }
          },
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          }
        );
        if (res) {
          if (res.data !== 2) {
            localStorage.setItem('queryId', res.data[0].id.toString())
            this.$router.push({
              path: "/home",
              query: {}
            });
          } else {
            this.$router.push({
              path: "/login",
              query: {}
            });
          }
        }
      }
    }
  };
</script>

<style scoped>
    .page {
        background-image: url(http://www.360myhl.com/meixinJF/MM/ximg/login_BGI.jpg);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        height: 100vh;
    }

    input {
        border: none;
        outline: none;
        color: #757575;
        background-color: #f8f8f8;
    }

    .logo {
        width: 70%;
        height: 140px;
        margin: 0 auto 105px;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .phone, .code {
        display: flex;
        font-size: 16px;
        color: #aaaaaa;
        width: 80%;
        margin: 40px auto 0;
        border-bottom: 2px solid #ea5944;
        padding: 15px 0;
    }

    .phone img, .code img {
        vertical-align: middle;
        width: 34px;
        height: 34px;
        margin-right: 20px;
    }

    .code input {
        width: 48%;
    }

    .code span {
        border: 2px solid #ea5944;
        font-size: 12px;
        border-radius: 7px;
        padding: 3px 5px;
        color: #ea5944;
        height: auto;
        line-height: 25px;
    }
</style>