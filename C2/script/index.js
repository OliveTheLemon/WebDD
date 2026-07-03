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
  let slide = $(".slide");
  slide.eq(0).show().siblings().hide();

  let currentIdx = 0;
  let nextIdx = 0;
  const imgCnt = 3;
  setInterval(function () {
    nextIdx = (currentIdx + 1) % imgCnt;

    slide.eq(currentIdx).fadeOut();
    slide.eq(nextIdx).fadeIn();

    currentIdx = nextIdx;
  }, 3000);

  // ----- 팝업
  $("#notice .c-body >li:first-child").click(function (e) {
    e.preventDefault();
    $("#modal-bg").show();
    $("#popup").show();
  });
  $("#close-btn > a").click(function (e) {
    e.preventDefault();
    $("#modal-bg").hide();
    $("#popup").hide();
  });
});
