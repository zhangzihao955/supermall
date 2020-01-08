# tabbar-app
# 初始化项目，生成脚手架后，需要初始化
--src,是源码文件夹在源码文件夹下，有如下几个功能文件夹
--assets,是资源文件夹,放资源（把默认logo去掉）
  *在资源文件夹中，分别创建css和img文件夹放图片资源,fonts字体图标文件夹
  *在css文件夹中放入初始化样式base.css文件，
  *！样式的引入一般统一在App.bue文件中引用。
--compinents，是组件文件夹（把默认的组件删掉）
--router,是路由配置文件夹  （把默认的路由配置删除）
--views,是视图文件夹，也就是页面 （默认的两个视图删除）
--App.vue 是入口组件（个人理解） （默认的样式去掉）
--main.js，是入口文件js  （个人理解）  
# tabbar-app实现思路
1--自定义TabBar组件，在APP中使用
--让TabBar出于底部，并且设置相关的样式
2--TabBar中显示的内容由外界决定
--定义插槽
--flex布局平分TabBar
3--自定义TabBarItem小组件,可以传入图片和文字
--定义TabBarItem，并且定义两个插槽，上图片，下文字
--给两个插槽外层包装DIV，用于设置样式
--填充插槽，实现底部TabBar的效果
--使用了，父传子路径，通过点击事件，实现路由跳转
--使用了，在计算属性中用$route通过indexOf判断活跃路由的路径path
--是否含有当前路由的path，如果不等于-1就是ture,实现动态改变颜色
4--配置TabBar组件的四个视图路由
----------------------------------------------
字体图标使用方式，下载完成，放入资源文件夹下，在main.js中引入css文件，
在样式初始化文件中，设置子图样式，使用
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
