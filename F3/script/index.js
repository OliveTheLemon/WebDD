$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $("#menu-bg").stop().slideDown();
    $(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $("#menu-bg").stop().slideUp();
    $(".submenu").stop().slideUp();
  });
  // ----- 슬라이드
  $("#slide-wrap").append($(".slide").first().clone(true));

  const imgCnt = 3;
  let currentIdx = 0;
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
  $(".t-body > ul").first().show().siblings().hide();

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
