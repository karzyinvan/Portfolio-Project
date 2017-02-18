$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
      $('.menu-overlay').toggleClass('open');
    });

  $('.menu-overlay a').click(function(){
      $('.hamburger').toggleClass('open');
      $('.menu-overlay').toggleClass('open');
  });
});
