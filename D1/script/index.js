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
  $("#slide-wrap").append($(".slide").first().clone(true));

  let currentIdx = 0;
  const imgCnt = 3;
  const imgHeight = 400;

  setInterval(function () {
    currentIdx++;

    $("#slide-wrap").animate(
      { marginTop: -currentIdx * imgHeight + "px" },
      600,
    );

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        $("#slide-wrap").animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);
  // ----- 탭 메뉴
  $("#tab-body > ul").eq(0).show().siblings().hide();
  $("#tab-title > li").click(function (e) {
    e.preventDefault();

    let idx = $(this).index();

    $("#tab-title > li")
      .eq(idx)
      .removeClass("t-deactive")
      .siblings()
      .addClass("t-deactive");

    $("#tab-body > ul").eq(idx).show().siblings().hide();
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
