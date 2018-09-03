<template>
    <div class="page">
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
        <div class="manager">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_03.png" alt="">
            <span class="lab1">客户经理：</span>
            <span class="lab2" v-if="YNAME === null">暂无</span>
            <span class="lab2" v-else>{{YNAME}}</span>
        </div>
        <div class="phone">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user_07.png" alt="">
            <span class="lab1">联系电话：</span>
            <span class="lab2" v-if="YPHONE === null">暂无</span>
            <span class="lab2" v-else>{{YPHONE}}</span>
        </div>
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
        <div class="order">
            <div class="title">订单列表</div>
            <div class="order_list" v-if="No_data === true" v-for="(item, index) in OrderData" :key="index">
                <div class="customer">
                    <span class="lable" v-if="item.typs===1">月嫂</span>
                    <span class="lable" v-if="item.typs===2">育儿嫂</span>
                    <span class="lable2">客户：{{item.customername}}</span>
                </div>
                <div class="time">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/time_icon_19.png" alt="">
                    <span class="lable2">服务时间：{{item.stime}} - {{item.etime}}</span>
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
            <div class="order_list" v-if="No_data === false">
                <span style="color: #ea5a43;">暂无数据...</span>
            </div>
        </div>
        <div class="menu-list">
            <div class="menu-list-item" @click="goSchedule">
                <img src="http://www.360myhl.com/meixinJF/MM/ximg/schedule.png" class="img1">
                <p>档期</p>
            </div>
            <div class="menu-list-item">
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
        OrderData: null, // 订单信息
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
          if (!data.data[0].phone) {
            this.$router.push({
              path: "/login"
            });
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
              res.data[i].stime = res.data[i].stime.slice(0, 10);
              res.data[i].etime = res.data[i].etime.slice(0, 10);
            }
            that.OrderData = res.data;
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

<style scoped>
    p, span, a {
        font-weight: normal;
    }

    .head {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 20px 0 0 40px;
        background-image: url("https://www.360myhl.com/meixinJF/MM/ximg/mine_BIMG.png");
        background-repeat: no-repeat;
        background-size: 100% 180px;
        height: 180px;
    }

    .head_box {
        font-size: 14px;
        color: #ffffff;
        display: flex;
        align-items: center;
    }

    .head_box .headIMG {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        border: 5px solid #ffffff;
    }

    .head_box .headIMG img {
        width: 100%;
        height: 100%;
    }

    .head_box .userInfo {
        margin-left: 15px;
    }

    .head_box .line_two {
        font-size: 16px;
    }

    .level {
        color: #fff;
        background-color: #ff0000;
        padding: 1px 3px;
        border-radius: 4px;
        font-size: 12px;
        margin: 0 5px;
    }

    .manager {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        background-color: #ffffff;
        border-bottom: 5px solid #f6f6f6;
    }

    .manager img {
        width: 15px;
        height: 15px;
        padding: 0 15px 0 20px;
    }

    .phone {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        background-color: #ffffff;
        border-bottom: 5px solid #f6f6f6;
    }

    .phone img {
        width: 15px;
        height: 15px;
        padding: 0 15px 0px 20px;
    }

    .manager_msg {
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 45px;
        display: flex;
        justify-content: space-between;
        background-color: #f6f6f6;
        border-bottom: 4px solid #F6F6F6;
    }

    .manager_msg .item {
        width: 49%;
        height: 45px;
        background-color: #ffffff;
        text-align: center;
        line-height: 45px;
    }

    .manager_msg .item img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    .manager_msg .item span {
        font-size: 14px;
    }

    /*订单列表*/
    .order {
        border-bottom: 1px solid #f6f6f6;
        background-color: #ffffff;
    }

    .order .title {
        border-top: 5px solid #f6f6f6;;
        font-size: 14px;
        border-bottom: 1px solid #ededef;
        padding-left: 20px;
    }

    .order .order_list {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 20px 10px 20px;
        font-size: 14px;
        position: relative;
        border-bottom: 1px solid #ffffff;
    }

    .order .order_list img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
    }

    .order .order_list .customer {
        height: 30px;
        line-height: 30px;
    }

    .order .order_list .customer .lable {
        font-size: 12px;
        padding: 0 3px;
        color: #ffffff;
        background-color: #ea5a43;
        margin-right: 5px;
        border-radius: 4px;
    }

    .order .order_list .time {
        height: 30px;
        line-height: 30px;
    }

    .order .order_list .state {
        height: 30px;
        line-height: 30px;
    }

    .order .order_list .rightTo {
        position: absolute;
        right: 0;
        top: 35%;
    }

    /*菜单列表*/
    .menu-list {
        font-size: 14px;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        background: #fff;
        box-sizing: border-box;
        text-align: center;
        justify-content: space-around;
        border-bottom: 6px solid #eaeaea;
    }

    .menu-list img {
        width: 35px;
        height: 35px;
    }

    .menu-list .menu-list-item p {
        line-height: 25px;
        height: 25px;
    }

</style>