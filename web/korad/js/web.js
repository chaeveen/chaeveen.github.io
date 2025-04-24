$(document).ready(function () {
  var bannerSlide = new Swiper(".bannerSlide", {
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
      nextEl: ".banner_control .next_btn",
      prevEl: ".banner_control .prev_btn",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    on: {
      init: function () {
        thisSlide4 = this;
        autoPlayBtn4 = document.querySelector(
          ".banner_control .autoplay-control > button"
        );
        autoPlayBtn4.addEventListener("click", (e) => {
          autoPlayState4 = autoPlayBtn4.getAttribute("aria-pressed");
          if (autoPlayState4 === "false") {
            autoPlayBtn4.setAttribute("aria-pressed", "true");
            thisSlide4.autoplay.stop();
          } else if (autoPlayState4 === "true") {
            autoPlayBtn4.setAttribute("aria-pressed", "false");
            thisSlide4.autoplay.start();
          }
        });
      },
    },
    breakpoints: {
      445: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      745: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });

  // header
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  $(".tab").click(function () {
    $iid = $(this).attr("id").split("_").pop();
    currentTab = $iid;

    $(".tab-content").hide();
    $("#section_" + $iid).show();

    $(".tab").attr("class", "tab");
    $(this).attr("class", "tab active");
  });

  //side_right_wrap 오른쪽 사이드 메뉴
  $(".side_btn").click(function () {
    $(".right_side_wrap").toggleClass("on");
    $(".html,body").toggleClass("o_hidden");
    $("nav.mobile").toggleClass("open");
  });
  $(".side_close_btn").click(function (event) {
    event.stopPropagation();
    $(".right_side_wrap").removeClass("on");
    $(".html,body").removeClass("o_hidden");
    $("nav.mobile").removeClass("open");
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".right_side_wrap, .side_btn").length) {
      $(".right_side_wrap").removeClass("on");
      $("nav.mobile").removeClass("open");
      $(".html,body").removeClass("o_hidden");
    }
  });
  $(".right_side_wrap").click(function (event) {
    event.stopPropagation();
  });
  $(".gnb").hover(
    function () {
      $(".gnb_bg").addClass("open");
      $(".lnb").addClass("open");
      $(".gnb > li > a").addClass("open");
    },
    function () {
      $(".gnb_bg").removeClass("open");
      $(".lnb").removeClass("open");
      $(".gnb > li > a").removeClass("open");
    }
  );
  $(".gnb_bg").hover(
    function () {
      $(".gnb_bg").addClass("open");
      $(".lnb").addClass("open");
      $(".gnb > li > a").addClass("open");
    },
    function () {
      $(".gnb_bg").removeClass("open");
      $(".lnb").removeClass("open");
      $(".gnb > li > a").removeClass("open");
    }
  );

  // 아코디언메뉴
  $(".gnb_menu").click(function () {
    $(".gnb_menu").removeClass("on");
    $(this).addClass("on");
    $(".lnb").slideUp();
    if ($(this).children(".lnb").is(":hidden")) {
      $(this).children(".lnb").slideDown(200, "linear");
    } else {
      $(this).children(".lnb").slideUp(200, "linear");
    }
    $(".gnb_ic").removeClass("on");
    $(this).children(".gnb_ic").toggleClass("on");
  });
});
