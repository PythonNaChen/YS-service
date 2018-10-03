<template>
  <div class="page">
    <div class="logo">
      <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" class="logo">
    </div>
    <div class="info">
      <div class="phone">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/phone_03.png" alt="">
        <input type="text" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="手机号" maxlength="11"
               v-model="customermobile ">
      </div>
      <div class="code">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/code_07.png" alt="">
        <input type="text" placeholder="输入验证码" v-model="pwd" maxlength="6">
        <span @click="changeCode()">{{notice}}</span>
      </div>
      <span class="loginBtn" @click="loginValidate()">登录</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "index",
    watch: {
      "pwd": function () {
        if (this.customermobile) {
          if (this.pwd.length === 6) {
          }
        }
      },
      "notice": function () {
        let that = this;
        if (this.notice === '已发送') {
          setTimeout(function () {
            that.notice = '发送验证码'
          }, 20000);
        }
      }
    },
    data() {
      return {
        customermobile: null,
        pwd: null,
        notice: '发送验证码',
      };
    },

    methods: {
      // 发送短信验证
      async changeCode() {
        // 手机号长度不够就不触发 短息验证码
        if (this.customermobile.length < 11) return false
        let res = await axios.get(
          "/meixinJF/xcx/yzmYA",
          {
            params: {
              customermobile: this.customermobile
            }
          }
        );
        if (res) {
          console.log("发送短信验证", res);
          this.notice = '已发送'
        }
      },

      // 当验证码输入6 位长度后交给后台验证成功就跳转
      async loginValidate() {
        let res = await axios.get(
          "/meixinJF/xcx/startPhone2",
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
        if (res && res.data !== 2) {
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
          const toast = this.$createToast({
            txt: "登录失败，请检查重试",
            type: 'error'
          })
          toast.show()
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

  .info {
    position: relative;
  }

  .logo {
    width: 70%;
    height: 3.7rem;
    margin: 0 auto 3rem;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  .phone, .code {
    display: flex;
    font-size: 0.5rem;
    color: #aaaaaa;
    width: 80%;
    margin: 1rem auto 0;
    border-bottom: 2px solid #ea5944;
    padding: 0.4rem 0;
  }

  .phone img, .code img {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    margin-right: 0.8rem;
  }

  .code input {
    width: 48%;
  }

  .code span {
    border: 0.05rem solid #ea5944;
    font-size: 0.3rem;
    border-radius: 0.3rem;
    padding: 0.1rem 0.2rem;
    color: #ea5944;
    height: auto;
    line-height: 0.8rem;
    float: right;
  }

  .loginBtn {
    font-size: 0.4rem;
    color: #fff;
    padding: 0.3rem 1rem;
    background-color: #ea5a43;
    border-radius: 0.3rem;
    position: absolute;
    left: 39%;
    bottom: -40%;
  }
</style>
