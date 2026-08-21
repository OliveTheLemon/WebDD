$(function () {
  // ----- 메뉴
  $(".submenu").hide();
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(".submenu").stop().slideDown();
    $("#menu-bg").stop().fadeIn();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(".submenu").stop().slideUp();
    $("#menu-bg").stop().fadeOut();
  });
  // ----- 슬라이드
  let currentIdx = 0;
  let nextIdx = 0;
  const imgCnt = 3;

  $(".slide").first().show().siblings().hide();
  setInterval(function () {
    nextIdx = (currentIdx + 1) % imgCnt;

    $(".slide").eq(currentIdx).fadeOut(700);
    $(".slide").eq(nextIdx).fadeIn(700);

    currentIdx = nextIdx;
  }, 3000);
  // ----- 탭 메뉴
  // ----- 팝업
});
