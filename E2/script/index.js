$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp();
  });
  // ----- 슬라이더
  $("#slider-wrap").append($(".slider").first().clone(true));

  let currentIdx = 0;
  const imgCnt = 3;
  setInterval(function () {
    currentIdx++;

    $("#slider-wrap").animate({ marginTop: -100 * currentIdx + "vh" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        $("#slider-wrap").animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);
  // ----- 팝업
  $("#notice .c-body > li:first-child").click(function (e) {
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
