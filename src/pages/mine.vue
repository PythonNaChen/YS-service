<template>
  <div class="page">
    <!--头部信息-->
    <div class="head">
      <div class="head_box">
        <div class="headIMG">
          <img v-if="photo" :src="photo" alt="">
          <img v-else src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">
        </div>
        <div class="userInfo">
          <p class="line_one" v-if="pcname === null">未设置<span class="level" v-if="className">{{className}}</span></p>
          <p class="line_one" v-else>{{pcname}}<span class="level" v-if="className">{{className}}</span></p>
          <p class="line_two">{{phone}}</p>
        </div>
      </div>
    </div>
    <!--客户经理-->
    <div class="manager">
      <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_03.png" alt="">
      <span class="lab1">客户经理：</span>
      <span class="lab2" v-if="YNAME === null">暂无</span>
      <span class="lab2" v-else>{{YNAME}}</span>
    </div>
    <!--联系方式-->
    <div class="phone">
      <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_07.png" alt="">
      <span class="lab1">联系电话：</span>
      <span class="lab2" v-if="YPHONE === null">暂无</span>
      <span class="lab2" v-else>{{YPHONE}}</span>
    </div>
    <!--钱包&消息-->
    <!--<div class="manager_msg">-->
    <!--<div class="item">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user_14.png" alt="">-->
    <!--<span>钱包</span>-->
    <!--</div>-->
    <!--<div class="item">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user_11.png" alt="">-->
    <!--<span>消息</span>-->
    <!--</div>-->
    <!--</div>-->

    <!--订单列表-->
    <div class="order">
      <div class="title">订单列表</div>
      <!-- 有数据 -->
      <div class="customer" v-if="No_data === true" v-for="(item, index) in OrderData" :key="index">
        <div class="order_list">
          <span class="lable" v-if="item.typs===1">月嫂</span>
          <span class="lable" v-if="item.typs===2">育儿嫂</span>
          <span class="lable2">客户：{{item.customername}}</span>
        </div>
        <div class="time">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/time_icon_19.png" alt="">
          <span class="lable2">服务时间：{{item.stimes}} - {{item.etimes}}</span>
        </div>
        <div class="state">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/state.png" alt="">
          <span class="lable2">订单状态：
                        <span style="color: #EA5A42;" v-if="item.status === 1">执行中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2">休息中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 3">已结束</span>
                        <span style="color: #EA5A42;" v-if="item.status === 4">挂单中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 5">退款中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 20">退单退款</span>
                        <span style="color: #EA5A42;" v-if="item.status === 21">正常结束(退)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 22">正常结束</span>
                        <span style="color: #EA5A42;" v-if="item.status === 16">协助派工中</span>
                        <span style="color: #EA5A42;" v-if="item.status === 31">已结束(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 201">已退单(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 211">已结束(退,评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 221">已结束(评价完成)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2011">已退单(评价完成-已退款)</span>
                        <span style="color: #EA5A42;" v-if="item.status === 2111">已结束(退,评价完成-已退款)</span>
                    </span>
        </div>
        <div class="rightTo" @click="go_logs_record(item.order_id, item.customername)"><img
          src="https://www.360myhl.com/meixinJF/MM/ximg/rightTo.png" alt=""></div>
      </div>
      <!-- 暂无数据 -->
      <div class="order_list" v-if="No_data === false">
        <span style="color: #ea5a43;">暂无数据...</span>
      </div>
    </div>

    <!--选项列表-->
    <div class="menu-list">
      <div class="menu-list-item" @click="goSchedule">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/schedule.png" class="img1">
        <p>档期</p>
      </div>
      <div class="menu-list-item" @click="goOrderList()">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/order.png" class="img2">
        <p>订单</p>
      </div>
      <div class="menu-list-item">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/signUp.png" class="img2">
        <p>报名</p>
      </div>
    </div>

    <tab-bar :select="this_path"></tab-bar>
  </div>
</template>

<script>
  import tabBar from "../components/tabbar";
  import axios from "axios";

  export default {
    name: "mine",
    data() {
      return {
        this_path: null, // 当前路由，用于修改 tabBar 样式
        data: null, // 用户信息
        OrderData: [], // 订单信息
        photo: "", // 用户头像
        YNAME: "",
        YPHONE: "",
        phone: "",
        pcname: "", // 用户姓名
        customermobile: "", // 用户手机号
        className: '', // 用户等级
        No_data: true // 为 false 时暂无数据
      };
    },
    components: {
      tabBar
    },
    methods: {
      // 获取 当前路由来 切换tabBar样式
      getPath() {
        this.this_path = this.$route.path.slice(1);
      },
      // 跳转到 预约 列表
      goOrderList() {
        this.$router.push({
          path: "/order_list?status=" + 0
        });
      },
      // 获取用户信息
      async getUserInfo() {
        let queryId = localStorage.getItem("queryId");
        if (queryId) {
          let data = await axios.get(
            "/meixinJF/xcx/queryId2",
            {
              params: {
                id: queryId
              }
            }
          );
          console.log(data);
          if (data.data[0].customermobile === '') {
            this.$router.push('/login');
          } else {
            console.log("mine-data:", data);
            this.photo = data.data[0].wxphoto;
            this.pcname = data.data[0].pcname;
            this.YPHONE = data.data[0].YPHONE;
            this.phone = data.data[0].phone;
            this.YNAME = data.data[0].YNAME;
            this.className = data.data[0].className;
            this.customermobile = data.data[0].customermobile;
          }
        }
      },
      //  获取订单列表
      async getOrderList() {
        let that = this
        let queryId = localStorage.getItem("queryId");
        if (queryId) {
          let res = await axios.get(
            "/meixinJF/xcx/hlyListOrderS",
            {
              params: {
                id: queryId
              }
            }
          );
          if (res) {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].stimes = res.data[i].stimes.split(' ')[0];
              res.data[i].etimes = res.data[i].etimes.split(' ')[0];
              that.OrderData.push(res.data[i]);
            }
            console.log('OrderData', that.OrderData)
            if (that.OrderData.length > 0) {
              that.No_data = true
            } else {
              that.No_data = false
            }
          }
        }
      },
      // 点击跳转到日志记录页面 /pages/logs_record/main
      go_logs_record(id, name) {
        sessionStorage.setItem("id", id);
        this.$router.push({
          path: "/logs_record?name=" + name,
        });
      },
      // 点击跳转到详情页
      goSchedule() {
        this.$router.push({
          path: "/collection",
          query: {
            id: localStorage.getItem("queryId")
          }
        });
      }
    },
    created() {
      this.getPath(); // 获取当前路由
      this.getUserInfo(); // 获取用户信息
      this.getOrderList(); // 获取订单列表
      console.log("id:", localStorage.getItem("queryId"));
      if (localStorage.getItem("queryId") === null) {
        this.$router.push({
          path: "/login"
        });
      }
    }
  };
</script>

<style scoped lang="less">
  .page {
    .head {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 1.24rem 0 0 1rem;
      background: url("https://www.360myhl.com/meixinJF/MM/ximg/mine_BIMG.png") no-repeat;
      background-size: 100% 6.3rem;
      height: 6.3rem;
      .head_box {
        color: #ffffff;
        display: flex;
        align-items: center;
        .headIMG {
          width: 2.68rem;
          height: 2.68rem;
          border-radius: 50%;
          overflow: hidden;
          text-align: center;
          border: 0.06rem solid #ffffff;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .userInfo {
          margin-left: 0.45rem;
          .line_one {
            font-size: 0.6rem;
            .level {
              color: #fff;
              background-color: #ff0000;
              padding: 0.01rem 0.03rem;
              border-radius: 4px;
              font-size: 0.24rem;
              margin: 0 5px;
            }
          }
          .line_two {
          }
        }
      }
    }
    .manager {
      font-size: 0.36rem;
      height: 0.97rem;
      line-height: 0.97rem;
      background-color: #ffffff;
      border-bottom: 0.08rem solid #f6f6f6;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 0.8rem;
      img {
        width: 0.45rem;
        height: 0.49rem;
      }
    }
    .phone {
      font-size: 0.36rem;
      height: 0.97rem;
      line-height: 0.97rem;
      background-color: #ffffff;
      border-bottom: 0.08rem solid #f6f6f6;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 0.8rem;
      img {
        width: 0.45rem;
        height: 0.49rem;
      }
    }
    .manager_msg {
      display: flex;
      justify-content: space-between;
      .item {
        width: 49.5%;
        height: 0.98rem;
        background-color: #ffffff;
        text-align: center;
        line-height: 0.98rem;
        img {
          width: 0.57rem;
          height: 0.48rem;
          vertical-align: middle;
        }
        span {
          font-size: 0.36rem;
        }
      }

    }
    /*订单列表*/
    .order {
      border-bottom: 1px solid #f6f6f6;
      background-color: #ffffff;
      .title {
        border-top: 0.08rem solid #f6f6f6;;
        font-size: 0.36rem;
        border-bottom: 1px solid #ededef;
        padding-left: 0.74rem;
        line-height: 0.68rem;
        height: 0.68rem;
      }
      .customer {
        .order_list {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 10px 20px 10px 20px;
          font-size: 14px;
          position: relative;
          border-bottom: 1px solid #ffffff;
        }
        img {
          width: 15px;
          height: 15px;
          vertical-align: middle;
        }
      }

    }
    /*菜单列表*/
    .menu-list {
      font-size: 0.36rem;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      background: #fff;
      box-sizing: border-box;
      text-align: center;
      justify-content: space-around;
      padding: 0.67rem 0;
      .menu-list-item {
        p {
          line-height: 0.6rem;
          height: 0.6rem;
        }
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
    }

  }

  .order .order_list .customer {
    height: 30px;
    line-height: 30px;
  }

  .order .customer .order_list .lable {
    font-size: 12px;
    padding: 0 3px;
    color: #ffffff;
    background-color: #ea5a43;
    margin-right: 5px;
    border-radius: 4px;
  }

  .order .time {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
  }

  .order .state {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .order .rightTo {
    position: absolute;
    right: 4%;
    top: 48%;
  }

</style>
