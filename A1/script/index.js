$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("hover"); // 상위 메뉴 hover 효과 유지
    $(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("hover");
    $(".submenu").stop().slideUp();
  });
  // ----- 슬라이드
  $("#slider-wrap").append($(".slider").first().clone(true));

  let currentIdx = 0;
  const imgCnt = 3;
  setInterval(function () {
    currentIdx++;

    $("#slider-wrap").animate({ marginTop: -300 * currentIdx + "px" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        $("#slider-wrap").animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);
  // ----- 탭 메뉴
  let tabTitle = $(".t-title > li");
  let tabBody = $(".t-body > ul");

  tabBody.eq(0).show().siblings().hide();
  tabTitle.click(function (e) {
    e.preventDefault();

    let selectIdx = $(this).index();
    tabTitle.eq(selectIdx).addClass("active").siblings().removeClass("active");
    tabBody.eq(selectIdx).show().siblings().hide();
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
