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

  const imgCnt = 3;
  const imgHeight = 300;
  let currentIdx = 0;
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
  // ----- 탭메뉴
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
  $("#notice > li")
    .first()
    .click(function (e) {
      e.preventDefault();

      $("#popup").show();
    });
  $("#close-btn").click(function (e) {
    e.preventDefault();

    $("#popup").hide();
  });
});
