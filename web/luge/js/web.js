$(function(){

    // topBtn 
    $("#topBtn").click(function() { 
        $('html, body').animate({ scrollTop : 0
        }, 400); 
        return false; 
    }); 

    // sideBtn 
    $('.side-btn').click(function() {
        $('.sitemap').addClass('show');		
        $('html, body').addClass('ov');
    });

    $('.close-btn').click(function() {
        $('.sitemap').removeClass('show');
        $('html, body').removeClass('ov');
    });

    $('.sitemap-nav > li a').click(function(){
        let $contents=$(this).next();
        $contents.slideToggle();
    });
    

    //slider
    var slider = new Swiper(".slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 37000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".main-visual .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main-visual .swiper-btn-next",
            prevEl: ".main-visual .swiper-btn-prev",
        },
        loop: true,
        pagination: {
            el: ".main-visual .swiper-count",
            type: "fraction",
            formatFractionCurrent: function(number) {
                return '0' + number;
            },
            formatFractionTotal: function(number) {
                return '0' + number;
            },
        },
        on: {
            init: function() {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').addClass('animate');
            },
            slideChangeTransitionStart: function() {
                $('.swiper-progress-bar').removeClass('animate');
            },
            slideChangeTransitionEnd: function() {
                $('.swiper-progress-bar').addClass('animate');
            },
        },
    });
    
    $('.pause').click(function() {
        slider.autoplay.stop();
        $('.animate').css('animation-play-state', 'paused');
    });

    $('.play').click(function() {
        slider.autoplay.start();
        $('.animate').css('animation-play-state', 'running');
    });


    //slider-schedule
    var schedule = new Swiper(".slider-schedule", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop:true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".tab1 .swiper-btn-next",
          prevEl: ".tab1 .swiper-btn-prev",
        },
        breakpoints: {
          900: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
        observer: true,
        observeParents: true,
    });
  
    var schedule2 = new Swiper(".slider-schedule2", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".tab2 .swiper-btn-next",
            prevEl: ".tab2 .swiper-btn-prev",
        },
        breakpoints: {
            900: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
        observer: true,
        observeParents: true,
    });
  
    var schedule3 = new Swiper(".slider-schedule3", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".tab3 .swiper-btn-next",
            prevEl: ".tab3 .swiper-btn-prev",
        },
        breakpoints: {
            900: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1400: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
        observer: true,
        observeParents: true,
    });

    
//    $(".tab").click(function(){
//        $iid = $(this).attr("id").split("_").pop();
//        currentTab = $iid;
//
//        $(".schedule .content-area").hide();
//        $("#menu_"+$iid).show();
//        
//    });

	$('.tabs .tab').click(function() {
		var activeTab = $(this).attr('data-tab1');   
		$('.tabs .tab').removeClass('active');
		$('.tab_content').removeClass('active');
		$(this).addClass('active');
		$('#' + activeTab).addClass('active');
	});



    //news tab
    //$(function () {
        //$('.news .contents').hide();
        //$('.news .contents').eq(0).show();

        //$('.thumbnail a').click(function () {
            //$('.news .contents').hide();
            //let imgid=$(this).attr('href');
            //$(imgid).fadeIn();
            //$('.thumbnail a').removeClass('on');
            //$(this).addClass('on');
        //})
    //})

    $('.thumbnail a').click(function() {
		var onTab = $(this).attr('data-tab1');   
		$('.thumbnail a').removeClass('on');
		$('.news .contents').removeClass('on');
		$(this).addClass('on');
		$('#' + onTab).addClass('on');
	});

    $('.news .contents .img-area, .news .contents .txt-area').mouseover(function(){
        $('.news .contents .txt-area').css('text-decoration','underline');
    });

    $('.news .contents .img-area, .news .contents .txt-area').mouseleave(function(){
        $('.news .contents .txt-area').css('text-decoration','none');
    });

    var news = new Swiper(".slider-thumbnail", {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: ".thumbnail .swiper-btn-next",
            prevEl: ".thumbnail .swiper-btn-prev",
        },
    });


    //slider-banner
    var banner = new Swiper(".slider-banner", {
        slidesPerView: 6,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".banner .swiper-btn-next",
            prevEl: ".banner .swiper-btn-prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
    });

    // sub-nav
    $(document).ready(function(){
        $('.sub-nav-tit').click(function() { 
            $(this).next().toggleClass('active');
        }); 
    });    

    // sub-tab
    $(document).ready(function(){
        $('.sub-tab .tab').click(function() {
            var subTab = $(this).attr('data-tab');   
            $('.sub-tab .tab').removeClass('on');
            $('.tab-con').removeClass('on');
            $(this).addClass('on');
            $('#' + subTab).addClass('on');
        });
    })
})
