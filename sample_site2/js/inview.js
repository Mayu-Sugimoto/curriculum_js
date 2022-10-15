$(function(){
  $(".js-reason1").on("inview", function(event, isInView){
    if (isInView) {
    $(this).stop().addClass("is-inview");
    }
  });
});

$(function(){
  $(".js-reason2").on("inview", function(){
    $(this).addClass("is-inview");
  });
});

$(function(){
  $(".js-voice").on("inview", function(){
    $(this).addClass("is-inview");
  });
});

