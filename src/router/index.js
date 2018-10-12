import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

// tabBar 选项
const home = r => require.ensure([], () => r(require("@/pages/home.vue")), "home");// 登录页
const mima_classroom = r => require.ensure([], () => r(require("@/pages/mima_classroom.vue")), "mima_classroom");// 咪嘛课堂
const online_consulting = r => require.ensure([], () => r(require("@/pages/online_consulting.vue")), "online_consulting");// 在线咨询
const mine = r => require.ensure([], () => r(require("@/pages/mine.vue")), "mine");// 用户页


// 登录页
const login = r => require.ensure([], () => r(require("@/pages/login.vue")), "login");
// 日志记录
const logs_record = r => require.ensure([], () => r(require("@/pages/logs_record.vue")), "logs_record");
// 日志记录 --->  数据填写
const dataDetail = r => require.ensure([], () => r(require("@/pages/dataDetail.vue")), "dataDetail"); // 数据详情页
const collection = r => require.ensure([], () => r(require('@/pages/collection.vue')), 'collection'); // 月嫂详情页
const order_list = r => require.ensure([], () => r(require('@/pages/order_list.vue')), 'order_list'); // 月嫂详情页

// 护理员档期
const schedule = r => require.ensure([], () => r(require('@/pages/schedule.vue')), 'schedule');
// 订单报名
const detail_list = r => require.ensure([], () => r(require('@/pages/detail_list.vue')), 'detail_list');
// 订单详情
const orderDetails = r => require.ensure([], () => r(require('@/pages/orderDetails.vue')), 'orderDetails');
// 报名
const signUp = r => require.ensure([], () => r(require('@/pages/signUp.vue')), 'signUp');
// 课堂内容详情页
const article = r => require.ensure([], () => r(require('@/pages/article.vue')), 'article');

export default new Router({
  routes: [
    // tabBar 首页
    {
      path: "/home",
      name: "home",
      component: home
    },
    // 首页 --> 月嫂详情 + 档期
    {
      path: '/collection',
      name: 'collection',
      component: collection,
    },
    // tabBar 咪嘛课堂
    {
      path: "/mima_classroom",
      name: "mima_classroom",
      component: mima_classroom
    },
    // tabBar 在线咨询
    {
      path: "/online_consulting",
      name: "online_consulting",
      component: online_consulting
    },
    // tabBar 我的
    {
      path: "/mine",
      name: "mine",
      component: mine
    },
    // 登陆页
    {
      path: "/login",
      name: "login",
      component: login
    },
    // 日志记录
    {
      path: "/logs_record",
      name: "logs_record",
      component: logs_record
    },
    // 数据详情
    {
      path: "/dataDetail",
      name: "dataDetail",
      component: dataDetail
    },
    // 数据详情
    {
      path: "/order_list",
      name: "order_list",
      component: order_list
    },
    // 护理员档期
    {
      path: "/schedule",
      name: "schedule",
      component: schedule
    },
    // 订单报名
    {
      path: "/detail_list",
      name: "detail_list",
      component: detail_list
    },
    // 订单详情
    {
      path: "/orderDetails",
      name: "orderDetails",
      component: orderDetails
    },
    // 报名
    {
      path: "/signUp",
      name: "signUp",
      component: signUp
    },
    // 报名
    {
      path: "/article",
      name: "article",
      component: article
    },
  ]
});
