$(function () {
  // ----- 메뉴
  $("#menu > li").mouseover(function () {
    $(".submenu").stop().slideDown();
    $(".menu-bg").stop().slideDown();
    $(this).children("a").addClass("menu-hover");
  });
  $("#menu > li").mouseout(function () {
    $(".submenu").stop().slideUp();
    $(".menu-bg").stop().slideUp();
    $(this).children("a").removeClass("menu-hover");
  });
  // ----- 슬라이드
  let sliderWrap = $("#slider-wrap");
  sliderWrap.append($(".slider").first().clone(true)); // 첫번째 이미지 복제

  let currentIdx = 0; // 현재 보여지는 이미지 인덱스 번호
  const imgCnt = 3; // 이미지 개수
  const imgHeight = 300; // 이미지 높이
  setInterval(function () {
    currentIdx++;
    sliderWrap.animate({ marginTop: -imgHeight * currentIdx + "px" }, 600);

    if (currentIdx === imgCnt) {
      setTimeout(function () {
        sliderWrap.animate({ marginTop: 0 }, 0);
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
