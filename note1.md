# 微金所项目实战

## 1. 搭建Bootstrap页面骨架及项目目录结构

```
├─ /weijinsuo/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 1.1.约定编码规范

#### 1.1.1.HTML约定

- 在head中引入必要的CSS文件，优先引用第三方的CSS，方便我们自己的样式覆盖
- 在body末尾引入必要的JS文件，优先引用第三方的JS，注意JS文件之间的依赖关系，比如bootstrap.js依赖jQuery，那就应该先引用jquery.js 然后引用bootstrap.js

#### 1.1.2.CSS约定

- 除了公共级别样式，其余样式全部由 模块前缀
- 尽量使用 直接子代选择器， 少用间接子代 避免错杀



### 1.2.HTML5文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
<body>
  
</body>
</html>
```

### 1.3.Viewport设置

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
```

> html中插入视口设置，可以通过emmet __meta:vp__ 插入

### 1.4.浏览器兼容模式

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

> html中插入兼容模式设置，可以通过emmet __meta:compat__ 插入

### 1.5.favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

> html中插入图标链接，可以通过emmet __link:favicon__ 插入

### 1.6.引入相应的第三方文件

```html
<link rel="stylesheet" href="bootstrap.css">
<link rel="stylesheet" href="my.css">
...
<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="my.js"></script>
```

### 1.7.在我们默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue", 
                Helvetica, 
                Microsoft Yahei, 
                Hiragino Sans GB, 
                WenQuanYi Micro Hei, 
                sans-serif;
}
```

## 2.完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况

```html
<body>
  <!-- 头部区域 -->
  <header></header>
  <!-- /头部区域 -->
  <!-- 广告轮播 -->
  <section></section>
  <!-- /广告轮播 -->
  <!-- 特色介绍 -->
  <section></section>
  <!-- /特色介绍 -->
  <!-- 立即预约 -->
  <section></section>
  <!-- /立即预约 -->
  <!-- 产品推荐 -->
  <section></section>
  <!-- /产品推荐 -->
  <!-- 新闻列表 -->
  <section></section>
  <!-- /新闻列表 -->
  <!-- 合作伙伴 -->
  <section></section>
  <!-- /合作伙伴 -->
  <!-- 脚注区域 -->
  <footer></footer>
  <!-- /脚注区域 -->
</body>
```

## 3.构建顶部通栏

```html
<header>
  <div class="topbar"></div>
</header>
```

### 3.1.container类

- 用于定义一个固定宽度且居中的版心

```html
<div class="topbar">
  <div class="container">
    <!--
      此处的代码会显示在一个固定宽度且居中的容器中
      该容器的宽度会跟随屏幕的变化而变化
    -->
  </div>
</div>
```

### 3.2.栅格系统

- Bootstrap中定义了一套响应式的网格系统，
- 其使用方式就是将一个容器划分成12列，
- 然后通过col-xx-xx的类名控制每一列的占比

#### 3.2.1.row类

- 因为每一个列默认有一个15px的左右外边距
- row类的一个作用就是通过左右-15px屏蔽掉这个边距

```html
<div class="container">
  <div class="row"></div>
</div>
```

#### 3.2.2.col-*\*-\*类

- col-xs-[列数]：在超小屏幕下展示几份
- col-sm-[列数]：在小屏幕下展示几份
- col-md-[列数]：在中等屏幕下展示几份
- col-lg-[列数]：在大屏幕下展示几份
- __xs__ : 超小屏幕 手机 (<768px)  
- __sm__ : 小屏幕 平板 (≥768px) 
- __md__ : 中等屏幕 桌面显示器 (≥992px) 
- __lg__ : 大屏幕 大桌面显示器 (≥1200px)

```html
<div class="row">
  <div class="col-md-2 text-center"></div>
  <div class="col-md-5 text-center"></div>
  <div class="col-md-2 text-center"></div>
  <div class="col-md-3 text-center"></div>
</div>
```

> 此处顶部通栏已经被划分成四列
> text-center的作用就是让内部内容居中显示

### 3.3.字体图标

```css
@font-face {
  font-family: 'itcast';
  src: url('../font/MiFie-Web-Font.eot') format('embedded-opentype'), url('../font/MiFie-Web-Font.svg') format('svg'), url('../font/MiFie-Web-Font.ttf') format('truetype'), url('../font/MiFie-Web-Font.woff') format('woff');
}

[class^="icon-"],
[class*=" icon-"] {
  /*注意上面选择器中间的空格*/
  /*我们使用的名为itcast的字体就是上面的@font-face的方式声明的*/
  font-family: itcast;
  font-style: normal;
}

.icon-mobilephone::before{
  content: '\e908';
}
```
>因为字体图标的编码推荐用content的方式加进来，所以用伪标签::before
```html
<div class="col-md-2 text-center">
  <a class="mobile-link" href="#">
    <i class="icon-mobile"></i>
    <span>手机微金所</span>
    <!-- 这里使用的是bootstrap中的字体图标 -->
    <i class="glyphicon glyphicon-chevron-down"></i>
    <img src="..." alt="">
  </a>
</div>
```

#### 字体文件格式

- eot : embedded-opentype
- svg : svg
- ttf : truetype
- woff : woff

### 3.4.hover图片展示

```css
.mobile-link:hover > img {
  display: block;
}
```

### 3.5.按钮样式生成

- http://blog.koalite.com/bbg/
- 可以通过界面生成一个新的按钮样式
>a.btn.btn-danger.btn-sm  (<a href="#" class="btn btn-itcast btn-sm">)同时注意bootstrap中按钮除了用button(跳转，需要js,麻烦),也可以用a。btn-sm(小一点的按钮)
```css
.btn-itcast {
  color: #ffffff;
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast:hover,
.btn-itcast:focus,
.btn-itcast:active,
.btn-itcast.active,
.open .dropdown-toggle.btn-itcast {
  color: #ffffff;
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast:active,
.btn-itcast.active,
.open .dropdown-toggle.btn-itcast {
  background-image: none;
}

.btn-itcast.disabled,
.btn-itcast[disabled],
fieldset[disabled] .btn-itcast,
.btn-itcast.disabled:hover,
.btn-itcast[disabled]:hover,
fieldset[disabled] .btn-itcast:hover,
.btn-itcast.disabled:focus,
.btn-itcast[disabled]:focus,
fieldset[disabled] .btn-itcast:focus,
.btn-itcast.disabled:active,
.btn-itcast[disabled]:active,
fieldset[disabled] .btn-itcast:active,
.btn-itcast.disabled.active,
.btn-itcast[disabled].active,
fieldset[disabled] .btn-itcast.active {
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast .badge {
  color: #E92322;
  background-color: #ffffff;
}
```

### 3.5小屏幕隐藏

```html
<div class="topbar hidden-xs hidden-sm"></div>
```

或者

```html
<div class="topbar visible-md visible-lg"></div>
```

- __hidden-xx__ : 在某种屏幕下隐藏 
- __visible-xx__ : 在某种屏幕尺寸下显示
	+ visible-xx-xx：最后一个xx是决定显示时的display到底是啥
## 4.导航通栏

- 在使用了boostrap过后，大多数界面元素都是通过bootstrap提供好的界面组件修改得来

```html
<nav class="navbar navbar-itcast navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <button id="btn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav_list" aria-expanded="false">
        <span class="sr-only">切换菜单</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <i class="icon-icon"></i>
        <i class="icon-logo"></i>
      </a>
    </div>
    <div id="nav_list" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">我要投资</a></li>
        <li><a href="#">我要借款</a></li>
        <li><a href="#">平台介绍</a></li>
        <li><a href="#">新手专区</a></li>
        <li><a href="#">最新动态</a></li>
        <li><a href="#">微论坛</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right hidden-sm">
        <li><a href="#">个人中心</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### 4.1.Bootstrap扩展

- 通过bootstrap文档对导航条样式的设置发现，其实本身是有一个类似于主题的概念
- navbar-default：默认的外观
- navbar-inverse：暗色背景的样式
- 所以我们希望可以通过自定义一套完整的风格：
  + navbar-itcast
>bbg网站-->bootstrap button  genertor（bootstrap按钮生成器）.
Bootstrap扩展这一段就是利用这个网站生成的。（另外一个自己按照bootstrap添加类样式的方法就是将bootstrap.css中的btn-default整段复制粘贴到main.css中，然后自己将其替换成btn-itcast）
制作字体图标：https://icomoon.io(可以将svg图片做成字体图标)
```css
.navbar-itcast{
  ...
}
...具体代码参考navbar-default实现即可
```

### 4.2.品牌logo

- 任然使用字体图标

### 4.3.菜单行高调整

- 默认样式中菜单的行高为20px，我们可以调整为自己想要的高度
- 一般都是通过自己的样式去覆盖

## 5.轮播图

### 5.1.Bootstrap JS插件使用
- 在一个较小屏幕下展示一个超宽的图片，想让图片居中显示
  + 背景图
  + position:absolute 、left: 50%  ;margin-left: -width/2
> 对于Bootstrap的JS插件，我们只需要将文档实例中的代码粘到我们自己的代码中
> 让后作出相应的样式调整

#### 5.1.1.Bootstrap中轮播图插件叫作Carousel

#### 5.1.2.基本的轮播图实现

```html
<!-- 
  以下容器就是整个轮播图组件的整体，
  注意该盒子必须加上 class="carousel slide" data-ride="carousel" 表示当前是一个轮播图
  bootstrap.js会自动为当前元素添加图片轮播的特效
-->
<div id="轮播图的ID" class="carousel slide" data-ride="carousel">
  <!-- ol标签是图片轮播的控制点 -->
  <ol class="carousel-indicators">
    <!-- 
      每一个li就是一个单独的控制点
        data-target属性就是指定当前控制点控制的是哪一个轮播图，其目的是如果界面上有多个轮播图，便于区分到底控制哪一个
        data-slide-to属性是指当前的li元素绑定的是第几个轮播项
      注意，默认必须给其中某个li加上active，展示的时候就是焦点项目
    -->
    <li data-target="#轮播图的ID" data-slide-to="0" class="active"></li>
    <li data-target="#轮播图的ID" data-slide-to="1"></li>
    <!-- ...更多的 -->
  </ol>
  <!-- 
    .carousel-inner是所有轮播项的容器盒子，
    注意role="listbox"代表当前div是一个列表盒子，作用就是给当前div添加一个语义
  -->
  <div class="carousel-inner" role="listbox">
    <!-- 每一个.item就是单个轮播项目，注意默认要给第一个轮播项目加上active，表示为焦点 -->
    <div class="item active">
      <!-- 轮播项目中展示的图片 -->
      <img src="example.jpg" alt="示例图片">
      <div class="carousel-caption">
        <!-- 标题或说明性文字，如果不需要，直接删除当前div.carousel-caption -->
      </div>
    </div>
    <div class="item">
      <!-- ... -->
    </div>
    <!-- ... -->
  </div>
  <!-- 图片轮播上左右两个控制按钮，分别点击可以滚动到上一张和下一张 -->
  <!-- 此处需要注意的是 该a链接的href属性必须指向需要控制的轮播图ID -->
  <!-- 另外a链接中的data-slide="prev"代表点击该链接会滚到上一张，如果设置为next的话则相反 -->
  <a class="left carousel-control" href="#轮播图的ID" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">上一张</span>
  </a>
  <a class="right carousel-control" href="#轮播图的ID" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">下一张</span>
  </a>
</div>
```

#### 5.1.3.由于轮播图片超宽造成的影响

- 美工为了在不同屏幕下更好地展示将图片两边做的非常宽，但是我们大多数情况的页面宽度都无法满足这样的图片宽度
- 而且Bootstrap的样式中默认将图片的max-width设置为100%；
- 造成界面图片缩放
- 想在一个较小屏幕下展示一个超宽的图片，并让图片居中显示
  + 两种办法：
    * 换用背景图的方式，background-position: center center;
    * 使img元素绝对定位，left:50%，margin-left: -width/2

### 5.2.background使用

- 将容器的高度固定（410px）
- 将轮播图改为背景显示
- 由于可能图片的高度不一定是410px
- 所以需要设置css3中的background-size

#### 5.2.1.background-size

- length
  + 如 background-size: 100px 100px，将背景图固定到多大尺寸
- percentage
  + 如 background-size: 90% 90%，以百分比的形式设置背景大小
- cover
  + 1.背景图片等比例缩放
  + 2.让背景图相对较小边放大到目标容器大小结束
    * 如：一张100\*200的背景图放到一个300\*400的盒子中，最终背景图片的大小是300\*600
    * 因为背景图的较小边为100，将100放大到目标容器300的宽度，放大了3倍，最终结果300\*600(因为是等比例缩放)
- contain
  + 1.背景图片等比例缩放
  + 2.让背景图相对较大边放大到目标容器大小结束
    * 如：一张100\*200的背景图放到一个300\*400的盒子中，最终背景图片的大小是200\*400
    * 因为背景图的较大边为200，将200放大到目标容器400的高度，放大了2倍，最终结果200\*400

##### demo

###### cover

<div style="width: 400px;height: 200px;border:1px dashed #c0c0c0;background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTUxOWU5ZmNjZDAgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTE5ZTlmY2NkMCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+');background-repeat:no-repeat;background-size: cover;"></div>

###### contain


<div style="width: 400px;height: 200px;border:1px dashed #c0c0c0;background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTUxOWU5ZmNjZDAgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTE5ZTlmY2NkMCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+');background-repeat:no-repeat;background-size: contain;"></div>

### 5.3.图片响应式

- 目的
  + 各种终端都需要正常显示图片
  + 移动端应该使用更小（体积）的图片
- 实现方式
  + 将元素中直接设置的图片背景删除，换成两个data-属性（如：data-img-sm="小图路径"，data-img-lg="大图路径"）
  + 通过JS的方式获取屏幕的宽度；
  + 判断屏幕宽度是否小于一定的值（如：768）
  + 根据判断情况决定使用具体的大图还是小图

```javascript
// 获取屏幕宽度
var windowWidth = $(window).width();
// 判断屏幕属于大还是小
var isSmallScreen = windowWidth < 768;
// 根据大小为界面上的每一张轮播图设置背景
// $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
$('#main_ad > .carousel-inner > .item').each(function(i, item) {
  // 因为拿到是DOM对象 需要转换
  var $item = $(item);
  // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
  var imgSrc =
    isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

  // 设置背景图片
  $item.css('backgroundImage', 'url("' + imgSrc + '")');
});
```

### 5.4.window resize事件

- 由于上一步我们实现的过程是指在页面加载完成判断一次，
- 当用户手动调整页面宽度过后没有及时发生变化，
- 所以我们可以通过window的resize事件中重新完成以上操作来解决这个问题

```javascript
function 窗口变化后执行的函数名(){
  // 具体的操作
}
$(window).on('resize', 窗口变化后执行的函数名);
```

- 这个事件只会在窗口尺寸发生变化后执行，但是我们需要一开始时执行一次

```javascript
...
$(window).on('resize', 窗口变化后执行的函数名).trigger('resize');
```

### 5.5.小图片不需要使用背景的方式

- 小图如果还是使用背景的方式，当屏幕特别小时，效果很差
- 所以当使用小图时，改用img的方式

```javascript
// 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
if (isSmallScreen) {
  $item.html('<img src="' + imgSrc + '" alt="" />');
} else {
  $item.empty();
}
```

- 按照目前的情况，如果是小图展示则不需要给容器加上410px的固定高度
- 所以我们可以通过CSS媒体查询的方式解决

```css
#main_ad > .carousel-inner > .item {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media (min-width: 768px) {
  #main_ad > .carousel-inner > .item {
    height: 410px;
  }
}
#main_ad > .carousel-inner > .item > img {
  width: 100%;
}
```

## 6.网站特性

### 6.1.网格系统

- 该板块当屏幕为中等尺寸时分为3列，较小屏幕是分为2列
- 所以使用网格系统划分

```html
<div class="col-sm-6 col-md-4">
  <!-- ... -->
</div>
<!-- ... -->
```

### 6.2.媒体对象样式

- 每一个小块的样式可以通过Bootstrap中的媒体对象样式实现

```html
<a href="#">
  <div class="media">
    <div class="media-left">
      <i class="icon-uniE907"></i>
    </div>
    <div class="media-body">
      <h4 class="media-heading">支付交易保障</h4>
      <p>银联支付全称保证支付安全</p>
    </div>
  </div>
</a>
```

### 6.3.响应式辅助类型

- 整个板块在超小屏幕下是隐藏起来的
  + 只需要给当前板块加上hidden-xs的class

## 7.预约投标

### 7.1.pull-left

- 左边文字段落

### 7.2.pull-right

- 右边文字段落

## 8.投资产品

### 8.1.Tab选项卡

> 选项卡功能可以通过Bootstrap中提供的相应组件实现
> http://v3.bootcss.com/javascript/#tabs

```html
<div class="container">
  <!-- 所有的选项卡标签，每个标签点击分别对应面板展示出来 -->
  <ul class="nav nav-tabs" role="tablist">
    <!-- 
      下面的li定义了一个选项卡的标签，其中a标签的href属性指向的就是对应要展开的面板ID
      aria-controls属性是说当前a链接控制的是哪个元素（注意此属性和功能无关，只是语义）
      注意一定要给a标签加上data-toggle="tab"，如果不加则boostrap无法知道这是一个选项卡标签，也就不会有相应的效果
    -->
    <li role="presentation" class="active"><a href="#第一个标签的ID" aria-controls="第一个标签的ID" role="tab" data-toggle="tab">标签页1</a></li>
    <li role="presentation"><a href="#第二个标签的ID" aria-controls="第二个标签的ID" role="tab" data-toggle="tab">标签页2</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <!-- .tab-pane定义当前是一个tab面板，通过id和选项卡标签关联起来 -->
    <div role="tabpanel" class="tab-pane active" id="第一个标签的ID">
      <!-- 标签展开后的内容 -->
    </div>
    <div role="tabpanel" class="tab-pane" id="第二个标签的ID">...</div>
  </div>
</div>
```

### 8.2.网格系统

- 和网站特色板块的网格系统定义一样

### 8.3.::before ::after

```css
.panel-czbk > .panel-heading::before,
.panel-czbk > .panel-heading::after {
  content: ' ';
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  position: absolute;
}

.panel-czbk > .panel-heading::before {
  top: -8px;
  left: -8px;
}

.panel-czbk > .panel-heading::after {
  bottom: -8px;
  left: -8px;
  box-shadow: 0 2px 1px #ccc inset;
}
```

### 8.5.tooltip插件

- 注意，bootstrap中的tooltip插件必须通过js方式初始化

### 8.6.选项卡标签横向滚动
>不设置ul宽度时，选项卡在移动端会换行（左浮动），可以通过给其设置宽度控制在一行。
1. 要给ul加一个容器，这个容器有横向滚动条
2. 动态设置ul的宽度，宽度是根据内容大小决定的
  width= sum (li.width)

## 9.新闻资讯

### 9.1.Tab选项卡



### 9.2.响应式偏移



## 10.合作伙伴

### 10.1.相邻兄弟选择器



## 11.登录对话框

### 11.1模态框



### 11.2表单样式



## 12.导航吸顶

### 12.1.affix组件
>data-spy="affix"
>data-offset-top="什么位置出现"
>data-offset-bottom="什么位置消失"


## 13.深度自定义

### 13.1.http://v3.bootcss.com/customize

### 13.2.通过 Less 文件修改

## 14.version 4
http://www.cnblogs.com/micua/p/bootstrap-version4-alpha.html

## 15.小知识
```html
###1.相互之间没有牵连的块  用section
###2.固定宽度且居中版心用container
###3.i标签属于轻量级标签(斜体，所以要font-style: normal),用给字体图标
###4.ul里面常用的+号选择器（做列表分割线)
###5.一般还会单独给a元素添加字体样式（颜色），因为它特殊，不受父级元素样式的影响。
###6.navbar-brand习惯放在a标签里面
###7.vertical-align:middle(文字对齐方式)基线对齐
###8.画画中选择Webdings/Wingdings字体，写出的字母就是图(点击A,然后画一个文本框，然后可以选择字体)
###9.字体图标：可以修改颜色、不失真（矢量图)
###10.建议不要用替换来修改，因为不可逆，还是选中所有（有快捷键）再修改。
###11.可以在浏览器的控制台微调样式，然后复制粘贴回源代码.如果代码修改的多，建议用谷歌浏览器开发工具-->sources-->Add folder to workspace-->map to network resource
###12.★注意：【改样式在-itcast中间改】另外，控制台调试技巧：<a href=""></a>在此行上面右键单击，可以调到元素hover状态，这样就可以快速在右边找到元素hover时对应的样式，从而进行修改。(之后记得取消hover状态)
###13.color:transparent(#fff)透明色
###14.汉堡菜单(响应式菜单)：data-toggle(数据标识功能)="collapse"(展开收起)  注意这里的data-target
###15.css选择器[class^="icon-"],[class*=" icon-"]
###16.有图片背景没元素撑不开div
###15.外观固定不变的样式写在css样式中，与内容相关的写在行内（html）比较多
###16.右上角--->settings--->disable javascript(禁用js)
###17.很多网站还是用a包div的用法
###18.::before和::after效果一样
###19.h1标签确保每个页面有且只有一个
###20.role属性只和语言相关，和具体功能无关
###21.布局：随着屏幕缩放，左边块高宽改变，右边高宽不变。方法:右边右浮动且固定宽度-->左边会顶上去，然后设置左块margin-right:宽度值
###22.badge--->类似qq信息提示几条的小红圆球
###23.一般有hover效果的，用a或者button标签
###24./*因为绝对定位后元素没有宽度，但是后面需要其居中，所以给其设定宽度100%,，从而使text-align:center生效*/
###25.有时候不需要全部复制bootstrap里面的内容，可以只复制起作用的类，然后给元素标签即可。eg:data-toggle、data-target
###26.jquery追加元素（eg:点击按钮时跳出弹框）时默认把元素与元素之间的回车换行、空白字符全部删掉。html则不同（解决这方面的问题，父类设置font-size:0,子类如有文字，再单独设置font-size）
###27.child是单数   children是复数
###28.现在很多网站多用padding而不是margin,打造大网页。
###29.注意#news .news-title和#news>.news-title的区别，后者是直接子代，中间不能有其他类
###30.设置pc和移动端网页时，目前不用考虑太多测试人员会去执行的操作，即完成普通用户需要的效果即可
###31.运用bootstrap组件时，可能需要某个类的一些格式效果，可以复制这些类名，如果同时还有其他效果，也可以复制那些类叠加到上面，总结：取起作用效果的类。
###32.选择器越清晰，权重越高
###33.移动端和pc界面放小的区别
###34.★data-abc   [***.data('abc')](取值)
###35.ul(无序)、ol(有序，比如轮播图里面的小圆点)
###36.移动端适配(轮播图手机端用手指滑动)
###37.windows 10自带的PowerShell和dos命令窗口一样的，较好用。黑窗口可以在标题栏那里单击选择“粘贴”选项。D:(切换到D盘)；cd D:\nodejs   bootstrap.less为入口文件，自定义之后只需要将bootstrap.less编译成css即可。
###38.写文件名时最好由数字，英文字母，下划线组成，黑窗口对于有空格的路径，需要给路径打上双引号
```

```html
<header>
<div class="topbar">
<div class="container"></div>
</div>
<div class="navbar"></div>
</header>
```