<template>
  <div class="yuesao-index" style="font-weight: 800;" v-if="data">
    <!--返回上一页-->
    <div class="goBack" @click="goBack()">
      <img src="../assets/images/white-back.png" alt="">
    </div>
    <!--头部-->
    <div class="header">
      <div class="header_top">
        <div class="yuesao_head_img">
          <img :src="urlPrefix + data.tx" v-if="data.tx !== '' && data.tx !== undefined && data.tx !== null">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" v-else>
        </div>
        <div class="header-detail">
          <p class="yuesao_name">{{data.pcname}} <span>{{data.class_name}}</span></p>
          <p class="yuesao_salary">{{priceType == 1 ? data.class_price :
            data.class_price_yu}}<span>元/26天</span></p>
          <p class="yuesao_experience">
            <span class="experience_item">{{data.age}}岁</span>|
            <span class="experience_item">来自{{data.places}}</span>|
            <span class="experience_item">{{data.nx}}年工作经验</span>
            <!--<span>服务过46户</span>-->
          </p>
          <!--<a class="watch_detail" href="/static/rili.html">查看档期</a>-->
          <p class="watch_detail" @click="goSchedule()">查看档期</p>
        </div>
      </div>
      <div class="header_bottom">
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/renzheng-icon.png" alt="">
          <span>实名认证</span>
        </div>
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/pt-icon.png" alt="">
          <span>母婴护理证书</span>
        </div>
        <div class="header_bottom_item">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/medical-icon.png" alt="">
          <span>体检合格</span>
        </div>
      </div>
    </div>
    <!--个人资料-->
    <div class="info">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
        <span>个人资料</span>
      </div>
      <div class="info-detail">
        <ul>
          <li>年 龄：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.age}}岁</span></li>
          <li>属 相：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.zodiac}}</span></li>
          <li>身 高：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.high}}</span></li>
          <li>体 重：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.heavy}}kg</span></li>
        </ul>
        <ul>
          <li>出生日期：<span style="font-family: 微软雅黑;font-weight: 500;">{{birthday}}</span></li>
          <li>培训学校：<span style="font-family: 微软雅黑;font-weight: 500;">360母婴</span></li>
          <li>籍 贯：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.places}}</span></li>
          <li>学 历：<span style="font-family: 微软雅黑;font-weight: 500;">{{data.education}}</span></li>
        </ul>
        <ul>
          <li>擅长菜系：<span style="font-family: 微软雅黑;font-weight: 500;">川菜</span></li>
          <li>擅长口味：<span style="font-family: 微软雅黑;font-weight: 500;">清淡</span></li>
          <li>生育状况：<span style="font-family: 微软雅黑;font-weight: 500;"
                         v-if="data.marriage === '已婚' ">已育</span><span
            style="font-family: 微软雅黑;font-weight: 500;" v-else>未育</span></li>
        </ul>
      </div>
    </div>
    <!--个人技能-->
    <div class="info">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill-icon.png">
        <span>个人技能</span>
      </div>
      <div class="info-detail">
        <ul>
          <li>理论考核：{{data.jnA}}分</li>
        </ul>
        <ul style="margin-left: 25px;">
          <li>实操考核：{{data.jnB}}分</li>
        </ul>
        <ul>
          <li>综合素质：{{data.jnC}}分</li>
        </ul>
      </div>
    </div>
    <!--性格评价-->
    <div class="character">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/character-icon.png">
        <span>性格评价</span>
      </div>
      <div class="character-detail">
        <ul>
          <li>
            <span>责任感：</span>
            <img v-for="item  in data.xgA" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>爱  心：</span>
            <img v-for="item  in data.xgB" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>细  节：</span>
            <img v-for="item  in data.xgC" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>主动性：</span>
            <img v-for="item  in data.xgD" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
        </ul>
        <ul class="character-ul-right">
          <li>
            <span>交 流：</span>
            <img v-for="item  in data.xgE" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>执行力：</span>
            <img v-for="item  in data.xgF" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>体 力：</span>
            <img v-for="item in data.xgG" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
          <li>
            <span>个人卫生：</span>
            <img v-for="item  in data.xgH" :key="item"
                 src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--咪嘛月嫂评价-->
    <div class="response">
      <div class="title">咪嘛月嫂评价：</div>
      <p>{{data.pj}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem in laudantium molestias similique voluptatibus? Architecto, et facere, fugiat illo ipsum minima modi nam nemo nostrum placeat praesentium similique vel vero? </p>
    </div>
    <!--工作照片-->
    <div class="work-photo">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/pic-icon.png">
        <span>工作照片</span>
      </div>
      <div class="photo-box">
        <div class="scroll-box">
          <div class="img-box" v-for="(item, index) in files" :key="index">
            <img :src="item" :id="item" @click="showCustomImagePreview(index)">
          </div>
        </div>
      </div>
    </div>
    <!--工作视频-->
    <div class="work-video">
      <div class="title">
        <img src="http://www.360myhl.com/meixinJF/MM/ximg/video_icon_03.png">
        <span>工作视频</span>
      </div>
      <div class="video-list">
        <div class="item" v-for="(item, index) in videos" :key="index">
          <video controls="controls" :src="item"></video>
        </div>
      </div>
    </div>
    <!--评分<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png">-->
    <!--<div class="star_score">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/star-icon.png">-->
    <!--<span>评分</span>-->
    <!--</div>-->
    <!--<div class="mark-detail">-->
    <!--<div class="mark-detail-left">4.9</div>-->
    <!--<div class="mark-detail-right">-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->

    <!--<div class="line">-->
    <!--<div class="line-inner"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:60%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:30%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:10%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="star-item">-->
    <!--<div class="star-total">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/small_star.png" alt="">-->
    <!--</div>-->
    <!--<div class="line">-->
    <!--<div class="line-inner" style="width:10%"></div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--护理员标签-->
    <!--<div class="caregiver_label">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/talk-icon.png">-->
    <!--<span>护理员标签</span>-->
    <!--</div>-->
    <!--<ul>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li>-->
    <!--<div>仪表整洁-->
    <!--<span>118</span>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->

    <!-- 精选留言 -->
    <!--<div class="leaving_msg">-->
    <!--<div class="title">-->
    <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/leav_msg_icon_03.png">-->
    <!--<span>精选留言</span>-->
    <!--</div>-->
    <!--<div class="item">-->
    <!--<div class="topBox">-->
    <!--<div class="headImg">-->
    <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">-->
    <!--</div>-->
    <!--<div class="name_and_date">-->
    <!--<p class="line_one">雇主：王先生</p>-->
    <!--<p class="line_two">2018年5月28日</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="botBox">-->
    <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque dignissimos dolorem enim ex excepturi explicabo fuga, illo in laudantium molestias nobis officia optio, possimus qui tempore temporibus ut voluptas?-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="item">-->
    <!--<div class="topBox">-->
    <!--<div class="headImg">-->
    <!--<img src="https://www.360myhl.com/meixinJF/MM/ximg/normalHeadImg.png" alt="">-->
    <!--</div>-->
    <!--<div class="name_and_date">-->
    <!--<p class="line_one">雇主：王先生</p>-->
    <!--<p class="line_two">2018年5月28日</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="botBox">-->
    <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque dignissimos dolorem enim ex excepturi explicabo fuga, illo in laudantium molestias nobis officia optio, possimus qui tempore temporibus ut voluptas?-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--技能打钩-->
    <div class="skills">
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_06.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">生活护理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">常规形体恢复</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">基础膳食</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">瑜伽形体恢复</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">肩颈头部放松</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">浮肿、背部酸痛调理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">产后失眠调理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">产后抑郁疏导</li>
          </ul>
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">基础月子餐</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">家常点心之作</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">足浴</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">膳食调补方案</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">子宫复旧</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">卵巢保养</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">满月发汗</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_15.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">生活护理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">健康观察</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">新生儿喂饭</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">常见疾病观察及护理</li>
          </ul>
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">睡眠习惯纠正</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">早产儿、双胞胎喂养</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">新生儿营养方案</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">小儿推拿</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_17.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">初级体能发育指导</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">感官发育指导</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">大运动能力培养</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">早期音乐能力培养</li>
          </ul>
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">家庭阅读环境创设</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">早期阅读能力培养</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">精细动作培养</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="skill_banner">
          <img src="http://www.360myhl.com/meixinJF/MM/ximg/skill_banner_20.png">
        </div>
        <div class="info_detail">
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">促进母乳喂养</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">乳腺管经络疏通</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">乳房常见问题处理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">母乳不足辨证施治</li>
          </ul>
          <ul>
            <li><img src="../assets/images/selected_icon_07.png" alt="">回来及膳食调理</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">奶涨施治</li>
            <li><img src="../assets/images/selected_icon_07.png" alt="">乳房恢复保养</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box" style="height: 2rem;"></div>
  </div>
</template>

<script>
  import axios from "axios";
  import { provinceList, cityList, areaList } from "../../static/area";

  const addressData = provinceList;
  addressData.forEach(province => {
    province.children = cityList[province.value];
    province.children.forEach(city => {
      city.children = areaList[city.value];
    });
  });

  const column1 = [
    { text: "到店面试", value: "1" },
    { text: "视频面试", value: "2" },
    { text: "上门面试", value: "3" }
  ];

  export default {
    name: "index",
    data() {
      return {
        customIndex: 1,//图片预览索引
        files: [], // 图片数组
        videos: [], // 视频数组
        data: null, // 月嫂个人信息
        birthday: "", // 从身份证中提取的年月日
        Yid: "", //月嫂id
        urlPrefix: "http://www.360myhl.com/meixinJF/img/",
        priceType: null, //月嫂價格
        isCollection: false, // 收藏图标样式切换
        appointmentDialog: false, // 预约的弹框
        selectedDate: "请选择日期", // 选中的日期
        selectedMode: 1, // "到店面试": 1, "视频面试": 2, "上门面试": 3
        showSelectedMode: "预约方式", // 预约回显的数据
        selectedProvince: "四川省", // 选中的 省
        selectedCity: "成都市", // 选中的 市
        selectedArea: "直辖区", // 选中的 区
        detailAddress: "", // 街道地址详情，用于数据双向绑定 v-model
        completeAddress: "", // 省、市、区 + 街道详情 的 数据拼接，用于提交给后台 （string）
        contactNumber: "" // 预约者的联系方式，用于数据双向绑定 v-model
      };
    },
    methods: {
      //返回上一页
      goBack() {
        this.$router.go(-1);
      },
      // 图片浏览
      showCustomImagePreview(index) {
        this.customIndex = index;
        console.log(this.customIndex);
        console.log(typeof this.customIndex);
        this.$createImagePreview({
          imgs: this.files,
          initialIndex: this.customIndex,
          loop: true,
          speed: 500,
          onChange: (i) => {
            this.customIndex = i;
          },
          onHide: () => {
            console.log("hide");
          }
        }, (h) => {
          return h("div", {
            class: {
              "image-preview-custom-header": true
            },
            slot: "header"
          }, this.customIndex + 1);
        }).show();
      },
      //地址选择器
      showAddressPicker() {
        this.addressPicker.show();
      },
      selectAddressHandle(selectedVal, selectedIndex, selectedText) {
        this.selectedCity = selectedText[0];
        this.selectedArea = selectedText[1];
        this.detailAddress = selectedText[2];
      },
      // 获取图片
      async requestPhotos(Yid) {
        let res = await axios.get(
          "/meixinJF/hy/queryIMG",
          {
            params: {
              id: Yid
            }
          }
        );
        if (res) {
          console.log("月嫂图片", res.data);
          this.files = [];
          for (let i = 0; i < res.data.length; i++) {
            let fullPicturePath = "http://www.360myhl.com/FHMYSQL/uploadFiles/uploadImgs/" + res.data[i].address;
            this.files.push(fullPicturePath);
          }
        }
      },
      // 获取档期
      async getSchedule() {
        let res = await axios.get(
          "/meixinJF/xcx/ht?attendantsid=1",
          {
            params: {}
          }
        );
        if (res) {
          console.log("档期", res.data);
          localStorage.setItem("scheduleDate", res.data);
        }
      },
      // 获取视频
      async requestVideos(Yid) {
        let res = await axios.get(
          "/meixinJF/hy/queryMP4",
          {
            params: {
              id: Yid
            }
          }
        );
        if (res) {
          this.videos = [];
          console.log("视频：", res.data);
          for (let i = 0; i < res.data.length; i++) {
            let fullVideosPath = "http://www.360myhl.com/FHMYSQL/uploadFiles/video/" + res.data[i].address;
            this.videos.push(fullVideosPath);
          }
        }
      },
      // 获取月嫂个人信息
      async requestPersonalDetail(Yid) {
        let res = await axios.get(
          "/meixinJF/hy/queryIDSE",
          {
            params: {
              id: Yid
            }
          }
        );
        console.log("月嫂个人信息", res.data);
        if (res) {
          console.log("月嫂个人信息", res.data);
          this.data = res.data;
          this.data.xgA = Number(res.data.xgA);
          this.data.xgB = Number(res.data.xgB);
          this.data.xgC = Number(res.data.xgC);
          this.data.xgD = Number(res.data.xgD);
          this.data.xgE = Number(res.data.xgE);
          this.data.xgF = Number(res.data.xgF);
          this.data.xgG = Number(res.data.xgG);
          this.data.xgH = Number(res.data.xgH);
        }
        this.getBirthday();
      },
      // 从月嫂身份证中提取生日日期，在 created() 后, 被 requestPersonalDetail() 调用
      getBirthday() {
        this.birthday = this.data.idcard.slice(8, 14);
        // console.log(this.birthday);
      },
      // 跳转档期页面
      goSchedule() {
        this.$router.push("/schedule");
      },
      // 收藏功能
      async makeCollection() {
        this.isCollection = !this.isCollection; // 图标切换
      },
      // 打开预约面试的弹框
      openAppointment() {
        console.log(this.appointmentDialog);
        this.appointmentDialog = !this.appointmentDialog;
      },
      // 预约面试选择器
      showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: "Picker",
            data: [column1],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          });
        }
        this.picker.show();
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.showSelectedMode = selectedText[0];
      },
      // 时间选择器
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: "Date Picker",
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectDateHandle,
            onCancel: this.cancelHandle
          });
        }
        this.datePicker.show();
      },
      selectDateHandle(date, selectedVal, selectedText) {
        this.selectedDate = `${selectedText[0]}-${selectedText[1]}-${selectedText[2]}`;
      },
      cancelHandle() {
        this.$createToast({
          type: "correct",
          txt: "Picker canceled",
          time: 1000
        }).show();
      },

      // 确认立即预约
      async immediateReservation() {
        // 完整的 省、市、区 + 街道详情 的 数据拼接，用于提交给后台 （string）
        this.completeAddress = this.selectedProvince + "," + this.selectedCity + "," + this.selectedArea + "," + this.detailAddress;
        console.log("this.showSelectedMode(服务方式)", this.showSelectedMode);
        console.log("this.selectedDate(预约期)", this.selectedDate);
        console.log("this.contactNumber(手机号)", this.contactNumber);
        console.log("this.completeAddress(地址)", this.completeAddress);

        let res = await axios.post(
          "/meixinJF/xcx/businessADD?customermobile=" + this.contactNumber + "&customersource=8849a6eb32974a59b19d8b6bb2c7d384" + "&customersourcemode=e55e05d95a5643c4af723de35fdb9e52" + "&demandtime=" + this.selectedDate + "&yyLX=" + this.showSelectedMode + "&customerremark=" + this.name + "&address=" + this.completeAddress,
          // {
          //     customermobile: this.contactNumber,
          //     customersource: "8849a6eb32974a59b19d8b6bb2c7d384",
          //     customersourcemode: "e55e05d95a5643c4af723de35fdb9e52",
          //     demandtime: this.selectedDate,
          //     yyLX: this.showSelectedMode,
          //     customerremark: this.name,
          //     address: this.completeAddress
          // },
          {
            headers: {
              /*"content-type": "application/json" // 默认值*/
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
          }
        );
        if (res) {
          this.openAlert();
        }
      },
      // 预约成功的提示
      openAlert() {
        const toast = this.$createToast({
          txt: "恭喜您，预约成功！",
          type: "success"
        });
        toast.show();
        this.appointmentDialog = !this.appointmentDialog;
      },
      // 点击取消后关闭预约面试框
      cancelFn() {
        this.appointmentDialog = !this.appointmentDialog;
      }
    },
    created() {
      this.priceType = this.$route.query.type;
      this.Yid = this.$route.query.id;
      let Yid = this.Yid;
      this.requestPhotos(Yid); // 获取月嫂图片
      this.requestPersonalDetail(Yid); //获取月嫂个人信息
      this.requestVideos(Yid); // 获取月嫂视频
      this.getSchedule();// 获取月嫂档期
    },
    mounted() {
      this.addressPicker = this.$createCascadePicker({
        title: "City Picker",
        data: addressData,
        onSelect: this.selectAddressHandle,
        onCancel: this.cancelHandle
      });
    }
  };
</script>

<style scoped lang="less">
  .Active {
    color: #ea5a43;
  }

  /*返回上一页*/
  .goBack {
    position: absolute;
    top: 3%;
    left: 5%;
    z-index: 1;
    width: 10px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .header {
    position: relative;
    border-bottom: 7px solid #f1f2f6;

    /*头部上半部分*/
    .header_top {
      border-bottom: 1px dashed #dcd8cc;
      background-image: url("http://www.360myhl.com/meixinJF/MM/images/index/headerBGI.png");
      background-repeat: no-repeat;
      -webkit-background-size: 100% 3.25rem;
      background-size: 100% 3.25rem;
      .yuesao_head_img {
        width: 1.86rem;
        height: 1.86rem;
        text-align: center;
        margin: 0 auto;
        img {
          width: 1.86rem;
          height: 1.86rem;
          border-radius: 50%;
          margin-top: 1.69rem;
        }
      }
      .header-detail {
        text-align: center;
        padding-bottom: 0.17rem;
        margin-top: 1.7rem;
        .yuesao_name {
          color: #f2673a;
          font-size: 0.33rem;
          padding-top: 5px;
          span {
            color: #fff;
            background-color: #ff0000;
            padding: 0.02rem;
            border-radius: 0.04rem;
            font-size: 0.17rem;
          }
        }
      }
      .yuesao_salary {
        color: #ea5905;
        font-size: 0.21rem;
        span {
          font-size: 0.18rem;
          color: #000;
          font-weight: bold;
        }
      }
      .yuesao_experience {
        color: #9d9d9d;
        font-size: 0.2rem;
        .experience_item {
          margin-right: 5px;
        }
      }
      .watch_detail {
        display: inline-block;
        margin: 10px auto 0;
        padding: 0.08rem .13rem;
        color: #f57247;
        border: 0.03rem solid #ea5944;
        font-size: 0.22rem;
        border-radius: 0.06rem;
        width: 2.2rem;
      }
    }

    /*头部下半部分*/
    .header_bottom {
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 80%;
      .header_bottom_item {
        display: flex;
        align-items: center;
        img {
          width: 0.36rem;
          height: 0.36rem;
          margin-right: 2px;
        }
        span {
          color: #841d1d;
          font-size: 0.19rem;
        }
      }
    }
  }

  /*个人资料 & 技能*/
  .info {
    border-bottom: 0.13rem solid #f1f2f6;
    .title {
      height: 0.43rem;
      display: flex;
      align-items: center;
      padding-left: 0.27rem;
      font-size: 0.2rem;
      border-bottom: 1px solid #f1f2f6;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.08rem;
      }
    }
    .info-detail {
      display: flex;
      justify-content: space-between;
      font-size: 0.23rem;
      padding: 6px 23px 9px;
      ul {
        width: 3.2rem;
        li {
          color: #000;
          margin-bottom: 8px;
          overflow: hidden; /*溢出隐藏*/
          white-space: nowrap; /*文字不能转行*/
          text-overflow: ellipsis; /*隐藏的部分用...表示*/
        }
      }
      ul:last-child {
        margin-left: 25px;
      }
    }
  }

  /* 性格评价 */
  .character {
    border-bottom: 0.13rem solid #f1f2f6;
    .title {
      height: 0.43rem;
      display: flex;
      align-items: center;
      padding-left: 0.27rem;
      font-size: 0.2rem;
      border-bottom: 1px solid #f1f2f6;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.08rem;
      }
    }
    .character-detail {
      display: flex;
      padding: 12px 24px 18px;
      justify-content: space-between;
      ul {
        width: 2.5rem;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 0.18rem;
          span {
            width: 2.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            display: inline-block;
            font-size: 0.23rem;
          }
          img {
            width: 0.24rem;
            height: 0.24rem;
          }
        }
      }
    }
    .character-ul-right li span {
      width: 2.6666666667rem;
      text-align: right;
    }

  }

  /* 咪嘛月嫂评价 */
  .yuesao-index .response {
    border-bottom: 0.15rem solid #f1f2f6;
    padding: 0.2rem 0.25rem;
    .title {
      font-size: 0.2rem;
      color: #000;
      font-weight: 600;
      margin-bottom: 0.13rem;
      p {
        font-size: 0.2rem;
        color: #000;
        line-height: 0.33rem;
      }
    }
  }

  /*工作照片*/
  .yuesao-index .work-photo {
    border-bottom: 10px solid #f1f2f6;
  }

  .yuesao-index .work-photo .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .yuesao-index .work-photo .title img {
    width: 19px;
    height: 20px;
    margin-right: 5px;
  }

  .yuesao-index .work-photo .photo-box {
    margin: 4px 12px 12px;
    overflow-x: scroll;
  }

  .yuesao-index .work-photo .photo-box .scroll-box {
    width: 20000px;
  }

  .yuesao-index .work-photo .photo-box .img-box {
    width: 91px;
    height: 95px;
    overflow: hidden;
    float: left;
    margin-right: 5px;
  }

  .yuesao-index .work-photo .photo-box .img-box img {
    width: 100%;
    height: 100%;
  }

  /*工作视频*/
  .yuesao-index .work-video {
    border-bottom: 10px solid #f1f2f6;
  }

  .yuesao-index .work-video .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .yuesao-index .work-video .title img {
    width: 19px;
    height: 12px;
    margin-right: 5px;
  }

  .yuesao-index .work-video .video-list {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .yuesao-index .work-video .video-list .item {
    width: 160px;
    height: 170px;
  }

  .yuesao-index .work-video .video-list .item video {
    width: 100%;
    height: 100%;
  }

  /*评分*/
  .yuesao-index .star_score {
    border-bottom: 20px solid #f1f2f6;
    height: 100px;
  }

  .yuesao-index .star_score .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
    border-bottom: 1px solid #f1f2f6;
  }

  .yuesao-index .star_score .title img {
    width: 19px;
    height: 17px;
    margin-right: 5px;
  }

  .yuesao-index .mark-detail-left {
    font-size: 60px;
    color: #eb604a;
    font-weight: 600;
    float: left;
    margin-left: 40px;
  }

  .yuesao-index .mark-detail-right {
    padding-top: 15px;
  }

  .yuesao-index .mark-detail-right .star-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    float: right;
    margin-right: 10px;
  }

  .yuesao-index .mark-detail-right .star-item .star-total {
    width: 100px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .yuesao-index .mark-detail-right .star-item .star-total img {
    width: 10px;
    height: 10px;
  }

  .yuesao-index .mark-detail-right .star-item .line {
    width: 120px;
    height: 6px;
    margin-left: 3px;
    background: #f1f2f6;
  }

  .yuesao-index .mark-detail-right .star-item .line-inner {
    width: 80%;
    height: .1481481481rem;
    background: #fcc7bf;
  }

  /*护理员标签*/
  .yuesao-index .caregiver_label {
    border-bottom: 10px solid #f1f2f6;
    padding-bottom: 30px;
  }

  .yuesao-index .caregiver_label {
    border-bottom: 10px solid #f1f2f6;
  }

  .yuesao-index .caregiver_label .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .yuesao-index .caregiver_label .title img {
    width: 19px;
    height: 17px;
    margin-right: 5px;
  }

  .yuesao-index .caregiver_label ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 18px 24px 10px;
  }

  .yuesao-index .caregiver_label ul li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    margin-bottom: .3703703704rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .yuesao-index .caregiver_label ul li div {
    padding: 4px 6px;
    border: 1px solid #eb604a;
    color: #eb604a;
    font-size: 10px;
    border-radius: 15px;
  }

  /* 留言 和 技能 */
  .leaving_msg .title {
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .5185185185rem;
    border-bottom: 10px solid #f1f2f6;
    font-size: 14px;
  }

  .leaving_msg .title img {
    width: 19px;
    height: 18px;
    margin-right: 5px;
  }

  .topBox {
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
  }

  .topBox .headImg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  .topBox .headImg img {
    width: 100%;
    height: 100%;
  }

  .name_and_date {
    margin-top: 6px;
    margin-left: 15px;
    line-height: 19px;
  }

  .name_and_date p {
    font-size: 12px;
    font-weight: bold;
  }

  .name_and_date .line_two {
    font-weight: normal;
    color: #979797;
  }

  .botBox {
    font-size: 14px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px 10px 25px;
    line-height: 20px;
    font-weight: bold;
  }

  .skills {
    border-top: 10px solid #f1f2f6;
    .skill_banner {
      width: 100%;
      height: 2.4rem;
      margin-bottom: 0.34rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info_detail {
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      padding-bottom: 0.24rem;
      li {
        font-size: 0.23rem;
        font-weight: bold;
        line-height: 0.7rem;
        img {
          width: 0.42rem;
          height: 0.42rem;
          vertical-align: middle;
          margin-right: 0.14rem;
        }
      }
    }
  }
</style>
