// ハンバーガーメニュー
$(".hamburger-menu").click(function() {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function() {
  $(".hamburger-menu").removeClass('active');
  $("#g-nav").removeClass('panelactive');
})

// トップのスライドショー
$(function(){
  $("#fade img:not(:first-child)").hide();
  setInterval(function(){
    $("#fade img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo("#fade");
  },5000);
});

$(function(){
  $("#fade-sp img:not(:first-child)").hide();
  setInterval(function(){
    $("#fade-sp img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo("#fade-sp");
  },5000);
});


// スライダー（キャリアアドバイザー紹介）
$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 5,
  alidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 1020,
      settings:{
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});


//タブメニュー（求人を探す）
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.tab-occupation').find('a').each(function(){
      var idName = $(this).attr('href');
      if(idName == hashIDName){
        var parentElm = $(this).parent();
        $('.tab-occupation').removeClass("active");
        $(parentElm).addClass("active");
        $(".occupation-tab").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}

//タブをクリックしたら
$('.tab a').on('click', function(){
  var idName = $(this).attr('href');
  GethashID(idName);
  return false;
});

$(window).on('load', function(){
  $('.tab li:first-of-type').addClass("active");
  $('.occupation-tab:first-of-type').addClass("is-active");
var hashName = location.hash;
GethashID (hashName);
});
