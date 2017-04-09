$(document).ready(function() {
  $("#submit").click(function() {
    $(".submit").addClass("loading");
    setTimeout(function() {
      $(".submit").addClass("hide-loading");
      $(".done").addClass("finish");
    },4500);
    setTimeout(function() {
      $(".submit").removeClass("loading");
      $(".submit").removeClass("hide-loading");
      $(".done").removeClass("finish");
      $(".failed").removeClass("finish");
    },6800);
  })
});