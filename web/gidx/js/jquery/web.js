$(document).ready(function () {
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

  // header
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  // top_btn
  $("#top_btn").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // sideBtn
  $(".side_btn").click(function () {
    $(".sitemap").addClass("show");
    $("html, body").addClass("ov");
  });

  $(".close-btn").click(function () {
    $(".sitemap").removeClass("show");
    $("html, body").removeClass("ov");
  });

  $(".sitemap-nav > li a").click(function () {
    // 창 크기가 1200px 이하일 때만 작동
    if ($(window).width() <= 1200) {
      let $contents = $(this).next();

      // 이미 클릭된 항목을 제외하고 다른 항목을 모두 접기
      $(".sitemap-nav > li > .sitemap-depth2")
        .not($contents)
        .stop(true, true)
        .slideUp();

      // 클릭된 항목만 토글
      $contents.stop(true, true).slideToggle();
    }
  });

  // 창 크기 변경 시 1200px 이하일 때 모든 항목 펼치기
  $(window).resize(function () {
    if ($(window).width() > 1200) {
      $(".sitemap-nav > li > .sitemap-depth2").stop(true, true).show(); // 모든 접힌 내용 펼치기
    } else {
      // 창 크기가 1200px 이하일 때 모든 메뉴 접기
      $(".sitemap-nav > li > .sitemap-depth2").stop(true, true).hide();
    }
  });
});

$(document).ready(function () {
  //slider-schedule
  var schedule = new Swiper(".slider-schedule", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next_btn",
      prevEl: ".prev_btn",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    observer: true,
    observeParents: true,
  });

  var schedule2 = new Swiper(".slider-schedule2", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next_btn",
      prevEl: ".prev_btn",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    observer: true,
    observeParents: true,
  });

  var schedule3 = new Swiper(".slider-schedule3", {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next_btn",
      prevEl: ".prev_btn",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    observer: true,
    observeParents: true,
  });

  $(".tabs .tab").click(function () {
    var activeTab = $(this).attr("data-tab1");
    $(".tabs .tab").removeClass("active");
    $(".tab_content").removeClass("active");
    $(this).addClass("active");
    $("#" + activeTab).addClass("active");
  });

  $(".nav-tabs .tab").click(function () {
    $iid = $(this).attr("id").split("_").pop();
    currentTab = $iid;

    $(".tab-content").hide();
    $("#section_" + $iid).show();

    $(".nav-tabs .tab").attr("class", "tab");
    $(this).attr("class", "tab active");
  });

  //tag
  $(".tag_wrap .tag").click(function () {
    $(this).toggleClass("on");
  });

  $(".tag_area .tag").click(function () {
    $(this).toggleClass("on");
  });

  $(".tag_wrap .tag").click(function () {
    $(this).parents(".tag_wrap").children(".tag_basic").removeClass("on");
    $(this).toggleClass("on");
  });

  $(".tag_radio .tag").click(function () {
    $(this).parents(".tag_wrap").children(".tag_basic").removeClass("on");
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
  });

  $(".tag_wrap .tag_basic").click(function () {
    $(this).siblings(".tag_area").children(".tag").removeClass("on");
    $(this).addClass("on");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const subLnb = document.querySelector(".sub_lnb");
  const onLink = document.querySelector(".sub_lnb a.on");

  if (subLnb && onLink) {
    // 'on' 클래스가 붙은 링크가 보이도록 스크롤을 해당 위치로 이동
    subLnb.scrollLeft = onLink.offsetLeft - subLnb.offsetLeft - 10;
    // 스크롤을 10px 앞에서 멈추도록 설정
    subLnb.scrollLeft = targetPosition;
  }
});
