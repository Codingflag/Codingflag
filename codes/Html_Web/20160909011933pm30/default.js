$(document).ready(function(){

  $('.register-btn').click(function(){
    $('#wrapper').addClass('active');
  }); 

  $('.close-button').click(function(){
    $('#wrapper').removeClass('active');
  });

  $('.form-row input').blur(function(){
    if(this.value.length > 0) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

});