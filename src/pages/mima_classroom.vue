<template>
    <div id="tab">
        <!--标题-->
        <div class="title">咪嘛课堂</div>
        <!--头部-->
        <mu-container>
            <mu-tabs style="background-color: white" class="tab_head" :value.sync="active2" color="green" indicator-color="#ea5a43" full-width>
                <mu-tab>推荐</mu-tab>
                <mu-tab>母婴知识</mu-tab>
                <mu-tab>孕期分享</mu-tab>
                <mu-tab>咪嘛新闻</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active2 === 0">
                <div class="show-item">
                    <div class="show-item-user">
                        <div class="awatar-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                        </div>
                        <div class="awatar-right">
                            <p class="name">咪咪嘛嘛</p>
                            <p class="time">1小时前</p>
                        </div>
                    </div>
                    <div class="img-group">
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">
                        </div>
                    </div>
                    <p class="title">为啥一到换季就病？脆弱的抵抗力正是“罪魁祸首”</p>
                    <div class="talk-area">
                        <p>张小宝：说的很有道理！</p>
                        <p>楼主回复：谢谢亲~</p>
                    </div>
                    <div class="view-amount">
                        <div class="view-amount-item view-amount-left">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">
                            <span>20评论</span>
                        </div>
                        <div class="view-amount-item">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">
                            <span>1256阅读</span>
                        </div>
                    </div>
                </div>
                <div class="show-item">
                    <div class="show-item-user">
                        <div class="awatar-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                        </div>
                        <div class="awatar-right">
                            <p class="name">咪咪嘛嘛</p>
                            <p class="time">1小时前</p>
                        </div>
                    </div>
                    <div class="img-group">
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/baby-awatar.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo4.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/show-item1.jpg">
                        </div>
                        <div class="img-box">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/work-photo2.jpg">
                        </div>
                    </div>
                    <p class="title">为啥一到换季就病？脆弱的抵抗力正是“罪魁祸首”</p>
                    <div class="talk-area">
                        <p>张小宝：说的很有道理！</p>
                        <p>楼主回复：谢谢亲~</p>
                    </div>
                    <div class="view-amount">
                        <div class="view-amount-item view-amount-left">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/talk.png">
                            <span>20评论</span>
                        </div>
                        <div class="view-amount-item">
                            <img src="http://www.360myhl.com/meixinJF/MM/ximg/view.png">
                            <span>1256阅读</span>
                        </div>
                    </div>
                </div>
                <div class="box"></div>
            </div>
            <div class="demo-text" v-if="active2 === 1">
                <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                <p>“那么就去地狱找到你，我绝对不逃！”</p>
                <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
            </div>
            <div class="demo-text" v-if="active2 === 2">
                <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                <p>“也许吧，未来……给你了。”</p>
            </div>
            <div class="demo-text" v-if="active2 === 3">
                <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
            </div>
        </mu-container>
        <!--<div id="tab_header">-->
        <!--<ul>-->
        <!--<li class="selected">推荐</li>-->
        <!--<li>母婴知识</li>-->
        <!--<li>孕期分享</li>-->
        <!--<li>咪嘛新闻</li>-->
        <!--</ul>-->
        <!--<div class="navbar_slider slider_0"></div>-->
        <!--</div>-->
        <tab-bar select="mima_classroom"></tab-bar>
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
      getTab() {
        //1.获取标签
        let all_li = this.$("tab_header").getElementsByTagName("li");
        let all_dom = this.$("tab_content").getElementsByClassName("dom");
        let navbar_slider = document.getElementsByClassName('navbar_slider')[0];
        for (let i = 0; i < all_li.length; i++) {
          all_li[i].index = i;
          all_li[i].onclick = function() {
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

<style scoped>
    .mu-tab-active{
        color: #4a4a4a;
    }
    p, a, span{
        font-weight: normal;
    }
    /* 标题 */
    .title {
        font-size: 14px;
        color: #111;
        text-align: center;
        font-weight: 600;
        height: 50px;
        line-height: 50px;
    }
    /* 头部 */
    .tab_head{
        overflow-x:scroll;
        overflow-y:hidden;
        color: #4a4a4a;
    }
    .mu-tab-active{
        color: #4a4a4a;
    }

    /* 头部 */
    #tab #tab_header{
        position: relative;
    }
    #tab #tab_header ul {
        display: flex;
        justify-content: space-around;
        border-bottom: 5px solid #F6F6F6;
    }
    #tab #tab_header ul li{
        height: 25px;
        line-height: 25px;
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
    }
    .slider_0{
        left: 16px;
        transform: translateX(-6px);
        width: 49px;
        background-color: #eb5b43;
    }
    .slider_1{
        left: 16px;
        transform: translateX(70px);
        width: 70px;
        background-color: #eb5b43;
    }
    .slider_2{
        left: 16px;
        transform: translateX(170px);
        width: 70px;
        background-color: #eb5b43;
    }
    .slider_3{
        left: 16px;
        transform: translateX(274px);
        width: 70px;
        background-color: #eb5b43;
    }
    /* 内容一 */
    #tab_content {
    }
    .show-item {
        border-bottom: .237037037rem solid #f1f2f6;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 14px 10px 0;
    }
    .show-item-user{
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
    }
    .show-item-user .awatar-box {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        padding-bottom: 5px;
    }
    .show-item-user .awatar-box img {
        width: 100%;
        height: 100%;
    }
    .show-item-user .awatar-right {
        margin-left: 10px;
        margin-top: 8px;
    }
    .show-item-user .awatar-right .name {
        font-size: 14px;
        color: #353535;
    }
    .show-item-user .awatar-right .time {
        font-size: 12px;
        color: #353535;
    }
    /*图片区域*/
    .show-item .img-group {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .show-item .img-group .img-box {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33%;
        flex: 0 0 33.33%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 2px;
    }
    .show-item .img-group .img-box img {
        width: 110px;
        height: 110px;
    }
    /* 文字部分 */
    .show-item .title {
        font-size: 14px;
        color: #353535;
        text-align:left;
    }
    .show-item .talk-area {
        padding: 5px 0;
        border-left: 5px solid #ea5a43;
        font-size: 12px;
        color: #a7a7a7;
    }
    .show-item .talk-area p{
        padding-left: 10px;
        -ms-text-align-last: left;
        text-align-last: left;
    }
    .show-item .view-amount {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        padding-bottom: 10px;
    }
    .show-item .view-amount img{
        width: 10px;
        height: 10px;
    }
    .show-item .view-amount-left {
        margin-right: 5px;
    }
    .show-item .view-amount-item span {
        font-size: 12px;
        color: #a7a7a7;
        margin-left: 2px;
    }
    /* 占位 */
    .box{
        height: 50px;
        width: 100%;
    }
</style>