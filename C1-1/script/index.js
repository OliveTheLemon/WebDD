$(function () {
  // ----- 메뉴
  $("#menu >li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(this).find(".submenu").stop().slideDown();
  });
  $("#menu >li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(this).find(".submenu").stop().slideUp();
  });
  // ----- 슬라이드
  $(".slide").first().show().siblings().hide();

  const imgCnt = 3;
  let currentIdx = 0;
  let nextIdx = 0;

  setInterval(function () {
    nextIdx = (currentIdx + 1) % imgCnt;

    $(".slide").eq(currentIdx).fadeOut(700);
    $(".slide").eq(nextIdx).fadeIn(700);

    currentIdx = nextIdx;
  }, 3000);
  // ----- 탭
  $(".t-body > ul").first().siblings().hide();

  $(".t-title > li").click(function (e) {
    e.preventDefault();

    let idx = $(this).index();

    $(".t-title > li")
      .eq(idx)
      .removeClass("deactive")
      .siblings()
      .addClass("deactive");
    $(".t-body > ul").eq(idx).show().siblings().hide();
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
