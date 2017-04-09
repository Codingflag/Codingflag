$(function(){
  $("#menu-toggle,#nav-close").click(function(){
    $("#container").toggleClass("active");
    $("#menu-toggle").toggleClass('hide').delay(1000);
  });
});