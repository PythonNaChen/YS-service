<template>
    <div class="page">
        <p>正在加载客服会话 ...</p>
    </div>
</template>

<script>
  export default {
    name: "online_consulting",
    created(){
      window.location.href = 'https://det.zoosnet.net/LR/Chatpre.aspx?id=DET73714216&lng=cn'
    }
  }
</script>

<style scoped lang="less">
    .page {
        text-align: center;
        margin-top: 40%;
        font-size: 0.5rem;
    }
</style>
