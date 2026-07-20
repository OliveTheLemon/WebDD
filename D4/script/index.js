$(function () {
  // ----- 메뉴
  $(".submenu").hide();
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(".submenu").stop().fadeIn(500);
    $(".menu-bg").stop().fadeIn(500);
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(".submenu").stop().fadeOut(500);
    $(".menu-bg").stop().fadeOut(500);
  });

  // ----- 슬라이드
  let currentIdx = 0;
  let nextIdx = 0;
  const imgCnt = 3;
  $(".slide").eq(currentIdx).show().siblings().hide();

  setInterval(function () {
    nextIdx = (currentIdx + 1) % imgCnt;

    $(".slide").eq(currentIdx).fadeOut();
    $(".slide").eq(nextIdx).fadeIn();

    currentIdx = nextIdx;
  }, 3000);
  // ----- 팝업
  $("#notice .c-body li:first-child").click(function (e) {
    e.preventDefault();

    $("#popup").show();
  });
  $("#close-btn a").click(function (e) {
    e.preventDefault();

    $("#popup").hide();
  });
});
