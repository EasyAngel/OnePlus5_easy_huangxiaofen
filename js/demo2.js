	       /*滚动条定住*/
	        $(window).scroll(function(){
	        	if($(document).scrollTop()>=$('.header').height()){
	        		$('.navigation').addClass('navbar-fixed-top')
			}else{
				   $('.navigation').removeClass('navbar-fixed-top')
			 }
			})
	        
	        //第四部分:高清双摄（点击小横线切换内容)
	        $(function () {
				//$(".tab>li").first().addClass("active");
				$(".tabcontent>li").first().show();
				$(".tab-img>li").first().show();
				$(".tab>li").click(function () {
					//$(".tab>li").removeClass("active").eq($(this).index()).addClass("active");
				    $(".tabcontent>li").hide().eq($(this).index()).show();
				    $(".tab-img>li").hide().eq($(this).index()).show();
			})
		})