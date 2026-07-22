$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(".submenu").stop().slideUp();
  });

  // ----- 슬라이드
  $("#slide-wrap").append($(".slide").first().clone(true));

  let currentIdx = 0;
  let imgCnt = 3;

  setInterval(function () {
    currentIdx++;

    $("#slide-wrap").animate({ marginLeft: -currentIdx * 100 + "%" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        $("#slide-wrap").animate({ marginLeft: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);

  // ----- 탭메뉴
  let tabTitle = $("#t-title > li");
  let tabBody = $("#t-body > ul");

  tabBody.eq(0).show().siblings().hide();
  tabTitle.click(function (e) {
    e.preventDefault();
    let idx = $(this).index();

    tabTitle.eq(idx).addClass("t-active").siblings().removeClass("t-active");
    tabBody.eq(idx).show().siblings().hide();
  });

  // ----- 팝업
  $("#notice > li:first-child").click(function (e) {
    e.preventDefault();

    $("#popup").show();
  });
  $("#close-btn > a").click(function (e) {
    e.preventDefault();

    $("#popup").hide();
  });
});
