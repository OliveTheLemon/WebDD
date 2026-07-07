$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(this).children("a").addClass("m-hover");
    $("#menu > li > .submenu").stop().slideDown();
    $(".menu-bg").stop().slideDown();
  });
  $("#menu > li").mouseout(function () {
    $(this).children("a").removeClass("m-hover");
    $("#menu > li > .submenu").stop().slideUp();
    $(".menu-bg").stop().slideUp();
  });

  // ----- 슬라이드
  let slideWrap = $("#slide-wrap");
  slideWrap.append(slideWrap.children("li").first().clone(true));

  let currentIdx = 0;
  const imgCnt = 3;
  setInterval(function () {
    currentIdx++;
    slideWrap.animate({ marginLeft: -currentIdx * 100 + "%" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        slideWrap.animate({ marginLeft: 0 }, 0);
        currentIdx = 0;
      }, 700);
    }
  }, 3000);

  // ----- 팝업
  $("#notice > .c-body > li:first-child").click(function (e) {
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
