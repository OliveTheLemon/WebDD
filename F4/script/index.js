$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $(".submenu").stop().slideDown();
    $(".menu-bg").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $(".submenu").stop().slideUp();
    $(".menu-bg").stop().slideUp();
  });
  // ----- 슬라이드
  let sliderWrap = $("#slider-wrap");
  sliderWrap.append($(".slider").first().clone(true));
  let currentIdx = 0;
  const imgCnt = 3;
  const imgHeight = 350;

  setInterval(function () {
    currentIdx++;

    sliderWrap.animate({ marginTop: -currentIdx * imgHeight + "px" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        sliderWrap.animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);
  // ----- 팝업
  $("#notice > .t-body > li:first-child").click(function (e) {
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
