$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(this).find(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(this).find(".submenu").stop().slideUp();
  });
  // ----- 슬라이드
  $(".slider").eq(0).show();
  let currentIdx = 0;
  let nextIdx = 0;
  const imgCnt = 3;

  setInterval(function () {
    nextIdx = (currentIdx + 1) % imgCnt;

    $(".slider").eq(currentIdx).fadeOut(1200);
    $(".slider").eq(nextIdx).fadeIn(1200);

    currentIdx = nextIdx;
  }, 3000);
  // ----- 탭 메뉴
  let tabTitle = $("#t-title > li");
  let tabBody = $("#t-body > ul");
  tabBody.hide().eq(0).show();

  tabTitle.click(function (e) {
    e.preventDefault();

    let index = $(this).index();

    tabTitle.eq(index).addClass("t-active").siblings().removeClass("t-active");
    tabBody.eq(index).show().siblings().hide();
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
