<template>
    <div id="tab-bar">     <!--是唯一的所以起了个id名/-->
      <!-- <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div> -->
      <!-- 这里放个插槽，在app.vue展示时用来放每一个小插槽 -->
      <slot></slot>  
    </div>
</template>
<script>
export default {
    name:'TabBar',
    components:{

    }
}
</script>
<style scoped>

#tab-bar{
  display: flex;
  background:#f6f6f6;
  position:fixed;  /*固定定位，left.right,=0,沾满整个屏幕*/
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1); /*上边阴影平滑过渡 */
}

</style>