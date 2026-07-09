$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).find("a").addClass("m-hover");
    $(this).find(".submenu").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).find("a").removeClass("m-hover");
    $(this).find(".submenu").stop().slideUp();
  });
  // ----- 슬라이드
  let slideWrap = $("#slide-wrap");
  slideWrap.append($(".slide").first().clone(true));

  let currentIdx = 0;
  const imgCnt = 3;
  const slideHeight = 300;

  setInterval(function () {
    currentIdx++;

    slideWrap.animate({ marginTop: -currentIdx * slideHeight + "px" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        slideWrap.animate({ marginTop: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);

  // ----- 팝업
  $("#notice .c-body > li:first-child").click(function (e) {
    e.preventDefault();

    $("#popup").show();
  });
  $("#close-btn > a").click(function (e) {
    e.preventDefault();

    $("#popup").hide();
  });
});
