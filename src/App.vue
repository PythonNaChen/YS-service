<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import tabBar from './components/tabbar'
  export default {
    name: 'app',
    components:{
      tabBar
    },
    created() {
      this.$router.push("/home");
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  /*banner*/
  .el-carousel__container {
    height: 4.65rem !important;
  }

  /* cube-ui 错误提示 样式调整 图标上移*/
  .cube-toast-icon {
    margin-top: -10px;
  }

  /* 日历 */
  .wh_content_all {
    background-color: #fff !important;
  }

  .wh_content_item {
    margin-bottom: 5px !important;
    margin-right: 3px !important;
  }
  /* 当天 */
  .wh_isToday{
    background-color: unset !important;
  }
  /* 左右翻页箭头 */
  .wh_jiantou1 {
    border-top: 2px solid #2b66ef !important;
    border-left: 2px solid #2b66ef !important;
  }

  .wh_jiantou2 {
    border-top: 2px solid #2b66ef !important;
    border-right: 2px solid #2b66ef !important;
  }

  .wh_top_changge li {
    color: #5e7a88 !important;
  }

  /* 周一到周日的标签*/
  .wh_top_tag {
    color: #e38a7b !important;
  }

  /* 天数 */
  .wh_item_date {
    color: #585858 !important;
    border-radius: 50%;
    border: 0.1rem solid #ea5a43 !important;
  }

  /*隐藏的上下月天数*/
  .wh_content_item .wh_other_dayhide {
    color: #bfbfbf !important;
    background-color: #fff !important;
    border: none !important;
  }

  /* 休息 */
  .rest {
    background-color: #fff !important;
    color: #585858 !important;
    border: 0.1rem solid #ea5a43 !important;
  }

  /* 可预约 */
  .reservable {
    color: #585858 !important;
    border: 0.1rem solid #ccc !important;
    background-color: #fff !important;
  }

  /* 已安排 */
  .arranged {
    background-color: #ea5a43 !important;
    color: #fff !important;
    border-radius: 50%;
  }
</style>
