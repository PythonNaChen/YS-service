<!-- 订单详情 列表-->
<template>
  <div class="page">
    <div class="top">
      <div class="goBack" @click="goBack()">
        <img src="../assets/images/goBack.png" alt="">
      </div>
      <div class="companyLogo">
        <img src="https://www.360myhl.com/meixinJF/img/companyLogo.png" alt="" class="logo">
      </div>
    </div>
    <div class="info">
      <ul>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>年龄</p></div>
          <div class="right"><input type="text" maxlength="2" v-model="age"></div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>出生日期</p></div>
          <div class="right">
            <p @click="showDatePicker">{{date}}</p>
          </div>
        </li>
        <!--<li>-->
        <!--<div class="left">-->
        <!--<img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">-->
        <!--<p>擅长菜系</p></div>-->
        <!--&lt;!&ndash;<div class="right"><input type="text" :value=" '川菜' "></div>&ndash;&gt;-->
        <!--<div class="right"><p>清淡</p></div>-->
        <!--</li>-->
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>属相</p></div>
          <div class="right">
            <p @click="showZodiacPicker">{{zodiac}}</p>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>培训学校</p></div>
          <div class="right"><p>咪嘛教育</p></div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>擅长口味</p></div>
          <!--<div class="right"><input type="text" :value=" '清淡' "></div>-->
          <div class="right"><p>清淡</p></div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>身高</p></div>
          <div class="right"><input type="text" maxlength="3" v-model="height">&nbsp;<p>cm</p>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>籍贯</p></div>
          <div class="right"><input type="text" maxlength="5" v-model="city"></div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>生育状况</p></div>
          <div class="right">
            <p @click="showBirthPicker">{{birth}}</p>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>体重</p></div>
          <div class="right"><input type="text" v-model="weight">&nbsp;<p>kg</p></div>
        </li>
        <li>
          <div class="left">
            <img src="http://www.360myhl.com/meixinJF/MM/ximg/user-icon.png" alt="">
            <p>学历</p></div>
          <div class="right">
            <p @click="showEducationPicker">{{education}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="submitBtn" @click="saveData()">提 交</div>
  </div>
</template>

<script>
  const educationArray = [
    { text: "小学", value: "小学" },
    { text: "初中", value: "初中" },
    { text: "高中/职高", value: "高中/职高" },
    { text: "中专", value: "中专" },
    { text: "大专", value: "大专" },
    { text: "大学", value: "大学" }
  ];
  const zodiacArray = [
    { text: "鼠", value: "鼠" },
    { text: "牛", value: "牛" },
    { text: "虎", value: "虎" },
    { text: "兔", value: "兔" },
    { text: "龙", value: "龙" },
    { text: "蛇", value: "蛇" },
    { text: "马", value: "马" },
    { text: "羊", value: "羊" },
    { text: "猴", value: "猴" },
    { text: "鸡", value: "鸡" },
    { text: "狗", value: "狗" },
    { text: "猪", value: "猪" }
  ];
  const birthArray = [{ text: "已孕", value: "已孕" }, { text: "未孕", value: "未孕" }];
  import axios from "axios";

  export default {
    name: "orderDetails",
    data() {
      return {
        // 学历
        education: "初中",
        // 学历
        zodiac: "牛",
        // 生育概况
        birth: "已孕",
        // 默认日期
        date: "2016-09-01",
        age: "28", // 默认年龄
        height: 160, // 默认身高
        weight: 48, // 默认体重
        city: "雅安汉源" // 籍贯
      };
    },
    methods: {
      // 返回上一页
      goBack() {
        this.$router.go(-1);
      },

      /* 选择 出生日期*/
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: "Date Picker",
            min: new Date(1950, 0, 1),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          });
        }

        this.datePicker.show();
      },
      selectHandle(date, selectedVal, selectedText) {
        this.date = `${selectedVal[0]}-${selectedVal[1]}-${selectedVal[2]}`;
      },
      /* 选择 出生日期*/

      // 取消选择器的提示
      cancelHandle() {
        this.$createToast({
          type: "correct",
          txt: "Picker canceled",
          time: 1000
        }).show();
      },
      // 属相选择器
      showZodiacPicker() {
        if (!this.zodiacPicker) {
          this.zodiacPicker = this.$createPicker({
            title: "Picker",
            data: [zodiacArray],
            onSelect: this.selectZodiacHandle,
            onCancel: this.cancelHandle
          });
        }
        this.zodiacPicker.show();
      },
      selectZodiacHandle(selectedVal, selectedIndex, selectedText) {
        this.zodiac = selectedText[0];
      },

      // 生育情况选择器
      showBirthPicker() {
        if (!this.birthPicker) {
          this.birthPicker = this.$createPicker({
            title: "Picker",
            data: [birthArray],
            onSelect: this.selectBirthHandle,
            onCancel: this.cancelHandle
          });
        }
        this.birthPicker.show();
      },
      selectBirthHandle(selectedVal, selectedIndex, selectedText) {
        this.birth = selectedText[0];
      },

      // 学历选择器
      showEducationPicker() {
        if (!this.educationPicker) {
          this.educationPicker = this.$createPicker({
            title: "Picker",
            data: [educationArray],
            onSelect: this.selectEducationHandle,
            onCancel: this.cancelHandle
          });
        }
        this.educationPicker.show();
      },
      selectEducationHandle(selectedVal, selectedIndex, selectedText) {
        this.education = selectedText[0];
      },

      // 保存数据
      async saveData() {
        let res = await axios.get(
          "/meixinJF/xcx/YAQsave",
          {
            params: {
              id: localStorage.getItem("queryId"),
              birthday: this.date,
              age: this.age,
              high: this.height,
              heavy: this.weight,
              place: this.city,
              education: this.education,
              marriage: this.birth,
              zodiac: this.zodiac
            }
          }
        );
        if (res) {
          this.$router.push("/mine");
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .page {
    .top {
      width: 100%;
      background-color: #fafafa;
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
          margin-left: -0.6rem;
        }
      }
    }
    .info {
      ul {
        li {
          border-bottom: 1px solid #dadada;
          display: flex;
          justify-content: space-between;
          align-items: center;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0 20px;
          height: 1rem;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 0.45rem;
              height: 0.45rem;
              margin-right: 0.13rem;
            }
            p {
              font-size: 0.38rem;
              color: #000000;
            }
          }
          .right {
            display: flex;
            align-items: center;
            input, p {
              color: #797979;
              font-size: 0.37rem;
              text-align: right;
              border: none;
              outline: none;
              background-color: #fafafa;
            }
          }
        }
      }
    }
    .submitBtn {
      padding: 10px 10px;
      color: #ffffff;
      background-color: #ea5432;
      border-radius: 7px;
      width: 80%;
      margin: 30px auto 0;
      text-align: center;
      font-size: 0.38rem;
    }
  }
</style>
