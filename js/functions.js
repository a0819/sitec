// フッターデザイン
$(function () {

  $("footer").hover(function () {
    $("footer").css("background-color", "red");

  }, function () {
    $("footer").css("background-color", "#b2eaff");
  });


  if ($("#home").length) {

    $('.slider').slick({
      autoplay: true,
      arrows: false,
    })

  }


  // トップページスライドショー

  // リサイズ時のイベント
  $(window).resize(function () {
    console.log($("body").width());
  });


});
