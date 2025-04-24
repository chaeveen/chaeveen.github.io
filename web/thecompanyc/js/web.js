$(document).ready(function() {

    // top_btn
    $("#bt_top").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });

    // search_btn
    $('.search_btn, .mo_search_btn').click(function(){
        $('.search_area').toggleClass('on')
    });

    // mo_header
    $(".menu_btn").click(function(){
        $(this).toggleClass('active');
        $('html,body').toggleClass('ov_hidden');
        $('.mo_header').toggleClass('active');
    });

    // 아코디언메뉴
    $('.mo_header .nav > li > a').on('click', function(){
        var element = $(this).parent('li');
        if (element.hasClass('active')) {
        element.removeClass('active');
        element.find('li').removeClass('active');
        element.find('ul').slideUp(300);
        }
        else {
        element.addClass('active');
        element.children('ul').slideDown(300);
        element.siblings('li').removeClass('active');
        element.siblings('li').find('li').removeClass('active');
        element.siblings('li').find('ul').slideUp(300);
        }
    });

    //slider
    var slider = new Swiper(".slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 60000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".main_slide .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_slide .swiper-btn-next",
            prevEl: ".main_slide .swiper-btn-prev",
        },
        loop: true,
    });

    //magazine
    var magazineSlider = new Swiper(".magazine_slider", {
        slidesPerView: 2,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".magazine_slider .swiper-btn-next",
            prevEl: ".magazine_slider .swiper-btn-prev",
        },
        loop: true,
        loopAdditionalSlides: 1,
        rewind: false,
        breakpoints: {
            900: {
                slidesPerView: 1,
                spaceBetween: 100,
            },
        },
    });

    //recruitment
    var recruitmentSlider = new Swiper(".recruitment_slider", {
        slidesPerView: 1,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".recruitment .swiper-btn-next",
            prevEl: ".recruitment .swiper-btn-prev",
        },
        pagination: {
            el: ".recruitment .swiper-pagination",
            clickable: true,
        },
        loop: true,
        loopAdditionalSlides: 1,
        rewind: false,
        breakpoints: {
            900: {
                slidesPerView: 1,
                spaceBetween: 100,
            },
        },
    });

});
