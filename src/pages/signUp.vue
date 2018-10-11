<template>
    <div id="tab">

        <!--标题-->
        <div class="title">订单列表
            <!--返回上一页-->
            <div class="goBack" @click="goBack()">
                <img src="../assets/images/goBack.png" alt="">
            </div>
        </div>
        <!--内容-->
        <div id="tab_content">
            <div class="dom" style="display:block">
                <div class="item doing" v-for="(item, index) in allData" :key="index">
                    <div class="title2">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/orderList_icon_03.png" alt="">
                        <span v-if="item.status === 0">待安排</span>
                        <span v-if="item.status === 1">执行中</span>
                        <span v-if="item.status === 11">执行中</span>
                        <span v-if="item.status === 2">休息中</span>
                        <span v-if="item.status === 207">申请休息</span>
                        <span v-if="item.status === 2077">申请回岗</span>
                        <span v-if="item.status === 3">已结束</span>
                        <span v-if="item.status === 4">挂单中</span>
                        <span v-if="item.status === 5">退款中</span>
                        <span v-if="item.status === 6">等待用户确认</span>
                        <span v-if="item.status === 20">退单退款</span>
                        <span v-if="item.status === 2099">退单申请中</span>
                        <span v-if="item.status === 3099">下单等待用户确认</span>
                        <span v-if="item.status === 20999">退单结束等待用户确认</span>
                        <span v-if="item.status === 21">正常结束(退)</span>
                        <span v-if="item.status === 22">正常结束</span>
                        <span v-if="item.status === 16">协助派工中</span>
                        <span v-if="item.status === 31">已结束(评价完成)</span>
                        <span v-if="item.status === 201">已退单(评价完成)</span>
                        <span v-if="item.status === 211">已结束(退,评价完成)</span>
                        <span v-if="item.status === 221">已结束(评价完成)</span>
                        <span v-if="item.status === 2011">已退单(评价完成-已退款)</span>
                        <span v-if="item.status === 2111">已结束(退,评价完成-已退款)</span>
                    </div>
                    <div class="cont">
                        <div class="img_box" v-if="item.tx !== '' && item.tx !== undefined && item.tx !== null"
                             @click="go_logs_record(item.id, item.yname)">
                            <img :src="'https://www.360myhl.com/meixinJF/img/' + item.tx" alt="">
                        </div>
                        <div class="img_box" v-else @click="go_logs_record(item.id, item.name)">
                            <img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">
                        </div>
                        <div class="desc">
                            <div class="word" style="background-color: #fef0f0;">
                                <span class="job" v-if="item.typs === 1">月嫂</span>
                                <span class="job" v-if="item.typs === 2">育儿嫂</span>
                                <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/zhuanjia.png" alt="">-->
                                <span class="level">{{item.JBID}}</span>
                                <span class="edit-number">编号：{{item.yid}}</span>
                            </div>
                            <p>护理员姓名：{{item.yname}}</p>
                            <p style="overflow: hidden">服务地址：{{item.address}}</p>
                            <p>到岗时间：{{item.startDate}}</p>
                            <p>联系电话：{{item.yphone}}</p>
                        </div>
                    </div>
                    <div class="salary_total" v-if="item.typs === 1">共计金额：￥<span>{{item.class_price}}</span>/26天
                    </div>
                    <div class="salary_total" v-if="item.typs === 2">共计金额：￥<span>{{item.class_price_yu}}</span>/26天
                    </div>
                    <div class="bott">
                        <span v-if="item.status === 6" @click="sureTime(item.id,item.Dstime)">确认到岗</span>
                        <span v-if="item.status === 3099" @click="li(item.id,item.Detime,4)">确认离岗</span>
                        <span v-if="item.status === 20999" @click="li(item.id,item.Detime,20)">确认离岗</span>


                        <span v-if="item.status === 207" @click="rest(item.id,item.disID,2,'同意休息')">同意休息</span>
                        <span v-if="item.status === 2077" @click="rest(item.id,item.disID,1,'同意回岗')">同意回岗</span>

                        <!--<span v-if="item.status === 1">立即支付</span>-->
                        <span
                                v-if="item.status === 3 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22"
                        >点评</span>
                        <span v-if="item.status === 0 || item.status === 1 || item.status === 4 || item.status === 6 "
                              @click="orderTD(item.id,item.disID)">退单申请</span>
                        <!--<span v-if="item.status === 0 || item.status === 1 || item.status === 2 || item.status === 3 || item.status === 4 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22 || item.status === 16 || item.status === 31 || item.status === 201 || item.status === 211 || item.status === 221 || item.status === 2011 || item.status === 2111">再次续单</span>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        allData: null,
        isDialog: false
      };
    },
    methods: {
      //返回上一页
      goBack() {
        this.$router.go(-1);
      },
      $(id) {
        return typeof id === "string" ? document.getElementById(id) : null;
      },
      getTab(status) {
        let activeStatus = status;
        if (activeStatus) {
          let all_li = this.$("tab_header").getElementsByTagName("li");
          // 先清除所有样式
          for (let j = 0; j < all_li.length; j++) {
            all_li[j].className = "";
          }
          // 当前的添加激活样式
          let thisLi = this.$("tab_header").getElementsByTagName("li")[activeStatus];
          thisLi.className += " selected";
        }
      },

      // 确认到岗、退单申请
      sureTime(orderid, Dstime) {
        this.$createDialog({
          type: "confirm",
          content: `确认${Dstime}护理员到岗`,
          confirmBtn: {
            text: "确定",
            active: true,
            disabled: false,
            href: "javascript:;"
          },
          cancelBtn: {
            text: "取消",
            active: false,
            disabled: false,
            href: "javascript:;"
          },
          onConfirm: () => {
            let data = axios.get(
              "/meixinJF/xcx/USgoHome",
              {
                params: {
                  orderid: orderid,
                  start_time: Dstime
                }
              }
            );
          },
          onCancel: () => {
            console.log("用户点击了取消按钮");
          }
        }).show();
      },

      //确认离岗
      li(item, Detime, id) {
        this.$createDialog({
          type: "confirm",
          title: "确认离岗",
          content: `确认${item}护理员离开`,
          confirmBtn: {
            text: "确定",
            active: true,
            disabled: false,
            href: "javascript:;"
          },
          cancelBtn: {
            text: "取消",
            active: false,
            disabled: false,
            href: "javascript:;"
          },
          onConfirm: () => {
            let data = axios.get(
              "/meixinJF/xcx/liOrder2",
              {
                params: {
                  orderid: item,
                  id: id
                }
              }
            );
          },
          onCancel: () => {
            console.log("用户点击了取消按钮");
          }
        }).show();
      },

      // 确认休息 的弹框
      rest(orderid, disID, type, str) {
        this.$createDialog({
          type: "confirm",
          title: str,
          content: `确认护理员${str}`,
          confirmBtn: {
            text: "确定",
            active: true,
            disabled: false,
            href: "javascript:;"
          },
          cancelBtn: {
            text: "取消",
            active: false,
            disabled: false,
            href: "javascript:;"
          },
          onConfirm: () => {
            let data = axios.get(
              "/meixinJF/xcx/restA",
              {
                params: {
                  orderid: orderid,
                  disID: disID,
                  type: type
                }
              }
            );
          },
          onCancel: () => {
            console.log("用户点击了取消按钮");
          }
        }).show();
      },

      // 退单申请
      orderTD(orderid, disID) {
        this.$createDialog({
          type: "confirm",
          content: `确认${disID}退单`,
          confirmBtn: {
            text: "确定",
            active: true,
            disabled: false,
            href: "javascript:;"
          },
          cancelBtn: {
            text: "取消",
            active: false,
            disabled: false,
            href: "javascript:;"
          },
          onConfirm: () => {
            let data = axios.get(
              "/meixinJF/xcx/UsTD",
              {
                params: {
                  orderid: orderid,
                  disID: disID
                }
              }
            );
          },
          onCancel: () => {
            console.log("用户点击了取消按钮");
          }
        }).show();
      },

      // 获取列表信息
      async getListInfo() {
        let queryId = localStorage.getItem("queryId");
        let data = await axios.get(
          "/meixinJF/xcx/orderQuTel",
          {
            params: {
              id: this.$route.query.id,
              status: this.$route.query.status
            }
          }
        );
        if (data) {
          this.allData = data.data;
          console.log("allData", this.allData);
        }
      },
      // 跳转到日志记录页面
      go_logs_record(id, name) {
        sessionStorage.setItem("id", id);
        this.$router.push({
          path: "/logs_record?name=" + name
        });
      },
      // 点击获取各自的列表信息
      async getEachList(status) {
        let all_li = this.$("tab_header").getElementsByTagName("li");
        // 先清除所有样式
        for (let j = 0; j < all_li.length; j++) {
          all_li[j].className = "";
        }
        // 当前的添加激活样式
        let thisLi = this.$("tab_header").getElementsByTagName("li")[status];
        thisLi.className += " selected";
        let data = await axios.get(
          "/meixinJF/xcx/orderQuTel",
          {
            params: {
              id: this.$route.query.id,
              status: status
            }
          }
        );
        if (data) {
          this.allData = data.data;
          console.log("allData", this.allData);
        }
      }
    },
    created() {
      this.getListInfo(); // 获取列表，参数从路由上获取
    },
    mounted() {
      // 获取路由参数的status，来表现 tab 的激活样式
      let routeStatus = Number(this.$route.query.status);

      this.getTab(routeStatus);
    }
  };
</script>

<style scoped lang="less">
    /* 弹框 */
    .timeDialog {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        border: 1px solid #000;
        position: fixed;
        top: 35%;
        left: 10%;
        background-color: #fff;
        h4 {
            height: 50px;
            line-height: 50px;
            font-size: 16px;
        }
        & > div {
            display: flex;
            justify-content: space-evenly;
            span {
                background-color: #ea5432;
                color: #ffffff;
                font-weight: bold;
                padding: 10px 20px;
                margin: 10px 20px 20px;
                border-radius: 7px;
            }
        }
    }

    /*返回上一页*/
    .goBack {
        position: absolute;
        top: 10%;
        left: 2%;
        z-index: 1;
        width: 0.35rem;
        height: 0.35rem;
    }

    .goBack img {
        width: 20px;
        height: 20px;
    }

    #tab {
        .selected {
            border-bottom: 2px solid #e2584a;
        }
        /* 标题 */
        .title {
            font-size: 0.3rem;
            color: #111;
            text-align: center;
            font-weight: 600;
            height: 1.28rem;
            line-height: 1.28rem;
            position: relative;
            /*返回上一页*/
            .goBack {
                position: absolute;
                top: 10%;
                left: 2%;
                z-index: 1;
                width: 5px;
                height: 5px;
                img {
                    width: 0.53rem;
                    height: 0.53rem;
                }
            }
        }
        /* 头部 */
        #tab_header ul {
            display: -webkit-box;
            overflow-x: scroll;
            overflow-y: hidden;
            border-bottom: 0.15rem solid #F6F6F6;
            li {
                height: 0.63rem;
                line-height: 0.63rem;
                padding: 0 0.3rem;
                margin: 0 0.6rem;
                font-size: 0.3rem;
            }
        }
        /* 内容 */
        #tab_content {
            .doing {
                background-color: #fff;
                border-bottom: 0.09rem solid #f1f2f6;
                .title2 {
                    height: 0.55rem;
                    line-height: 0.55rem;
                    color: #ea5a43;
                    padding-left: 0.75rem;
                    font-size: 0.3rem;
                    img {
                        width: 0.43rem;
                        height: 0.4rem;
                        vertical-align: middle;
                    }
                }
                .cont {
                    display: flex;
                    padding: 0.2rem 0.54rem 0.15rem 0.9rem;
                    background-color: #fef0f0;
                    box-sizing: border-box;
                    img {
                        width: 2.28rem;
                        height: 2.28rem;
                        margin-right: 0.3rem;
                    }
                    .desc {
                        font-size: 0.24rem;
                        .word {
                            background-color: #fef0f0;
                            padding-bottom: 0.28rem;
                            display: flex;
                            align-items: center;
                            .edit-number {
                                float: right;
                            }
                            .level {
                                color: #fff;
                                background-color: #ff0000;
                                padding: 0.05rem 0.2rem;
                                border-radius: 0.2rem;
                                font-size: 0.24rem;
                                margin: 0 0.1rem;
                                font-weight: bold;
                            }
                            .job {
                                font-weight: bold;
                                font-size: 0.3rem;
                            }
                        }
                        p {
                            height: 0.35rem;
                            line-height: 0.35rem;
                            font-size: 0.24rem;
                        }
                    }
                }
                .salary_total {
                    font-size: 0.25rem;
                    text-align: right;
                    height: 0.57rem;
                    line-height: 0.57rem;
                    display: flex;
                    justify-content: flex-end;
                    margin-right: 0.6rem;
                    span {
                        font-weight: bold;
                    }
                }
                .bott {
                    text-align: right;
                    font-size: 0.29rem;
                    color: #505050;
                    padding: 0.2rem 0.6rem 0.4rem 0;
                    span {
                        padding: 0.12rem 0.16rem;
                        border: 0.05rem solid #d2d2d2;
                        border-radius: 0.2rem;
                        margin-left: 0.18rem;
                    }
                }
            }
        }
    }

    /* 占位 */
    .box {
        height: 50px;
        width: 100%;
    }
</style>
