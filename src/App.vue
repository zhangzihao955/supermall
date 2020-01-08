<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>      <!-- 使用tabbar组件 -->
      <tab-bar-item path='/home'>
           <div slot="item-icon" class="icon iconfont icon-shouye"></div>
          <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item  path='/category'>
         <div slot="item-icon" class="icon iconfont icon-leimupinleifenleileibie2"></div>
          <div slot="item-text">分类</div> 
      </tab-bar-item>
      <tab-bar-item  path='/cart'>
         <div slot="item-icon" class="icon iconfont icon-gouwuche4"></div>
          <div slot="item-text">购物车</div> 
      </tab-bar-item>
      <tab-bar-item  path='/profile'>
         <div slot="item-icon" class="icon iconfont icon-wode"></div>
          <div slot="item-text">我的</div> 
      </tab-bar-item>
    </tab-bar> 
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar"    //引入TabBar组件
import TabBarItem from "./components/tabbar/TabBarItem"//引入的是tabbar小组件
export default {
  name:'App',
  components:{
  TabBar,    //注册tabbar组件
  TabBarItem
  }
}
</script>
<style>
/* 在style中引入初始化样式有固定的格式@import */

@import "./assets/css/base.css";  /*引入初始化样式*/


</style>
