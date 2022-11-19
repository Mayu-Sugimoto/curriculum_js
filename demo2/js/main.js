//ハンバーガーメニュー
$(".hamburger-button").click(function(){
  $(this).toggleClass('active');
  $(".sp-nav").toggleClass('active');
})

//フェードアップ
$(function(){
  $(".inview").on("inview", function(event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
