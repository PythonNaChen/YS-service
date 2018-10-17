<template>
  <div id="tab">
    <!--标题-->
    <div class="top">
      <div class="goBack" @click="goBack()">
        <img src="../assets/images/goBack.png" alt="">
      </div>
      <div class="companyLogo">
        <router-link to="/home">
          <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" alt="" class="logo">
        </router-link>
      </div>
    </div>
    <!--头部-->
    <mu-container>
      <mu-tabs style="background-color: white" class="tab_head" :value.sync="active2" color="green"
               indicator-color="#ea5a43" full-width>
        <mu-tab>推荐</mu-tab>
        <mu-tab>母婴知识</mu-tab>
        <mu-tab>孕期分享</mu-tab>
        <mu-tab>咪嘛新闻</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active2 === 0">
        <ul>
          <li @click="goArticle(1)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/muyingzhishi.png">
                </div>
                <div class="awatar-right">
                  <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                  <p class="time">2016年03月24日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。然而许多妈妈却是在分娩后才意识到要恶补...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
          <li @click="goArticle(2)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/yunqifenxiang.png">
                </div>
                <div class="awatar-right">
                  <p class="title">盲目补充营养反而导致胎儿发育不良</p>
                  <p class="time">2016年08月12日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>360母婴发现很多准妈妈在知道自己怀孕之后，就走上了一条补充营养的道路上...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
          <li @click="goArticle(3)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/mimayuesao.png">
                </div>
                <div class="awatar-right">
                  <p class="title">咪嘛月嫂重庆店9月15日盛大开业，礼献全城！</p>
                  <p class="time">2018年09月12日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>金秋时节，备受期待的咪嘛月嫂重庆店即将盛大开业。咪嘛月嫂用四重惊喜优惠...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
        <div class="box" style="height: 1.26rem;"></div>
      </div>
      <div class="demo-text" v-if="active2 === 1">
        <ul>
          <li @click="goArticle(1)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/muyingzhishi.png">
                </div>
                <div class="awatar-right">
                  <p class="title">成都月嫂推荐：关于母乳喂养的小知识</p>
                  <p class="time">2016年03月24日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>母乳对于宝宝，是天然、营养的食物，好处 甚多。然而许多妈妈却是在分娩后才意识到要恶补...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
        <div class="box" style="height: 1.26rem;"></div>
      </div>
      <div class="demo-text" v-if="active2 === 2">
        <ul>
          <li @click="goArticle(2)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/yunqifenxiang.png">
                </div>
                <div class="awatar-right">
                  <p class="title">盲目补充营养反而导致胎儿发育不良</p>
                  <p class="time">2016年08月12日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>360母婴发现很多准妈妈在知道自己怀孕之后，就走上了一条补充营养的道路上...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
        <div class="box" style="height: 1.26rem;"></div>
      </div>
      <div class="demo-text" v-if="active2 === 3">
        <ul>
          <li @click="goArticle(3)" class="show-item">
            <div class="articleListBox">
              <div class="show-item-user">
                <div class="awatar-box">
                  <img src="../assets/images/mimayuesao.png">
                </div>
                <div class="awatar-right">
                  <p class="title">咪嘛月嫂重庆店9月15日盛大开业，礼献全城！</p>
                  <p class="time">2018年09月12日</p>
                </div>
              </div>
              <!--<div class="img-group">-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png">-->
              <!--</div>-->
              <!--<div class="img-box">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">-->
              <!--</div>-->
              <!--</div>-->
              <div class="talk-area">
                <p>金秋时节，备受期待的咪嘛月嫂重庆店即将盛大开业。咪嘛月嫂用四重惊喜优惠...</p>
              </div>
              <!--<div class="view-amount">-->
              <!--<div class="view-amount-item view-amount-left">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">-->
              <!--<span>点击次数:625</span>-->
              <!--</div>-->
              <!--<div class="view-amount-item">-->
              <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">-->
              <!--<span>1256阅读</span>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </li>
        </ul>
        <div class="box" style="height: 1.26rem;"></div>
      </div>
    </mu-container>

  </div>
</template>

<script>
  import tabBar from "../components/tabbar";

  export default {
    name: "mima_classroom",
    components: {
      tabBar
    },
    data() {
      return {
        active2: 0
      };
    },
    methods: {
      $(id) {
        return typeof id === "string" ? document.getElementById(id) : null;
      },
      //返回上一页
      goBack() {
        this.$router.go(-1);
      },
      // 跳转到文章详情页
      goArticle(type) {
        this.$router.push('/article?type=' + type)
      },
      getTab() {
        //1.获取标签
        let all_li = this.$("tab_header").getElementsByTagName("li");
        let all_dom = this.$("tab_content").getElementsByClassName("dom");
        let navbar_slider = document.getElementsByClassName('navbar_slider')[0];
        for (let i = 0; i < all_li.length; i++) {
          all_li[i].index = i;
          all_li[i].onclick = function () {
            // 先清除所有激活样式，隐藏所有内容
            for (let j = 0; j < all_li.length; j++) {
              all_li[j].className = "";
              all_dom[j].style.display = "none";
            }
            // 当前选项添加class
            this.className += " selected";
            //修改navbar_slider的样式
            navbar_slider.className = ''
            navbar_slider.className = 'navbar_slider slider_' + i
            // 显示当前内容
            all_dom[this.index].style.display = "block";
          };
        }
      }
    },
    computed: {},
    mounted() {
      // this.getTab();
    }
  };
</script>

<style scoped lang="less">
  .mu-tab-active {
    color: #4a4a4a;
  }

  #tab {
    background-color: #fff;
    height: 100vh;
    p, a, span {
      font-weight: normal;
    }
    /* 标题 */
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
          margin-left: -0.4rem;
        }
      }
    }
    /* 头部 */
    #tab_header {
      position: relative;
      ul {
        display: flex;
        justify-content: space-around;
        border-bottom: 5px solid #F6F6F6;
        li {
          height: 25px;
          line-height: 25px;
        }
      }
    }
    /* 头部 */
    .tab_head {
      overflow-x: scroll;
      overflow-y: hidden;
      color: #4a4a4a;
    }
    .mu-tab-active {
      color: #4a4a4a;
    }
    .selected {
      color: red;
    }
    .navbar_slider {
      position: absolute;
      content: " ";
      left: 0;
      bottom: 0;
      width: 6em;
      height: 3px;
      background-color: #ea5a43;
      -webkit-transition: -webkit-transform 0.3s;
      transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      transition: transform 0.3s, -webkit-transform 0.3s;
      .slider_0 {
        left: 16px;
        transform: translateX(-6px);
        width: 49px;
        background-color: #eb5b43;
      }
      .slider_1 {
        left: 16px;
        transform: translateX(70px);
        width: 70px;
        background-color: #eb5b43;
      }
      .slider_2 {
        left: 16px;
        transform: translateX(170px);
        width: 70px;
        background-color: #eb5b43;
      }
      .slider_3 {
        left: 16px;
        transform: translateX(274px);
        width: 70px;
        background-color: #eb5b43;
      }
    }
    /*内容*/
    .show-item {
      width: 100%;
      border-bottom: .1rem solid #f1f2f6;
      .articleListBox {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0.28rem 0.59rem 0;
        .show-item-user {
          display: flex;
          .awatar-box {
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 0.3rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .awatar-right {
            margin-left: 0.27rem;
            .name {
              font-size: 0.41rem;
              line-height: 0.68rem;
              color: #353535;
            }
            .time {
              font-size: 0.29rem;
              color: #a7a7a7;
              line-height: 0.6rem;
            }
          }
        }
        /*图片区域*/
        .img-group {
          display: flex;
          flex-wrap: wrap;
          .img-box {
            flex: 0 0 33.33%;
            display: flex;
            justify-content: center;
            margin-bottom: 2px;
            img {
              width: 3.16rem;
              height: 2.74rem;
              border-radius: 0.2rem;
            }
          }
        }
        /* 文字部分 */
        .title {
          width: 8rem;
          font-size: 0.42rem;
          color: #353535;
          text-align: left;
          padding: 0.1rem 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 0.6rem;
        }
        .talk-area {
          padding: 0.17rem 0;
          border-left: 0.12rem solid #ea5a43;
          font-size: 0.38rem;
          margin-bottom: 0.4rem;
          color: #a7a7a7;
          p {
            padding-left: 0.15rem;
            -ms-text-align-last: left;
            text-align-last: left;
            line-height: 0.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .view-amount {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          padding-bottom: 10px;

          .view-amount-item {
            display: flex;
            align-items: center;
            img {
              width: 0.34rem;
              height: 0.34rem;
            }
            span {
              font-size: 0.38rem;
              color: #a7a7a7;
              padding-left: 0.13rem;
            }
          }
          .view-amount-left {
            margin-right: 0.4rem;
          }
        }
      }
    }
    li:last-child {
      border-bottom: none;
      padding-bottom: 0.5rem;
    }
  }

  .container {
    padding: 0 !important;
  }

</style>
