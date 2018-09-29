<template>
    <div class="home">
        <!--头部-->
        <div class="header">
            <div class="city">
                <span>成都</span>
                <img src="https://www.360myhl.com/meixinJF/static/images/open.png">
            </div>
            <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/logo.jpg" class="logo">-->
          <img  class="logo" src="https://www.360myhl.com/meixinJF/img/companyLogo.png" alt="">
            <img src="https://www.360myhl.com/meixinJF/static/images/phone-icon.png" class="kefu">
        </div>
        <!--轮播图-->
        <div class="block">
            <el-carousel height="150px">
                <el-carousel-item v-for="item in imgUrls" :key="item">
                    <img :src="item" alt="" style="width: 100%;">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--分类-->
        <div class="classify">
            <div class="classify-item" @click="getEachInfo(2)">
                <img src="https://www.360myhl.com/meixinJF/static/images/yuesao1.png">
                <span>月嫂</span>
            </div>
            <div class="classify-item" @click="getEachInfo(1)">
                <img src="https://www.360myhl.com/meixinJF/static/images/baby-cart.png">
                <span>育儿嫂</span>
            </div>
        </div>
        <!--推荐订单标题-->
        <div class="recommend">
            <div class="Left">
                <p><img src="https://www.360myhl.com/meixinJF/static/images/order_icon.png" alt="">推荐订单</p>
            </div>
            <div class="Right">恭喜张姐抢到<span>¥8000</span>育儿嫂订单</div>
        </div>
        <!--推荐订单列表-->
        <div class="list">
            <h3>月嫂</h3>
            <div class="time">
                <div class="Left"><span>预产期：1997-03-23</span><span>  时长：26天</span>
                </div>
                <div class="price">13800元</div>
            </div>
            <div class="address">
                <div class="Left1" style="width: 200px; overflow: hidden">地 址：成都市武侯区环球中心S1</div>
                <div class="Right1">已有<span>52</span>位护理员报名</div>
            </div>
        </div>
        <div class="list">
            <h3>月嫂</h3>
            <div class="time">
                <div class="Left"><span>预产期：1997-03-23</span><span>  时长：26天</span>
                </div>
                <div class="price">13800元</div>
            </div>
            <div class="address">
                <div class="Left1" style="width: 200px; overflow: hidden">地 址：成都市武侯区环球中心S1</div>
                <div class="Right1">已有<span>52</span>位护理员报名</div>
            </div>
        </div>
        <div class="list">
            <h3>月嫂</h3>
            <div class="time">
                <div class="Left"><span>预产期：1997-03-23</span><span>  时长：26天</span>
                </div>
                <div class="price">13800元</div>
            </div>
            <div class="address">
                <div class="Left1" style="width: 200px; overflow: hidden">地 址：成都市武侯区环球中心S1</div>
                <div class="Right1">已有<span>52</span>位护理员报名</div>
            </div>
        </div>
        <!--<div class="order_list" v-if="No_data === true" style="display: flex;align-items: center">-->
            <!--<span style="color: #ea5a43; width: 100px;margin: 30px auto 0;">暂无数据...</span>-->
        <!--</div>-->
        <tab-bar :select="this_path"></tab-bar>
    </div>
</template>

<script>
  import tabBar from "../components/tabbar";

  export default {
    name: "home",
    components: {
      tabBar
    },
    data () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        imgUrls: [
          "https://www.360myhl.com/meixinJF/static/images/banner1.jpg",
          "https://www.360myhl.com/meixinJF/static/images/baby-awatar.jpg",
          "https://www.360myhl.com/meixinJF/static/images/awatar.jpg"
        ],
        openid: "",
        data: null,
        No_data: false
      }
    },
    methods: {
      getPath() {
        this.this_path = this.$route.path.slice(1);
      },
      // async getEachInfo(type){
      //   let data = await axios.get(
      //     "/meixinJF/xcx/gxIndex",
      //     {
      //       params: {
      //         id: this.$route.query.id,
      //         typs: type
      //       }
      //     }
      //   );
      // }
    },
    created() {
      this.getPath()
    }
  };
</script>

<style scoped>
    /* 头部 */
    .home .header {
        height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 10px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .home .header .city {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .home .header .city img {
        width: 10px;
        height: 10px;
    }

    .home .header .city span {
        font-size: 12px;
        color: #000;
        margin-right: 10px;
    }

    .home .header .logo {
        width: 120px;
        height: 60px;
    }

    .home .header .kefu {
        width: 20px;
        height: 20px;
    }

    /* 轮播图 */
    .banner .page__bd {
        width: 375px;
        height: 150px;
    }

    .banner .slide-image {
        width: 100%;
        height: 100%;
    }

    /* 分类 */
    .home .classify {
        position: relative;
        height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .home .classify-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 32px;
    }

    .home .classify-item img {
        width: 60px;
        height: 60px;
    }

    .home .classify-item span {
        font-size: 12px;
    }

    /* 推荐订单 */
    .home .recommend {
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        background-color: #f1f2f6;
    }

    .home .recommend:after {
        display: table;
        content: "";
        line-height: 0;
    }

    .home .recommend .Left {
        float: left;
        font-size: 14px;
    }

    .home .recommend .Left img {
        float: left;
        width: 10px;
        height: 10px;
        margin-top: 10px;
        padding-right: 5px;
    }

    .home .recommend .Right {
        float: right;
        font-size: 12px;
    }

    .home .recommend .Right span {
        color: #ea5944;
    }

    /*推荐订单列表*/
    .home .list {
        background-color: #fff;
        padding: 10px 12px 20px;
        color: #848484;
        height: 95px;
        border-bottom: 5px solid #f1f2f6;
    }

    .home .list h3 {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        color: #000000;
    }

    .home .list .time {
        line-height: 20px;
    }

    .home .list .time .Left {
        float: left;
        font-size: 12px;
    }

    .home .list .time .price {
        float: right;
        font-size: 14px;
        color: #ea5944;
    }

    .home .list .address {
        line-height: 20px;
    }

    .home .list .address .Left1 {
        float: left;
        font-size: 12px;
    }

    .home .list .address .Right1 {
        float: right;
        font-size: 12px;
    }

    .home .list .address .Right1 span {
        color: #ea5944;
    }
</style>
