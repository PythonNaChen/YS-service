<template>
    <div class="baby-detail" style="font-weight: 800;">
        <div class="formula_total">
            <img src="https://www.360myhl.com/meixinJF/MM/ximg/formula_icon_03.png" alt="">{{title}}
        </div>
        <div class="submit" @click="submitForm()">提交数据</div>
        <!--宝宝体温-->
        <ul class="info-list" v-if="selectIndex === 'b0'">
            <li>
                <span>宝宝体温（℃）</span>
                <input type="text" maxlength="2" placeholder="输入体温，如 36" v-model="baby_temperature">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">选择测量日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">选择测量时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--身体/体重/头围-->
        <ul class="info-list" v-if="selectIndex === 'b1'">
            <li>
                <span>身长：</span>
                <input type="text" placeholder="cm" v-model="baby_height" maxlength="2">
            </li>
            <li>
                <span>体重：</span>
                <input type="text" placeholder="kg" v-model="baby_weight" maxlength="2">
            </li>
            <li>
                <span>头围：</span>
                <input type="text" placeholder="cm" v-model="head_circumference" maxlength="2">
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--早启蒙教育-->
        <ul class="info-list" v-if="selectIndex === 'b2'">
            <li @click="showPicker">
                <div>
                    <span type="default">选择启蒙教育</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--脐带护理-->
        <ul class="info-list" v-if="selectIndex === 'b3'">
            <li @click="showPicker">
                <div>
                    <span type="default">选择脐带护理</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--黄疸观察-->
        <ul class="info-list" v-if="selectIndex === 'b4'">
            <li @click="showPicker">
                <div>
                    <span type="default">黄疸观察</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--喂养记录-->
        <ul class="info-list" v-if="selectIndex === 'b5'">
            <li @click="showPicker">
                <div>
                    <span type="default">喂养记录</span>
                </div>
                <em style="text-align: right;">{{feeding_patterns}}</em>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '母乳喂养'">
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">点击选择开始时间</span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li @click="showEndTimePicker">
                <div>
                    <span type="default">点击选择结束时间</span>
                </div>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '人工喂养'">
            <li>
                <input  maxlength="2" type="text" placeholder="80" v-model="milliliter"><span>/ml</span>
            </li>
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">
                        <span type="default">点击选择母乳喂养开始时间</span>
                    </span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '辅食喂养'">
            <li>
                <span>种 类：</span>
                <input type="text" placeholder="奶粉" v-model="foodClass">
            </li>
            <li>
                <span>数 量：</span>
                <input type="text" placeholder="250（克）" v-model="foodNumber">
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--宝宝沐浴-->
        <ul class="info-list" v-if="selectIndex === 'b6'">
            <li>
                <span>沐浴次数：</span>
                <input maxlength="3" type="text" placeholder="0" v-model="times">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">点击选择沐浴日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">点击选择沐浴时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--黄疸观察-->
        <ul class="info-list" v-if="selectIndex === 'b7'">
            <li @click="showPicker">
                <div>
                    <span type="default">皮肤观察</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--大便观察-->
        <ul class="info-list" v-if="selectIndex === 'b8'">
            <li style="overflow: hidden" @click="showCascadePicker">
                <div>
                    <span type="default">大便观察</span>
                </div>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--小便观察-->
        <ul class="info-list" v-if="selectIndex === 'b9'">
            <li style="overflow: hidden" @click="showCascadePicker">
                <div>
                    <span type="default">小便观察</span>
                </div>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--睡眠观察-->
        <ul class="info-list" v-if="selectIndex === 'b10'">
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">点击选择开始时间</span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li @click="showEndTimePicker">
                <div>
                    <span type="default">点击选择结束时间</span>
                </div>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--呼吸观察-->
        <ul class="info-list" v-if="selectIndex === 'b11'">
            <li>
                <input  maxlength="3" type="text" v-model="times" placeholder="56" style="float: left;"><span
                    style="float: left;">次/分</span>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--奶具消毒-->
        <ul class="info-list" v-if="selectIndex === 'b12'">
            <li @click="showPicker">
                <div>
                    <span type="default">奶具消毒</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>

        <!--妈妈体温-->
        <ul class="info-list" v-if="selectIndex === 'm0'">
            <li>
                <span>测量体温：</span>
                <input  maxlength="2" type="text" placeholder="℃" v-model="mm_temperature">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">点击选择测量日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">点击选择测量时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--做月子餐-->
        <ul class="info-list" v-if="selectIndex === 'm1'">
            <li>
                <span>餐点名称：</span>
                <input type="text" placeholder="红烧肉" v-model="foodName">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">点击选择用餐日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">点击选择用餐时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--身体护理-->
        <ul class="info-list" v-if="selectIndex === 'm2'">
            <li @click="showPicker">
                <div>
                    <span type="default">身体护理</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--胸部护理-->
        <ul class="info-list" v-if="selectIndex === 'm3'">
            <li @click="showPicker">
                <div>
                    <span type="default">胸部护理</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--恶露观察-->
        <ul class="info-list" v-if="selectIndex === 'm4'">
            <li style="overflow: hidden" @click="showCascadePicker">
                <div>
                    <span type="default">恶露观察</span>
                </div>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--经络按摩-->
        <ul class="info-list" v-if="selectIndex === 'm5'">
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">点击选择开始时间</span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li @click="showEndTimePicker">
                <div>
                    <span type="default">点击选择结束时间</span>
                </div>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--形体操指导-->
        <ul class="info-list" v-if="selectIndex === 'm6'">
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">点击选择开始时间</span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li @click="showEndTimePicker">
                <div>
                    <span type="default">点击选择结束时间</span>
                </div>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--腹带塑身-->
        <ul class="info-list" v-if="selectIndex === 'm7'">
            <li @click="showStartTimePicker">
                <div>
                    <span type="default">点击选择开始时间</span>
                </div>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li @click="showEndTimePicker">
                <div>
                    <span type="default">点击选择结束时间</span>
                </div>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--清洗与消毒-->
        <ul class="info-list" v-if="selectIndex === 'm8'">
            <li @click="showPicker">
                <div>
                    <span type="default">清洗与消毒</span>
                </div>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--用药记录-->
        <ul class="info-list" v-if="selectIndex === 'm9'">
            <li @click="showPicker">
                <div>
                    <span type="default">用药记录</span>
                </div>
                <em style="text-align: right;">{{selected_object}}</em>
            </li>
        </ul>
        <ul class="info-list" v-if="selected_object === '妈妈'">
            <li>
                <span>药品名称：</span>
                <input type="text" placeholder="XXX急支糖浆" v-model="drug_name">
            </li>
            <li>
                <span>用量：</span>
                <input type="text" placeholder="50ml" v-model="use_level">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">点击选择用药日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">点击选择用药时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="selected_object === '宝宝'">
            <li>
                <span>药品名称：</span>
                <input type="text" placeholder="XXX急支糖浆" v-model="drug_name">
            </li>
            <li>
                <span>用量：</span>
                <input type="text" placeholder="50ml" v-model="use_level">
            </li>
            <li @click="showDatePicker">
                <div>
                    <span type="default">点击选择用药日期</span>
                </div>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li @click="showTimePicker">
                <div>
                    <span type="default">点击选择用药时间</span>
                </div>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "dataDetail",
    data() {
      return {
        title: '', // 数据表标题
        yname: "", // 月嫂的名字
        orderid: "", // 订单编号
        selectIndex: "", // 选项索引
        baby_temperature: "", // 宝宝的体温
        MT: "",// 测量时间 年月日
        selectedTime: "", //选中的时间 时分
        head_circumference: "", // 头围
        baby_height: "", // 宝宝身高
        baby_weight: "", // 宝宝体重
        selected_value: "", // 从选择器选中的值
        // 单列选择器的候选项
        array: [],
        otherQuestions: "", // 选择器 选择 “其它” 的时候显示textarear输入框
        times: "", // 记录次数
        other: "", // 用于存储级联的选项
        // 级联选择器的选项
        cascadeData: [],
        start_time: "", // 开始时间
        end_time: "", // 结束时间
        mm_temperature: "", // 妈妈体温
        foodName: "", // 食物名字
        feeding_patterns: "", // 喂养方式
        milliliter: "", // 毫升 ml
        foodClass: "", // 用于存储 食物种类
        foodNumber: "", // 用于存储 食物数量
        selected_object: "", // 用药对象
        use_level: "", // 药品用量
        drug_name: "" // 药品名称
      };
    },
    methods: {
      // 日期Picker
      showDatePicker() {
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: "Date Picker",
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            onSelect: this.selectDate,
            onCancel: this.cancelHandle
          });
        }

        this.datePicker.show();
      },
      // 选择日期后的字符串拼接操作
      selectDate(date, selectedVal, selectedText) {
        // 1.如果月份是个位数，则转化为 str 并在前面加一个0，01、02、03
        if (selectedVal[1] < 10) {
          var month = "0" + selectedVal[1].toString();
        } else {
          month = selectedVal[1].toString();
        }
        // 2.如果 天数 是个位数，则转化为 str 并在前面加一个0，01、02、03
        if (selectedVal[2] < 10) {
          var day = "0" + selectedVal[2].toString();
        } else {
          day = selectedVal[2].toString();
        }
        // 3.拼接字符串 --> "2018-03-09"
        let fullDate = selectedVal[0].toString() + "-" + month + "-" + day;
        this.MT = fullDate; // 回显数据
      },

      // 时间Picker
      showTimePicker() {
        if (!this.timePicker) {
          this.timePicker = this.$createDatePicker({
            title: "时间单选",
            min: [1, 0, 0],
            max: [24, 59, 59],
            value: new Date(),
            startColumn: "hour",
            onSelect: this.selectTimes,
            onCancel: this.cancelHandle
          });
        }
        this.timePicker.show();
      },
      // 选择时间后的字符串拼接
      selectTimes(date, selectedVal, selectedText) {
        let fullTime = selectedVal[0] + ":" + selectedVal[1];
        this.selectedTime = fullTime;
      },

      // 单列选择器
      showPicker() {
        this.picker.show();
      },
      // 级联选择器
      showCascadePicker() {
        this.cascadePicker.show();
      },
      // 选中的级联选项
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.other = selectedText.join(",");
      },

      // 开始时间 月、日、时、分
      showStartTimePicker() {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 15,
          day: {
            len: 30,
            filter: ["今天", "明天"],
            format: "M月d日"
          },
          // 拆分日期时间 "2018/8/27 17:39" ---> “2018-08-27 17:39”
          onSelect: (selectedTime, selectedText, formatedTime) => {

            // 先分开 日期 和 时间 ["2018/8/27", "17:39"]
            let dataList = formatedTime.split(" ");

            // 把年月日由 "2018/8/27" ---> "2018-8-27"
            let fullDate = dataList[0].split("/");

            // 1.如果月份是个位数，在前面加一个0，01、02、03
            if (fullDate[1].length < 2) {
              var month = "0" + fullDate[1];
            } else {
              month = fullDate[1];
            }
            // 2.如果天数是个位数，在前面加一个0，01、02、03
            if (fullDate[2].length < 2) {
              var day = "0" + fullDate[2];
            } else {
              day = fullDate[2];
            }
            // 3.拼接 年月日 2018-08-09 17:59
            this.start_time = fullDate[0] + "-" + month + "-" + day + " " + dataList[1];
          }
        }).show();
      },
      // 结束时间 月、日、时、分
      showEndTimePicker() {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 15,
          day: {
            len: 30,
            filter: ["今天", "明天"],
            format: "M月d日"
          },
          onSelect: (selectedTime, selectedText, formatedTime) => {
            // 先分开 日期 和 时间 ["2018/8/27", "17:39"]
            let dataList = formatedTime.split(" ");

            // 把年月日由 "2018/8/27" ---> "2018-8-27"
            let fullDate = dataList[0].split("/");

            // 1.如果月份是个位数，在前面加一个0，01、02、03
            if (fullDate[1].length < 2) {
              var month = "0" + fullDate[1];
            } else {
              month = fullDate[1];
            }
            // 2.如果天数是个位数，在前面加一个0，01、02、03
            if (fullDate[2].length < 2) {
              var day = "0" + fullDate[2];
            } else {
              day = fullDate[2];
            }
            // 3.拼接 年月日 2018-08-09 17:59
            this.end_time = fullDate[0] + "-" + month + "-" + day + " " + dataList[1];
          }
        }).show();
      },

      // 提交表单
      async submitForm() {
        switch (this.selectIndex) {
          case "b0":
            let b0 = await axios.get(
              "/meixinJF/xcx/SaveRbabytw",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.baby_temperature, // 详细信息
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.selectedTime, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: this.MT, // 年月日
                  yname: this.yname // 月嫂名字
                }
              },
              {
                headers: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b0) {
              this.$router.go(-1);
            }
            break;
          case "b1":
            let b1 = await axios.get(
              "/meixinJF/xcx/SaveRbabycl",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.baby_height + "/" + this.baby_weight + "/" + this.head_circumference, // 详细信息
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b1) {
              this.$router.go(-1);
            }
            break;
          case "b2":
            let b2 = await axios.get(
              "/meixinJF/xcx/SaveRbabyqm",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b2) {
              this.$router.go(-1);
            }
            break;
          case "b3":
            let b3 = await axios.get(
              "/meixinJF/xcx/SaveRbabyqd",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b3) {
              this.$router.go(-1);
            }
            break;
          case "b4":
            let b4 = await axios.get(
              "/meixinJF/xcx/SaveRbabyhd",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b4) {
              this.$router.go(-1);
            }
            break;
          case "b5":
            switch (this.feeding_patterns) {
              case "母乳喂养":
                let mr = await axios.get(
                  "/meixinJF/xcx/SaveRbabywy",
                  {
                    params: {
                      orderid: this.orderid, // 订单编号
                      detailed: this.feeding_patterns,
                      remk: this.otherQuestions, // 备注
                      creatimeYS: this.start_time, // 起始时间
                      creatimeYE: this.end_time, // 结束时间
                      creatimeM: 0, // 年月日
                      yname: this.yname // 月嫂名字
                    }
                  }
                );
                if (mr) {
                  this.$router.go(-1);
                }
                break;
              case "人工喂养":
                let rg = await axios.get(
                  "/meixinJF/xcx/SaveRbabywy",
                  {
                    params: {
                      orderid: this.orderid, // 订单编号
                      detailed: this.feeding_patterns + "/" + this.milliliter,
                      remk: this.otherQuestions, // 备注
                      creatimeYS: this.start_time, // 起始时间
                      creatimeYE: 0, // 结束时间
                      creatimeM: 0, // 年月日
                      yname: this.yname // 月嫂名字
                    }
                  }
                );
                if (rg) {
                  this.$router.go(-1);
                }
                break;
              case "辅食喂养":
                let fs = await axios.get(
                  "/meixinJF/xcx/SaveRbabywy",
                  {
                    params: {
                      orderid: this.orderid, // 订单编号
                      detailed: this.feeding_patterns + "/" + this.foodClass + "/" + this.foodNumber,
                      remk: this.otherQuestions, // 备注
                      creatimeYS: 0, // 起始时间
                      creatimeYE: 0, // 结束时间
                      creatimeM: 0, // 年月日
                      yname: this.yname // 月嫂名字
                    }
                  }
                );
                if (fs) {
                  this.$router.go(-1);
                }
                break;
            }
            break;
          case "b6":
            let b6 = await axios.get(
              "/meixinJF/xcx/SaveRbabymy",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.times,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.selectedTime, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: this.MT, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b6) {
              this.$router.go(-1);
            }
            break;
          case "b7":
            let b7 = await axios.get(
              "/meixinJF/xcx/SaveRbabypf",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b7) {
              this.$router.go(-1);
            }
            break;
          case "b8":
            let b8 = await axios.get(
              "/meixinJF/xcx/SaveRbabydb",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b8) {
              this.$router.go(-1);
            }
            break;
          case "b9":
            let b9 = await axios.get(
              "/meixinJF/xcx/SaveRbabyxb",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b9) {
              this.$router.go(-1);
            }
            break;
          case "b10":
            let b10 = await axios.get(
              "/meixinJF/xcx/SaveRbabysm",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: 0,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_time, // 起始时间
                  creatimeYE: this.end_time, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b10) {
              this.$router.go(-1);
            }
            break;
          case "b11":
            let b11 = await axios.get(
              "/meixinJF/xcx/SaveRbabyhx",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.times,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b11) {
              this.$router.go(-1);
            }
            break;
          case "b12":
            let b12 = await axios.get(
              "/meixinJF/xcx/SaveRbabynj",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (b12) {
              this.$router.go(-1);
            }
            break;
          case "m0":
            let m0 = await axios.get(
              "/meixinJF/xcx/SaveRmothertw",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.mm_temperature,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.selectedTime, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: this.MT, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m0) {
              this.$router.go(-1);
            }
            break;
          case "m1":
            let m1 = await axios.get(
              "/meixinJF/xcx/SaveRmotheryzc",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.foodName,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.selectedTime, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: this.MT, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m1) {
              this.$router.go(-1);
            }
            break;
          case "m2":
            let m2 = await axios.get(
              "/meixinJF/xcx/SaveRmotherhl",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m2) {
              this.$router.go(-1);
            }
            break;
          case "m3":
            let m3 = await axios.get(
              "/meixinJF/xcx/SaveRmotherxbhl",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m3) {
              this.$router.go(-1);
            }
            break;
          case "m4":
            let m4 = await axios.get(
              "/meixinJF/xcx/SaveRmotherel",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m4) {
              this.$router.go(-1);
            }
            break;
          case "m5":
            let m5 = await axios.get(
              "/meixinJF/xcx/SaveRmotherjl",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_time, // 起始时间
                  creatimeYE: this.end_time, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m5) {
              this.$router.go(-1);
            }
            break;
          case "m6":
            let m6 = await axios.get(
              "/meixinJF/xcx/SaveRmotherxtc",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_time, // 起始时间
                  creatimeYE: this.end_time, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m6) {
              this.$router.go(-1);
            }
            break;
          case "m7":
            let m7 = await axios.get(
              "/meixinJF/xcx/SaveRmotherfd",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.other + "/" + this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_time, // 起始时间
                  creatimeYE: this.end_time, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m7) {
              this.$router.go(-1);
            }
            break;
          case "m8":
            let m8 = await axios.get(
              "/meixinJF/xcx/SaveRmotherxd",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: "", // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m8) {
              this.$router.go(-1);
            }
            break;
          case "m9":
            let m9 = axios.get(
              "/meixinJF/xcx/SaveRmotheryy",
              {
                params: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.selected_value + "/" + this.drug_name + "/" + this.use_level,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.selectedTime, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: this.MT, // 年月日
                  yname: this.yname // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                }
              }
            );
            if (m9) {
              this.$router.go(-1);
            }
            break;
        }
      }
    },
    mounted() {
      // 单列选择器
      this.picker = this.$createPicker({
        title: "Picker",
        data: [this.array],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.selected_value = selectedText[0]; // 单选选项
          this.selected_object = selectedText[0]; // 用药对象
          this.feeding_patterns = selectedText[0]; // 喂养方式
        }
      });
      // 级联选择器
      this.cascadePicker = this.$createCascadePicker({
        title: "Cascade Picker",
        data: this.cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle
      });
    },
    created() {
      this.selectIndex = this.$route.query.index;
      this.yname = this.$route.query.yname;
      this.orderid = this.$route.query.orderid;
      switch (this.$route.query.index) {
        case "b2":
          this.array = [
            { text: "抚触", value: "0" },
            { text: "被动操", value: "1" },
            { text: "音乐互动", value: "2" },
            { text: "儿歌", value: "3" },
            { text: "早教卡片", value: "4" }
          ];
          break;
        case "b3":
          this.array = [
            { text: "已护理 正常", value: "0" },
            { text: "已护理 部脱落后未愈合", value: "1" },
            { text: "已护理 脐部红肿", value: "2" },
            { text: "已护理 脓性分沁物", value: "3" },
            { text: "已护理 脐部炎症", value: "4" },
            { text: "其它", value: "5" }
          ];
          break;
        case "b4":
          this.array = [
            { text: "病理性黄疸", value: "0" },
            { text: "生理性黄疸", value: "1" },
            { text: "母乳性黄疸", value: "2" },
            { text: "其它", value: "3" }
          ];
          break;
        case "b5":
          this.array = [
            { text: "母乳喂养", value: "0" },
            { text: "人工喂养", value: "1" },
            { text: "辅食喂养", value: "2" }
          ];
          break;
        case "b7":
          this.array = [
            { text: "正常", value: "0" },
            { text: "湿疹", value: "1" },
            { text: "尿布疹", value: "2" },
            { text: "皮肤溃烂", value: "3" },
            { text: "蚊虫叮咬", value: "4" },
            { text: "过敏", value: "5" },
            { text: "其它", value: "6" }
          ];
          break;
        case "b8":
          this.cascadeData = [
            {
              value: "0",
              text: "正常"
            },
            {
              value: "1",
              text: "异常",
              children: [
                {
                  value: "绿色大便",
                  text: "绿色大便"
                },
                {
                  value: "血色大便",
                  text: "血色大便"
                },
                {
                  value: "泡沫状大便",
                  text: "泡沫状大便"
                },
                {
                  value: "奇臭大便",
                  text: "奇臭大便"
                },
                {
                  value: "发亮大便",
                  text: "发亮大便"
                },
                {
                  value: "蛋花样大便",
                  text: "蛋花样大便"
                },
                {
                  value: "豆腐渣样大便",
                  text: "豆腐渣样大便"
                },
                {
                  value: "水样大便",
                  text: "水样大便"
                },
                {
                  value: "黑便",
                  text: "黑便"
                }
              ]
            }
          ];
          break;
        case "b9":
          this.cascadeData = [
            {
              value: "0",
              text: "正常"
            },
            {
              value: "1",
              text: "异常",
              children: [
                {
                  value: "深黄色（茶色）",
                  text: "深黄色（茶色）"
                },
                {
                  value: "血尿",
                  text: "血尿"
                },
                {
                  value: "尿频",
                  text: "尿频"
                },
                {
                  value: "其它",
                  text: "其它"
                }
              ]
            }
          ];
          break;
        case "b12":
          this.array = [
            { text: "紫外线消毒", value: "0" },
            { text: "高温消毒", value: "1" },
            { text: "消毒器消毒", value: "2" }
          ];
          break;
        case "m2":
          this.array = [
            { text: "身体擦试", value: "0" },
            { text: "无伤口", value: "1" },
            { text: "伤口护理", value: "2" }
          ];
          break;
        case "m3":
          this.array = [
            { text: "乳房清洁", value: "0" },
            { text: "乳腺疏通", value: "1" },
            { text: "凹陷处理", value: "2" },
            { text: "皲裂处理", value: "3" },
            { text: "其它", value: "4" }
          ];
          break;
        case "m4":
          this.cascadeData = [
            {
              value: "0",
              text: "正常"
            },
            {
              value: "1",
              text: "异常",
              children: [
                {
                  value: "量太少、恶臭",
                  text: "量太少、恶臭"
                },
                {
                  value: "恶露不绝",
                  text: "恶露不绝"
                },
                {
                  value: "恶露不净",
                  text: "恶露不净"
                }
              ]
            }
          ];
          break;
        case "m8":
          this.array = [
            { text: "多次", value: "0" },
            { text: "两次", value: "1" },
            { text: "一次", value: "2" }
          ];
          break;
        case "m9":
          this.array = [
            { text: "妈妈", value: "0" },
            { text: "宝宝", value: "1" }
          ];
          break;
      }
      switch (this.$route.query.index) {
        case"b0":
          this.title = "宝宝体温";
          break;
        case"b1":
          this.title = "测量";
          break;
        case"b2":
          this.title = "早教启蒙";
          break;
        case"b3":
          this.title = "脐带护理";
          break;
        case"b4":
          this.title = "黄疸观察";
          break;
        case"b5":
          this.title = "喂养记录";
          break;
        case"b6":
          this.title = "沐浴";
          break;
        case"b7":
          this.title = "皮肤观察";
          break;
        case"b8":
          this.title = "大便观察";
          break;
        case"b9":
          this.title = "小便观察";
          break;
        case"b10":
          this.title = "睡眠观察";
          break;
        case"b11":
          this.title = "呼吸观察";
          break;
        case"b12":
          this.title = "奶具消毒";
          break;
        case"m0":
          this.title = "妈妈体温";
          break;
        case"m1":
          this.title = "做月子餐";
          break;
        case"m2":
          this.title = "身体护理";
          break;
        case"m3":
          this.title = "胸部护理";
          break;
        case"m4":
          this.title = "恶露观察";
          break;
        case"m5":
          this.title = "经络按摩";
          break;
        case"m6":
          this.title = "形体操指导";
          break;
        case"m7":
          this.title = "腹带塑身";
          break;
        case"m8":
          this.title = "清洗与消毒";
          break;
        case"m9":
          this.title = "用药记录";
          break;
        case"m10":
          this.title = "小儿推拿";
          break;
      }
      // 加载页面后清空数据
      this.baby_temperature = "";  // 清空 宝宝体温
      this.mm_temperature = "";  // 清空 妈妈体温
      this.head_circumference = "", // 头围
      this.baby_height = "", // 宝宝身高
      this.baby_weight = "", // 宝宝体重
      this.feeding_patterns = ""; // 清空喂养方式
      this.selected_value = ""; // 清空 单列选择器选中的值
      this.selected_object = ""; // 清空用药对象
      this.times = ""; // 清空记录次数
      this.MT = ""; // 清空年月日
      this.selectedTime = ""; // 清空起始时分
      this.start_time = ""; // 清空开始时间 时：分
      this.end_time = ""; // 清空结束时间 时：分
      this.other = ""; // 清除存储一级单选的值
      this.foodName = "", // 清除 食物名字
      this.use_level = "", // 清除 药品用量
      this.drug_name = "", // 清除 药品名称
      this.other = "", // 清除 用于临时存储一级级联的选项
      this.foodClass = "", // 清除 食物种类
      this.foodNumber = ""; // 清除 食物数量
      this.otherQuestions = ""; // 清除 其他情况描述
      // 设置默认时间
      var myDate = new Date(); //获取系统当前时间
      let thisYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      let thisMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      let thisDay = myDate.getDate(); //获取当前日(1-31)
      let thisHour = myDate.getHours(); //获取当前小时数(0-23)
      let thisMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
      this.MT = `${thisYear}-${thisMonth}-${thisDay}`; // 设置默认显示 年月日
      this.selectedTime = `${thisHour}:${thisMinutes}`; // 设置默认显示 时分
    }
  };
</script>

<style scoped>
    input {
        color: #808080;
        border: none;
        outline: none;
        background-color: #fafafa;
    }
    textarea{
        height: 160px;
        border: none;
        outline: none;
        background-color: #fafafa;
    }
    .baby-detail img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding-right: 10px;
    }

    .baby-detail .info-list li {
        height: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: 1px solid #8f8e8e;
        padding: 0 20px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: 14px;
    }

    .formula_total {
        background-color: #fbf1e7;
        height: 40px;
        line-height: 40px;
    }

    .formula_total img {
        width: 30px;
        height: 25px;
        margin-left: 20px;
    }

    .submit {
        font-size: 14px;
        background-color: #ea5a42;
        color: #ffffff;
        padding: 4px 5px;
        border-radius: 7px;
        position: fixed;
        top: 6px;
        right: 20px;
    }

    input {
        text-align: right;
    }
</style>
