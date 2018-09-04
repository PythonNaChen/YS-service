<template>
    <div id="tab">

        <!--标题-->
        <div class="title">咪嘛课堂
            <!--返回上一页-->
            <div class="goBack" @click="goBack()">
                <img src="../assets/images/goBack.png" alt="">
            </div>
        </div>
        <!--头部-->
        <div id="tab_header">
            <ul>
                <li class="selected" @click="getEachList(0)">全部</li>
                <li @click="getEachList(1)">已预约</li>
                <li @click="getEachList(2)">执行中</li>
                <li @click="getEachList(3)">已结束</li>
                <li @click="getEachList(4)">已取消</li>
                <li @click="getEachList(5)">待支付</li>
            </ul>
        </div>
        <!--内容-->
        <div id="tab_content">
            <div class="dom" style="display:block">
                <div class="item doing" v-for="(item, index) in allData" :key="index">
                    <div class="title2">
                        <img src="http://www.360myhl.com/meixinJF/MM/ximg/orderList_icon_03.png" alt="">
                        <span v-if="item.status === 0">待安排</span>
                        <span v-if="item.status === 1">执行中</span>
                        <span v-if="item.status === 2">休息中</span>
                        <span v-if="item.status === 3">已结束</span>
                        <span v-if="item.status === 4">挂单中</span>
                        <span v-if="item.status === 5">退款中</span>
                        <span v-if="item.status === 20">退单退款</span>
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
                        <span v-if="item.status === 0 || item.status === 1">确认时间</span>
                        <span v-if="item.status === 1">立即支付</span>
                        <span v-if="item.status === 3 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22">点评</span>
                        <span v-if="item.status === 0 || item.status === 1 || item.status === 2 || item.status === 3 || item.status === 4 || item.status === 5 || item.status === 20 || item.status === 21 || item.status === 22 || item.status === 16 || item.status === 31 || item.status === 201 || item.status === 211 || item.status === 221 || item.status === 2011 || item.status === 2111">再次续单</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "mima_classroom",
    data() {
      return {
        allData: null
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
    computed: {},
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

<style scoped>
    p, a, span {
        font-weight: normal;
    }

    /*返回上一页*/
    .goBack {
        position: absolute;
        top: 10%;
        left: 2%;
        z-index: 1;
        width: 5px;
        height: 5px;
    }

    .goBack img {
        width: 20px;
        height: 20px;
    }

    /* 标题 */
    .title {
        font-size: 14px;
        color: #111;
        text-align: center;
        font-weight: 600;
        height: 50px;
        line-height: 50px;
        position: relative;
    }

    /* 头部 */
    #tab #tab_header ul {
        display: -webkit-box;
        overflow-x: scroll;
        overflow-y: hidden;
        border-bottom: 5px solid #F6F6F6;
    }

    #tab #tab_header ul li {
        height: 25px;
        line-height: 25px;
        padding: 0 15px;
        margin: 0 10px;
    }

    .selected {
        border-bottom: 2px solid #e2584a;
    }

    /* 内容 */
    #tab_content {
    }

    .doing {
        margin-bottom: 5px;
        background-color: #fff;
        margin-top: 5px;
    }

    .title2 {
        height: 25px;
        line-height: 25px;
        color: #ea5a43;
        padding-left: 20px;
        font-size: 14px;
    }

    .title2 img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
    }

    .cont {
        display: flex;
        padding: 10px 20px 2px;
        background-color: #fef0f0;
        box-sizing: border-box;
    }

    .cont img {
        width: 110px;
        height: 110px;
        margin-right: 15px;
    }

    .cont .desc {
        font-size: 12px;
    }

    .cont .desc .word {
        background-color: #fff;
        padding-bottom: 10px;
    }

    .cont .desc .word .edit-number {
        float: right;
    }

    .cont .desc .word .level {
        color: #fff;
        background-color: #ff0000;
        padding: 1px 3px;
        border-radius: 4px;
        font-size: 12px;
        margin: 0 5px;
    }

    .cont .desc .word .job {
        font-weight: bold;
        font-size: 14px;
    }

    .cont .desc p {
        height: 20px;
        line-height: 20px;
    }

    cont .desc .word {
        background-color: #fef0f0;
    }

    .cont .desc .word img {
        width: 40px;
        height: 16px;
        vertical-align: text-top;
        padding: 0 3px;
    }

    .doing .salary_total {
        font-size: 14px;
        text-align: right;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
    }

    .doing .salary_total span {
        font-weight: bold;
    }

    .doing .bott {
        text-align: right;
        font-size: 14px;
        color: #505050;
        margin-bottom: 7px;
        padding-bottom: 10px;
        margin-right: 20px;
    }

    .doing .bott span {
        padding: 1px 5px;
        border: 2px solid #d2d2d2;
        border-radius: 8px;
        margin-left: 10px;
    }

    /* 占位 */
    .box {
        height: 50px;
        width: 100%;
    }
</style>