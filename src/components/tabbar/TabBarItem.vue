<template>
    <!-- 点击通过父传子的路由地址，绑定方法来跳转，
    绑定一个样式使用计算属性方法来动态改变选中的颜色 -->
      <div class="tab-bar-item" @click="itemClick" :class="{active: isActive}">
          <!-- 这里用两个具名插槽来，表示上图下字的结构 -->
          <slot name="item-icon"></slot>
          <slot name="item-text"></slot>
          <!-- <div class="icon iconfont icon-shouye"></div>
          <div>首页</div> -->
      </div>
    
</template>
<script>
export default {
    name:'TabBarItem',
    data(){
        return {
            // isActive:true
        }
    },
    props:{
        path:String     //父组件传过来的路由是字符串形式
    },
    computed:{        //使用计算属性方法来动态改变样式的显示隐藏
        isActive(){
            // 哪一个路由处于活跃，这个$route就指哪一个路由对象
            //如果等于-1说明没有找到false，不等于-1就说明找到了，就是true
            return this.$route.path.indexOf(this.path) != -1
        }
    },
    methods:{
        // 点击跳转路由方法
        itemClick(){
            if(this.$route.path !=this.path){ this.$router.replace(this.path)}
           
        }
    }
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size:15px;
  
}
.icon{
    font-size: 25px;
}
.active{
    color: blue;
}
</style>