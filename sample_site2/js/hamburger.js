const ham = $('#js-hamburger');
const nav = $('#js-nav');
const menu1 = $('#category1');
const menu2 = $('#category2');
const menu3 = $('#category3');
const menu4 = $('#category4');
ham.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
});
menu1.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
  menu1.toggleClass('active');
});
menu2.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
  menu2.toggleClass('active');
});
menu3.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
  menu3.toggleClass('active');
});
menu4.on('click', function(){
  ham.toggleClass('active');
  nav.toggleClass('active');
  menu4.toggleClass('active');
});
