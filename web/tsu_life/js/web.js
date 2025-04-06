$(document).ready(function() {

    $('.gnb').hover(function(){
        $('.gnb_bg').addClass('open');
        $('.lnb').addClass('open');
        $('.gnb > li > a').addClass('open');
    },function(){
        $('.gnb_bg').removeClass('open');
        $('.lnb').removeClass('open');
        $('.gnb > li > a').removeClass('open');
    });
    $('.gnb_bg').hover(function(){
        $('.gnb_bg').addClass('open');
        $('.lnb').addClass('open');
        $('.gnb > li > a').addClass('open');
    },function(){
        $('.gnb_bg').removeClass('open');
        $('.lnb').removeClass('open');
        $('.gnb > li > a').removeClass('open');
    });

    // header
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("header").addClass("active");
        }else{
            $("header").removeClass("active");
        }
    })

    // top_btn
    $("#top_btn").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });

    // mo_header
    $(".menu_btn").click(function(){
        $(this).toggleClass('open');
        $('nav.mobile').toggleClass('open');
        // $('.gnb').toggleClass('mobile');
        $('.header_right').toggleClass('mobile');
        $('.gnb_bg').toggleClass('mobile');
    });


    // 아코디언메뉴
    $('.gnb_menu').click(function(){
        $('.gnb_menu').removeClass('on');
        $(this).addClass('on');
        $('.lnb').slideUp();
        if ($(this).children('.lnb').is(':hidden')){
            $(this).children('.lnb').slideDown(200, 'linear');
        } else{
            $(this).children('.lnb').slideUp(200, 'linear');
        }
        $('.gnb_ic').removeClass('on');
        $(this).children('.gnb_ic').toggleClass('on');
    });

    $('.loca_menu').click(function() {
        $('.loca_menu').removeClass('on');
        $('.loca_list').slideUp();
        $(this).children("ul").slideToggle();
        $(this).toggleClass('on');
    });


    //slider
    var mainSlider = new Swiper(".mainSlider", {
        slidesPerView: 2,
        spaceBetween: 50,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop:true,
        pagination: {
            el: ".main_slide .custom-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                const fillPer = (current / total) * 100;
                const fillWidth = fillPer + '%;';
                return '<strong>0<span class="current">' + current + '</span></strong><div class="progress__bar"><span class="progress__fill" style="width:' + fillWidth + '"></span></div><span>0' + total + '</span>';
            },
        },
        navigation: {
            nextEl: ".main_slide .next_btn",
            prevEl: ".main_slide .prev_btn",
        },
        on: {
            init: function () {
                thisSlide4 = this;
                autoPlayBtn4 = document.querySelector('.main_slide .autoplay-control > button');
                autoPlayBtn4.addEventListener('click', (e) => {
                autoPlayState4 = autoPlayBtn4.getAttribute('aria-pressed');
                    if (autoPlayState4 === 'false') {
                        autoPlayBtn4.setAttribute('aria-pressed', 'true');
                        thisSlide4.autoplay.stop();
                    } else if (autoPlayState4 === 'true') {
                        autoPlayBtn4.setAttribute('aria-pressed', 'false');
                        thisSlide4.autoplay.start();
                    }
                });
            },
        },
        breakpoints: {
            1280: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        },
    });


    //popup
    var popupSlider = new Swiper(".popupSlider", {
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop:true,
        pagination: {
            el: ".popup_control .swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                thisSlide5 = this;
                autoPlayBtn5 = document.querySelector('.popup_control .autoplay-control > button');
                autoPlayBtn5.addEventListener('click', (e) => {
                autoPlayState5 = autoPlayBtn5.getAttribute('aria-pressed');
                    if (autoPlayState5 === 'false') {
                        autoPlayBtn5.setAttribute('aria-pressed', 'true');
                        thisSlide5.autoplay.stop();
                    } else if (autoPlayState5 === 'true') {
                        autoPlayBtn5.setAttribute('aria-pressed', 'false');
                        thisSlide5.autoplay.start();
                    }
                });
            },
        },
    });


});
