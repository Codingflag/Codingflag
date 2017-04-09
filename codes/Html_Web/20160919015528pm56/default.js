$(document).ready(function(){
  $('#nav-trigger').click(function(){
      $('.main-nav').toggleClass('active');
      $('.fa').toggleClass('fa-bars');
      $('.fa').toggleClass('fa-times');
  });
});