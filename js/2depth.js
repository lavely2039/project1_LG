$(function(){
	var $firstMenu = $('nav > ul > li > ul > li'),
			$header_wrap = $('nav.menus > ul > li');
	
	$firstMenu.mouseover(function(){
		$header_wrap.stop().animate({height:'300px'},300);
	})
	.mouseout(function(){
		$header_wrap.stop().animate({height:'100px'},300);
	})
})