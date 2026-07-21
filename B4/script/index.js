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

  let currentIdx = 0;
  const imgCnt = 3;

  setInterval(function () {
    currentIdx++;

    $("#slide-wrap").animate({ marginLeft: -currentIdx * 100 + "%" }, 600);

    if (currentIdx == imgCnt) {
      setTimeout(function () {
        $("#slide-wrap").animate({ marginLeft: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);

  // ----- 팝업
  $("#notice .c-body li:first-child").click(function (e) {
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
