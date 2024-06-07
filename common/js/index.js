$(function(){
	
	
	// fullpage js
	var myFullpage = $("#fullpage").fullpage({
		navigation: true,
		navigationPosition: "right",
		navigationTooltips: ["Home", "Reference", "Business", "Partners"], 
		showActiveTooltip: true,
		scrollOverflow:true,
		touchSensitivity: 20,
        autoScrolling: true,
		//normalScrollElements: ".report_slide",
		onLeave: function(origin, destination, direction){
			var windowWidth = $(window).width();
			$(window).resize(function(){
				if(windowWidth > 1279){
					if(destination == 2){
						$("body").addClass("blk");
						$("body").removeClass("textblk");
					}else if(destination == 3){
						$("body").removeClass("blk");
						$("body").removeClass("textblk");
					}else{
						$("body").removeClass("blk");
						$("body").removeClass("textblk");
					}
				}else{
					$("body").removeClass("blk");
					$("body").removeClass("textblk");
				}
			}).resize();
			if(destination >= 5){
				$(".top_btn").fadeIn();
                $('.section4 .arrow-area').fadeOut();
                $('.section4 .arrow-area-up').fadeOut();
			}else{
                $(".top_btn").fadeOut();
                $('.section4 .arrow-area').fadeIn();
                $('.section4 .arrow-area-up').fadeIn();
			}
		},
		/* section 변화 감지 */
		afterLoad: function(origin, destination, direction){
			if(destination === 2){ /* section2일 때 실행 */
				/* hambuger icon click event */
				$('.menu_trigger_wrap').click(function(){
					if($('.menu_trigger_wrap').hasClass('active')){
						$('.logo_white').css({
							display: 'block'
						});
						$('.logo_black').css({
							display: 'none'
						});
	
					}else if(destination === 3){
						$('.logo_white').css({
							display: 'none'
						});
						$('.logo_black').css({
							display: 'block'
						});
					}else {
						$('.logo_white').css({
							display: 'block'
						});
						$('.logo_black').css({
							display: 'none'
						});
					}
				});
				/* section scroll event */
				$(".section2").addClass("in-view");
				$('.logo_white').css({
					display: 'block'
				});
				$('.logo_black').css({
					display: 'none'
				});
			}else if(destination === 3){ /* section3일 때 실행 */
				$(".section3").addClass("in-view");
				$('.logo_white').css({
					display: 'none'
				});
				$('.logo_black').css({
					display: 'block'
				});
			}else if(destination === 4){ /* section4일 때 실행 */
				$(".section4").addClass("in-view");
				$('.logo_white').css({
					display: 'block'
				});
				$('.logo_black').css({
					display: 'none'
				});
			}else if(destination === 5){ /* section5일 때 실행 */
				$(".section5").addClass("in-view");
			}else {
				$('.logo_white').css({
					display: 'block'
				});
				$('.logo_black').css({
					display: 'none'
				});
			}
		}
	}); // end::fullpage js
	
	$(".top_btn").click(function(){
		$.fn.fullpage.moveTo(1);
	});

	//메인 슬라이드 SCROLL 버튼 
	$(".arrow-area").on("click", function(){
		$.fn.fullpage.moveSectionDown();
	});
	$(".arrow-area-up").on("click", function(){
		$.fn.fullpage.moveSectionUp();
	});


	//브라우저 리사이즈시 메인 슬라이드 조절
	$(window).resize(function(){
		var windowWidth = $(window).width(),
			 windowHeight = $(window).height(),
			 adjHeight = windowHeight;

		$(".main_slide").css({
			"width": windowWidth + "px",
			"height": adjHeight + "px"
		});
		
	}).resize();

    /* section2:: swiper js use */
    var reference01 = new Swiper("#reference01", {
        direction: "vertical",
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 2,
        speed: 2000,
		/* 반응형 옵션 */
		breakpoints: {
			768: {
				spaceBetween: 32,
			},
			481: {
				spaceBetween: 20,
			},
		}
    });
    var reference02 = new Swiper("#reference02", {
        direction: "vertical",
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
        },
        loop: true,
        loopedSlides: 2,
        speed: 2000,
		/* 반응형 옵션 */
		breakpoints: {
			768: {
				spaceBetween: 32,
			},
			481: {
				spaceBetween: 20,
			},
		}
    });
    /* section4:: swiper js use */
    var partners = new Swiper("#partners", {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		loopedSlides: 1,
		loopAdditionalSlides: 1,
        speed: 2000,
		autoplay: {
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
        },

		/* 반응형 옵션 */
		breakpoints: {
			481: {
				spaceBetween: 40,
			},
		},


		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});
/* ******************************************************************************** */