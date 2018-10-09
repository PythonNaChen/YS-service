<template>
    <div class="home">
        <!--头部-->
        <div class="header">
            <div class="city">
                <span>成都</span>
                <img src="https://www.360myhl.com/meixinJF/static/images/open.png">
            </div>
            <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/logo.jpg" class="logo">-->
            <img class="logo" src="https://www.360myhl.com/meixinJF/img/companyLogo.png" alt="">
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
                <p>月嫂</p>
            </div>
            <div class="classify-item" @click="getEachInfo(1)">
                <img src="https://www.360myhl.com/meixinJF/static/images/baby-cart.png">
                <p>育儿嫂</p>
            </div>
            <div class="connect_kefu">
                <a href="https://det.zoosnet.net/lr/chatpre.aspx?id=det55046512&lng=cn">
                    <img src="http://www.360myhl.com/meixinJF/MM/ximg/kefu_icon.png" alt="">
                </a>
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
                <div class="Left1" style="overflow: hidden">地 址：成都市武侯区环球中心S1</div>
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
                <div class="Left1" style="overflow: hidden">地 址：成都市武侯区环球中心S1</div>
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
                <div class="Left1" style="overflow: hidden">地 址：成都市武侯区环球中心S1</div>
                <div class="Right1">已有<span>52</span>位护理员报名</div>
            </div>
        </div>
        <!--<div class="order_list" v-if="No_data === true" style="display: flex;align-items: center">-->
        <!--<span style="color: #ea5a43; width: 100px;margin: 30px auto 0;">暂无数据...</span>-->
        <!--</div>-->
        <div id="box" style="height: 1.26rem;"></div>
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
    data() {
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
      };
    },
    methods: {
      getPath() {
        this.this_path = this.$route.path.slice(1);
      }
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
      this.getPath();
    }
  };
</script>

<style scoped lang="less">
    .home {
        /* 头部 */
        .header {
            height: 0.93rem;
            width: 90%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0.14rem 0;
            .city {
                img {
                    width: 0.4rem;
                    height: 0.4rem;
                    vertical-align: middle;
                }
                span {
                    font-size: 0.3rem;
                    color: #000;
                    margin-right: 0.1rem;
                }
            }
            .logo {
                width: 3.37rem;
                height: 1.67rem;
                margin-left: -0.28rem;
            }
            .kefu {
                width: 0.6rem;
                height: 0.6rem;
            }
        }
        /* 轮播图 */
        .banner .page__bd {
            width: 100%;
            height: 1.5rem;
        }
        .banner .slide-image {
            width: 100%;
            height: 100%;
        }
        /* 分类 */
        .classify {
            display: flex;
            justify-content: space-around;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0.5rem 0;
            position: relative;
            .classify-item {
                img {
                    width: 1.7rem;
                    height: 1.7rem;
                }
                p {
                    font-size: 0.33rem;
                    font-weight: normal;
                }
            }
            .connect_kefu {
                position: fixed;
                right: 0.19rem;
                top: 35%;
                width: 1.55rem;
                height: 1.55rem;
                border-radius: 50%;
                box-shadow: 0 0 2px 2px #ebc0bc;
                background-color: #fff;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        /* 推荐订单 */
        .recommend {
            background-color: #f1f2f6;
            height: 0.94rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 5%;
            .Left {
                font-size: 0.38rem;
                img {
                    width: 0.52rem;
                    height: 0.42rem;
                    vertical-align: sub;
                    padding-right: 0.09rem;
                }
            }
            .Right {
                font-size: 0.25rem;
                span {
                    color: #ea5944;
                }
            }
        }
        /*推荐订单列表*/
        .list {
            background-color: #fff;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 5%;
            color: #848484;
            height: 2.46rem;
            border-bottom: 5px solid #f1f2f6;
        }
        h3 {
            font-size: 0.33rem;
            font-weight: bold;
            color: #000000;
        }
        .time {
            line-height: 0.44rem;
            display: flex;
            justify-content: space-between;
            .Left {
                font-size: 0.29rem;
            }
            .price {
                font-size: 0.42rem;
                font-weight: bold;
                color: #ea5944;
            }
        }
        .address {
            line-height: 0.44rem;
            display: flex;
            justify-content: space-between;
            .Left1 {
                font-size: 0.29rem;
            }
            .Right1 {
                font-size: 0.25rem;
                span {
                    color: #ea5944;
                }
            }
        }
    }
</style>
