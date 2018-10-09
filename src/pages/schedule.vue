<template>
    <div class="page">
        <div class="selectedRadio">
            <div class="radio" :class="{active: isActive}" @click="singleElection(0)">休息</div>
            <div class="radio" :class="{active: !isActive}" @click="singleElection(1)">可预约</div>
            <!-- 开始日期 -->
            <div class="startTime" @click="selectedStartDate()">{{s_date}}</div>
            <!-- 结束日期 -->
            <div class="endTime" @click="selectedEndDate">{{e_date}}</div>
            <div class="submitTime" @click="submitSchedule()">提交时间</div>
        </div>
        <div class="thead_mask"></div>
        <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
                :markDateMore=arr
        ></Calendar>
        <div class="unclick_mask"></div>
        <!-- 提示 -->
        <div class="notice">
            <div class="notice_box">
                <div class="line_one"></div>
                <div class="line_two">休息</div>
                <div class="line_three"></div>
                <div class="line_two">可预约</div>
                <div class="line_five"></div>
                <div class="line_two">已安排</div>
            </div>
        </div>
    </div>
</template>

<script>
  import Calendar from "vue-calendar-component";
  import axios from "axios";

  export default {
    name: "schedule",
    components: {
      Calendar
    },
    data() {
      return {
        arr: [{ date: "2018/10/1", className: "mark1" }, { date: "2018/10/13", className: "mark2" }],
        isActive: true, // 勾选了安排调休为 true ，为 false 时表示选择了 安排工作
        isActiveValue: "0", // 显示 安排调休或者工作
        myYear: "", // 系统 年
        myMonth: "", // 系统 月
        myDay: "", // 系统 日
        s_date: "选择开始日期", // 所选的开始日期
        e_date: "选择结束日期" // 所选的结束日期
      };
    },
    methods: {
      clickDay(data) {
        console.log(data); //选中某天
      },
      changeDate(data) {
        console.log(data); //左右点击切换月份
      },
      clickToday(data) {
        console.log(data); //跳到了本月
      },
      // 点击休息和可预约
      singleElection(v) {
        if (v === 0) {
          console.log("您选择了休息");
          this.isActive = true;
          this.isActiveValue = "0";
        } else if (v === 1) {
          console.log("您选择了可预约");
          this.isActive = false;
          this.isActiveValue = "1";
        }
      },

      // 选择开始日期
      selectedStartDate() {
        console.log("开始日期picker");
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: "请选择开始日期",
            min: new Date(this.myYear, this.myMonth, this.myDay),
            max: new Date(this.myYear + 2, 12, 31),
            value: new Date(),
            onSelect: this.selectStartHandle,
            onCancel: this.cancelHandle
          });
        }
        this.datePicker.show();
      },
      // 选择开始日期，点击确定后执行的函数
      selectStartHandle(date, selectedVal, selectedText) {
        this.s_date = `${selectedText[0]}-${selectedText[1]}-${selectedText[2]}`;
      },

      // 选择结束日期
      selectedEndDate() {
        console.log("结束日期picker");
        if (!this.EndDatePicker) {
          this.EndDatePicker = this.$createDatePicker({
            title: "请选择开始日期",
            min: new Date(this.myYear, this.myMonth, this.myDay),
            max: new Date(this.myYear + 2, 12, 31),
            value: new Date(),
            onSelect: this.selectEndHandle,
            onCancel: this.cancelHandle
          });
        }
        this.EndDatePicker.show();
      },
      // 选择结束日期，点击确定后执行的函数
      selectEndHandle(date, selectedVal, selectedText) {
        this.e_date = `${selectedText[0]}-${selectedText[1]}-${selectedText[2]}`;
      },

      // 开始日期和结束日期的picker，点击 取消 后执行的函数
      cancelHandle() {
        this.$createToast({
          type: "correct",
          txt: "您没有作出选择",
          time: 1000
        }).show();
        console.log(this.myYear, this.myMonth, this.myDay);
      },

      // 提交
      async submitSchedule() {
        let res = await axios.get(
          `/meixinJF/xcx/dq?status=${this.isActiveValue}&attendantid=${localStorage.getItem("queryId")}&start_date=${this.s_date}&end_date=${this.e_date}`
        );
        if (res) {
          this.getScheduleInfo()
        }
      },

      // 查询档期
      async getScheduleInfo() {
        let res = await axios.get(
          `/meixinJF/xcx/ht?attendantsid=${localStorage.getItem("queryId")}`
        );
        if (res) {
          for (let i in res.data) {
            res.data[i].date = res.data[i].date.replace(/-/g, "/");
          }
          this.arr = res.data;
          console.log("档期数据", this.arr);
        }
      }

    },
    created() {
      this.getScheduleInfo();
    },
    mounted() {
      const myDate = new Date();//获取系统当前时间
      this.myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      this.myMonth = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
      this.myDay = myDate.getDate(); //获取当前日(1-31)
    }
  };
</script>

<style scoped lang="less">
    .page {
        background-color: black;
        height: 100vh;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-top: 12vh;
        /* 选择其中某项 后激活的样式*/
        .active {
            background-color: #00b26a !important;
            color: #ffffff !important;
        }
        /* 上方操作台 */
        .selectedRadio {
            background-color: #fff;
            height: 3rem;
            font-size: 0.38rem;
            display: flex;
            justify-content: space-around;
            position: relative;
            /* 安排 调休 和 工作 的公共样式 */
            .radio {
                margin-top: 0.4rem;
                width: 2.2rem;
                height: 1rem;
                line-height: 1rem;
                border: 1px solid #ccc;
                color: #000;
                text-align: center;
                border-radius: 0.3rem;
            }
            /* 开始时间 定位*/
            .startTime {
                position: absolute;
                bottom: 15%;
                left: 6%;
                border-bottom: 1px solid #cccccc;
            }
            /* 结束时间 定位*/
            .endTime {
                position: absolute;
                bottom: 15%;
                left: 39%;
                border-bottom: 1px solid #cccccc;
            }
            /* 提交时间的按钮 */
            .submitTime {
                margin-top: 1.1rem;
                width: 2.2rem;
                height: 0.9rem;
                line-height: 0.9rem;
                background-color: #ea5a43;
                border-radius: 0.37rem;
                color: #ffffff;
                text-align: center;
            }
        }
        .thead_mask {
            width: 100%;
            height: 1rem;
            background-color: #ccc;
            position: absolute;
            top: 6.76rem;
            left: 0;
            opacity: 0.3;
            z-index: 50;
        }
        .unclick_mask {
            width: 100%;
            height: 8rem;
            background-color: #ccc;
            position: absolute;
            top: 40%;
            left: 0;
            opacity: 0;
        }
        .notice {
            height: 1.8rem;
            width: 100%;
            background-color: #fff;
            text-align: center;
            .notice_box {
                width: 90%;
                height: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                align-items: center;
                /* 休息 */
                .line_one {
                    height: 0.85rem;
                    width: 0.85rem;
                    border-radius: 50%;
                    color: #585858;
                    border: 0.1rem solid #ea5a43;
                    background-color: #fff;
                }
                .line_two {
                    font-size: 0.45rem;
                }
                /* 已安排 */
                .line_three {
                    height: 0.85rem;
                    width: 0.85rem;
                    color: #585858;
                    border-radius: 50%;
                    background-color: #fff;
                    border: 0.1rem solid #ccc;
                }
                /* 可预约 */
                .line_five {
                    height: 0.85rem;
                    width: 0.85rem;
                    color: #ffffff;
                    border-radius: 50%;
                    background-color: #ea5a43;
                }
            }
        }
    }
</style>