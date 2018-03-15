/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */

'use strict';
$(function() {
	//让文档加载完成才会执行
	//获取屏幕的宽度
	//根据屏幕宽度的变化决定轮播图片应该展示什么
	function resize() {
		var windowWidth = $(window).width();
		//判断屏幕属于大还是小
		var isSmallScreen = windowWidth < 768;
		//根据大小为界面上的每一张轮播图设置背景
		$('#main_ad > .carousel-inner > .item').each(function(i, item) {
			var $item = $(item); //因为拿到的是DOM对象，需要转换
			//$element.data()
			//是一个函数，专门用于取元素上的自定义属性(data-abc)
			//函数的参数是我们要取得属性名称(abc)
			var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
			$item.css('backgroundImage', 'url("' + imgSrc + '")') //css里面将-改为驼峰
			//因为我们需要小图时  尺寸等比例变化，所以小图时使用img方式，其他用backgroundImage方式
			if(isSmallScreen) {
				$item.html('<img src="' + imgSrc + '" alt="" />');
			} else {
				$item.empty(); //因为一开始大屏幕图片是正常的，当调成小屏幕之后再拉成大屏幕，图片就有问题，此时需要清空之前添加的图片
			}
		});
	}
	//trigger让window对象立即触发一下resize
	$(window).on('resize', resize).trigger('resize');
	//初始化tooltips插件
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	})
	/**	
	 * 控制标签页的标签容器宽度
	 */
	var $ulContainer = $('.nav-tabs');  //这里不是$('.nav'),因为页面其他地方用到nav
	//获取所有子元素的宽度和
	var width = 30;  //因为原本ul有padding-left:20以及一些边框
	//遍历子元素
	$ulContainer.children().each(function(index,element){
//		console.log(element.clientWidth);
//		console.log($(element).width());
		width+=element.clientWidth;
	});
	//此时width等于所有li的总和
	//判断当前ul的宽度是否超出屏幕，如果超出就显示横向滚动条
	if(width>$(window).width()){
		$ulContainer
		.css('width',width)
		.parent().css('overflow-x','scroll');
	}
	
	//a点击注册事件
	//全局变量本地化
	var $newTitle = $('.news-title');
	$("#news .nav-pills a").on('click',function(){
		//获取当前点击元素
		var $this = $(this);
		//获取对应的title值
		var title = $this.data('title');
		//将title设置到相应的位置
		$newTitle.text(title);
	});
	
	//1.获取手指在轮播图元素上的一个滑动方向（左右）
	
	//比大小
	
	//获取界面上的轮播图容器
	var $carousels = $('.carousel');
	var startX,endX;
	var offset = 50;
	//注册滑动事件
	$carousels.on('touchstart',function(e){
		//手指触摸开始时记录一下手指所在的坐标x
		startX = e.originalEvent.touches[0].clientX;
	});
	
	$carousels.on('touchmove',function(e){
		//变量重复赋值
		endX = e.originalEvent.touches[0].clientX;
	});
	
	$carousels.on('touchend',function(e){
		//结束触摸一瞬间记录最后手指所在的坐标x
		endX = e.originalEvent.touches[0].clientX;
		//控制精度
		//获取每次运动的距离，当距离大于一定值时认为是有方向变化
		var distance = Math.abs(startX-endX);
		if(distance>offset){
			//有方向变化
			//2.根据获得到的方向选择上一张或者下一张
			//-$('a').click();
			//-原生的carousel方法实现
			$(this).carousel(startX > endX?'next':'prev');
		}
	});
	
});