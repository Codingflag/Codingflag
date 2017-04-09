$(window).load(function() {
	$('#rating i').on('mouseover', function(){
	  var $this = $(this);
	  $this.nextAll().removeClass('fa-star').addClass( "fa-star-o" );
	  $this.prevAll().removeClass( "fa-star-o" ).addClass('fa-star');
	  $this.removeClass( "fa-star-o" ).addClass('fa-star');
	});
	$('#rating i').one('click',function(){
	 var $this = $(this); $this.addClass('active').siblings().removeClass('active');
	});
	$('#rating i').on('mouseleave', function(){
	  var select = $('.active');
	  select.nextAll().removeClass('fa-star').addClass('fa-star-o');
	  select.prevAll().removeClass('fa-star-o').addClass('fa-star');
	  select.removeClass('fa-star-o').addClass('fa-star');
	});
});
