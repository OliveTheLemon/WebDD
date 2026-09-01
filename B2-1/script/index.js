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
  // ----- 팝업
  $("#notice > .c-body > li:first-child").click(function (e) {
    e.preventDefault();

    $(".modal-bg").show();
    $("#popup").show();
  });
  $("#close-btn > a").click(function (e) {
    e.preventDefault();

    $(".modal-bg").hide();
    $("#popup").hide();
  });
});
