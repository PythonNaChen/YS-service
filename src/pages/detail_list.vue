<template>
  <div class="mother-detail" style="font-weight: 800;">
    <div class="top">
      <div class="goBack" @click="goBack()">
        <img src="../assets/images/goBack.png" alt="">
      </div>
      <div class="companyLogo">
        <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" alt="" class="logo">
      </div>
    </div>
    <ul class="info-list">
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_03.png" class="img-1">
          <span>订单类型</span>
        </div>
        <div class="li-right" v-if="data.typs === 1">
          {{data.JBID}}月嫂
        </div>
        <div class="li-right" v-if="data.typs === 2">
          {{data.JBID}}育儿嫂
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_06.png" class="img-2">
          <span>到手工资</span>
        </div>
        <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 1">
          {{data.att_yue_price}}
        </div>
        <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 2">
          {{data.att_yu_price}}
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_08.png" class="img-3">
          <span v-if="data.typs === 1">预产期</span>
          <span v-if="data.typs === 2">到岗试用期</span>
        </div>
        <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 1">
          {{data.expecteddate}}
        </div>
        <div class="li-right" style="color: #ec6f5b;" v-if="data.typs === 2">
                    <span v-if="data.startDate === '' || data.startDate === null">上班时间：<span
                      style="color: red">立即到岗</span></span>
          <span v-if="data.startDate">上班时间：{{data.startDate}}</span>
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
          <span>服务时长</span>
        </div>
        <div class="li-right">
          {{data.days}}天
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
          <span>服务地址</span>
        </div>
        <div class="li-right">
          {{data.address}}
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
          <span>年龄要求</span>
        </div>
        <div class="li-right">
          {{data.yearYQ}}
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
          <span>证件要求</span>
        </div>
        <div class="li-right">
          {{data.zjYQ}}
        </div>
      </li>
      <li>
        <div class="li-left">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/mother_icon_10.png" class="img-4">
          <span>具体要求</span>
        </div>
        <div class="desc">
          {{data.jtYQ}}
        </div>
      </li>
    </ul>
    <div class="submit" @click="signUp()">报 名</div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "index",
    data() {
      return {
        openid: "",
        orderid: "",
        data: null
      };
    },
    methods: {
      // 返回上一页
      goBack() {
        this.$router.go(-1);
      },
      async getDetailList() {
        let res = await axios.get(
          "/meixinJF/xcx/queryOrder",
          {
            params: {
              orderid: this.$route.query.orderid
            }
          }
        );
        if (res) {
          this.data = res.data;
        }
      },
      async signUp() {
        let res = await axios.get(
          "/meixinJF/xcx/GXin",
          {
            params: {
              xid: this.$route.query.orderid,
              openid: localStorage.getItem("queryId")
            }
          }
        );
        if (res) {
          switch (res.data) {
            case 1:
              this.$createToast({
                txt: "恭喜您已经报名成功",
                type: "correct"
              }).show();
              setTimeout(() => {
                this.$router.push("/home");
              }, 3000);
              break;
            case 0:
              this.$createToast({
                txt: "报名失败！请稍后重试",
                type: "error"
              }).show();
              break;
            case 99:
              this.$createToast({
                txt: "您已经报过名了！",
                type: "warn"
              }).show();
              setTimeout(() => {
                this.$router.push("/home");
              }, 3000);
              break;
          }
        }
      }
    },
    created() {
      this.getDetailList();
    }
  };
</script>

<style scoped lang="less">
  .mother-detail {
    height: 100vh;
    background-color: #f6f6f6;
    img {
      width: 0.45rem;
      height: 0.45rem;
      vertical-align: middle;
    }
    .top {
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      .goBack {
        img {
          width: 0.6rem;
          height: 0.6rem;
          margin-left: 0.3rem;
        }
      }
      .companyLogo {
        width: 3.37rem;
        height: 1.67rem;
        margin: 0 auto;
        .logo {
          width: 100%;
          height: 100%;
          margin-left: -0.6rem;
        }
      }
    }
  }

  .mother-detail .info-list {
    background-color: #fff;
    padding-bottom: 50px;
  }

  .mother-detail .info-list li {
    height: 1.1rem;
    line-height: 1.1rem;
    display: flex;
    align-datas: center;
    border-bottom: 1px solid #8f8e8e;
    padding: 0 20px;
    justify-content: space-between;
    font-size: 0.38rem;
  }

  .mother-detail .info-list li .li-right {
    color: #797979;
  }

  .mother-detail .info-list li:last-child {
    border: none;
    display: inline-block;
  }

  .desc {
    font-size: 0.37rem;
    margin-left: 24px;
    color: #787878;
    margin-top: -10px
  }

  .submit {
    position: fixed;
    bottom: 9%;
    left: 10%;
    width: 80%;
    background-color: #ef6f5b;
    color: #ffffff;
    font-weight: normal;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.38rem;
    border-radius: 0.2rem;
  }
</style>
