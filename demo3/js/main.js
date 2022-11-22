//ハンバーガーメニュー
$('.nav-button').on('click', function(){
  $('.nav-button, .sp-nav').toggleClass('show');
});

//フェードイン
$(function(){
  $(".inview").on("inview", function(event, isInView){
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

