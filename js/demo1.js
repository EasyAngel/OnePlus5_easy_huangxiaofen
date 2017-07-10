//导航部分     	   
//把鼠标放上购物车时弹出提示框
$(function(){
	$(".header .row .icons .glyphicon-shopping-cart").hover(function(){
		$(".shopping-cart-alert").css("display","block");
	},function(){
		$(".shopping-cart-alert").css("display","none");
	});
});

//点击显示隐藏框(隐藏导航)
$(document).ready(function() {
	$(".header .row .icons .glyphicon-align-justify").click(function() {
		$(".header .row .nav.menu").animate({width: 'toggle'});
	});
});
//<!--/*第六部分:关于方面:点击“一加产品，关于一加，服务支持”,点击下拉按钮时弹出隐藏的li里的内容*/-->
$(function(){
	$(".part6 .footer span").eq(0).click(function(){
		$(".row61").eq(0).slideToggle();
        $(".part6 .footer span h4").eq(0).toggleClass("glyphicon-menu-down");
        $(".part6 .footer span h4").eq(0).toggleClass("glyphicon-menu-up");       			
	});
});
$(function(){
    $(".part6 .footer span").eq(1).click(function(){
    	$(".row61").eq(1).slideToggle();
    	$(".part6 .footer span h4").eq(1).toggleClass("glyphicon-menu-down");
    	$(".part6 .footer span h4").eq(1).toggleClass("glyphicon-menu-up");
    });
});
$(function(){
    $(".part6 .footer span").eq(2).click(function(){
        $(".row61").eq(2).slideToggle();
        $(".part6 .footer span h4").eq(2).toggleClass("glyphicon-menu-down");
        $(".part6 .footer span h4").eq(2).toggleClass("glyphicon-menu-up");
    });
});
//点击"input框":请输入你要搜索的商品时收起
$(function(){
	$(".search-input-onclick").click(function(){
		$(".nav1").slideUp();
		$(".upposition").css("display","block");
		$(".search-input-onclick").css("position","relative");
        $(".search-input-onclick").css("margin-top","32px");
//       		$(".search-input-onclick").css("margin-left","8px");
        $(".upposition").css("margin-top","32px");
    });
});
$(function(){
    $(".upposition").click(function(){
        $(".nav1").slideDown();
        $(".upposition").css("display","none"); 
        $(".upposition").removeClass("glyphicon-menu-down");
        $(".upposition").addClass("glyphicon-menu-up");
    });
});
