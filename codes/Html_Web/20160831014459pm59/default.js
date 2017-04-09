$(document).ready(function(){

  $('.button').click(function(){
    $('.overlay').css({'display':'block'});
    $('.popup').addClass('animated zoomInUp');
    $('.popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $('.popup').removeClass('animated zoomInUp');
    });
  });

    $('.close').click(function(){
    $('.popup').addClass('animated zoomOutUp');
    $('.popup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $('.popup').removeClass('animated zoomOutUp');
    });
    setTimeout(function(){
       $('.overlay').css({'display':'none'});
     }, 1017);
  });

});