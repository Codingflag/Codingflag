$(window).load(function(){
	$(".toggle").click(function(){
		$("#menu").toggleClass("active");
  		$(".toggle").toggleClass("rotate");
	});
});