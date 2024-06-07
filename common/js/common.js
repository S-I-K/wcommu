$(function(){
	// 전체메뉴
	btnchk = 0;

	var ww = $(window).width();

	/* window width가 1279px 보다 클 때 실행 */
	if(ww > 1200){
		$(".menu_trigger_wrap").click(function(){
			if(btnchk == 0){
				$("#header .all_nav").addClass("on");
				$("#menu_bg").fadeIn();
				btnchk = 1;
			}else{		
				$("#header .all_nav").removeClass("on");
				btnchk = 0;
			}
		})
	/* window width가 1279px 보다 작을 때 실행 */
	}else{
		$(".menu_trigger_wrap").click(function(){
			if(btnchk == 0){
				$("#header .all_nav").addClass("on");
				$("#menu_bg").fadeIn();
				btnchk = 1;
			}else{		
				$("#header .all_nav").removeClass("on");
				btnchk = 0;
			}
		})
	}



	$(".all_nav_close, #menu_bg").click(function(){
		$(".menu-trigger").removeClass("active");
		$("#menu_bg").fadeOut();
		btnchk = 0;
	});

    $('.menu_trigger_wrap').click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('#menu_bg').stop().fadeIn(1000);
        }else{
            $('#menu_bg').stop().fadeOut(1000);
        }
    });

	// LANGUAGE 메뉴 슬라이드 다운
	$(".lang_menu").click(function(){
		$(this).toggleClass("on");
		$(this).find("ul").slideToggle();
	});
});