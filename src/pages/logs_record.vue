<template>
  <div class="page">
    <!--返回上一页-->
    <div class="goBack" @click="goBack()">
      <img src="../assets/images/goBack.png" alt="">
    </div>
    <br>
    <br>
    <p>宝宝护理</p>
    <div class="baby_nurse">
      <div class="nurse_item" v-for="(item, index) in baby_nurse_list" :key="index">
        <img :src="item.imgSrc" alt="" @click="goBabyDetail(item)">
      </div>
    </div>
    <p>妈妈护理</p>
    <div class="mm_nurse" >
      <div class="nurse_item" v-for="(item, index) in mm_nurse_list" :key="index">
        <img :src="item.imgSrc" alt="" @click="goMotherDetail(item)">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "logs_record",
    data() {
      return {
        baby_nurse_list: [
          {index: 0, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_1.png"},
          {index: 1, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_2.png"},
          {index: 2, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_3.png"},
          {index: 3, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_4.png"},
          {index: 4, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_5.png"},
          {index: 5, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_6.png"},
          {index: 6, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_7.png"},
          {index: 7, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_8.png"},
          {index: 8, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_9.png"},
          {index: 9, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_10.png"},
          {index: 10, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_11.png"},
          {index: 11, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_12.png"},
          {index: 12, imgSrc: "https://www.360myhl.com/meixinJF/static/images/b_2_13.png"}
        ],
        mm_nurse_list: [
          {index: 0, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_1.png"},
          {index: 1, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_2.png"},
          {index: 2, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_3.png"},
          {index: 3, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_4.png"},
          {index: 4, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_5.png"},
          {index: 5, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_6.png"},
          {index: 6, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_7.png"},
          {index: 7, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_8.png"},
          {index: 8, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_9.png"},
          {index: 9, imgSrc: "https://www.360myhl.com/meixinJF/static/images/m_2_10.png"}
        ],
        orderid: "",
        yname: ""
      };
    },
    methods: {
      //返回上一页
      goBack() {
        this.$router.go(-1);
      },
      async goBabyDetail(options) {
        let that = this;
        let suffix;
        switch (options.index) {
          case 0:
            suffix = "Rbabytw"; // 宝宝体温
            break;
          case 1:
            suffix = "Rbabycl"; // 身长、体重、头围（周）
            break;
          case 2:
            suffix = "Rbabyqm"; // 早教启蒙
            break;
          case 3:
            suffix = "Rbabyqd"; // 脐带护理
            break;
          case 4:
            suffix = "Rbabyhd"; // 黄疸观察
            break;
          case 5:
            suffix = "Rbabywy"; // 喂养记录
            break;
          case 6:
            suffix = "Rbabymy"; // 沐浴
            break;
          case 7:
            suffix = "Rbabypf"; // 皮肤观察
            break;
          case 8:
            suffix = "Rbabydb"; // 大便观察
            break;
          case 9:
            suffix = "Rbabyxb"; // 小便观察
            break;
          case 10:
            suffix = "Rbabysm"; // 睡眠观察
            break;
          case 11:
            suffix = "Rbabyhx"; // 呼吸观察
            break;
          case 12:
            suffix = "Rbabynj"; // 奶具消毒
            break;
        }
        let data = await axios.get(
          "/meixinJF/xcx/" + suffix,
          {
            params: {
              orderid: that.orderid
            }
          },
        );
        // 点击图标进行订单号的验证 对应图标 的数据表单填写
        if (data) {
          // 跳转到表单填写页面
          this.$router.push({
            path: "/dataDetail?index=" + "b" + options.index + "&orderid=" + that.orderid + '&yname=' + that.yname,
          });
        }
      },
      async goMotherDetail(options) {
        let that = this;
        let suffix;
        switch (options.index) {
          case 0:
            suffix = "Rbabytw"; // 宝宝体温
            break;
          case 1:
            suffix = "Rbabycl"; // 身长、体重、头围（周）
            break;
          case 2:
            suffix = "Rbabyqm"; // 早教启蒙
            break;
          case 3:
            suffix = "Rbabyqd"; // 脐带护理
            break;
          case 4:
            suffix = "Rbabyhd"; // 黄疸观察
            break;
          case 5:
            suffix = "Rbabywy"; // 喂养记录
            break;
          case 6:
            suffix = "Rbabymy"; // 沐浴
            break;
          case 7:
            suffix = "Rbabypf"; // 皮肤观察
            break;
          case 8:
            suffix = "Rbabydb"; // 大便观察
            break;
          case 9:
            suffix = "Rbabyxb"; // 小便观察
            break;
          case 10:
            suffix = "Rbabysm"; // 睡眠观察
            break;
          case 11:
            suffix = "Rbabyhx"; // 呼吸观察
            break;
          case 12:
            suffix = "Rbabynj"; // 奶具消毒
            break;
        }
        let data = await axios.get(
          "/meixinJF/xcx/" + suffix,
          {
            params: {
              orderid: that.orderid
            }
          },
        );
        // 点击图标进行订单号的验证 对应图标 的数据表单填写
        if (data) {
          // 跳转到表单填写页面
          this.$router.push({
            path: "/dataDetail?index=" + "m" + options.index + "&orderid=" + that.orderid + '&yname=' + that.yname,
          });
        }
      }
    },
    created() {
      this.orderid = sessionStorage.getItem("id")
      this.yname = this.$route.query.name
    }
  };
</script>

<style scoped lang="less">
  .goBack {
    position: absolute;
    top: 0.9%;
    left: 2%;
    width: 0.53rem;
    height: 0.53rem;
  }

  .goBack img {
    width: 100%;
    height: 100%;
  }

  .page {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #f6f6f6;
    position: relative;
  }

  .page .baby_nurse, .mm_nurse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 0.3rem;
  }

  .page .mm_nurse{
    padding-bottom: 1.5rem;
  }

  .page .baby_nurse {
    margin: 10px 0;
  }

  .page .nurse_item {
    width: 2.08rem;
    height: 2.08rem;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .page .nurse_item img {
    width: 100%;
    height: 100%;
  }

  .page p {
    font-size: 0.4rem;
    color: #e73900;
    font-weight: 800;
    margin-left: 0.4rem;
        height: 0.65rem;
    line-height: 0.65rem;
  }
</style>
