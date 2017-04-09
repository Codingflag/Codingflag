$(document).ready(function(){
	$('.g-menu').click(function(){
		var g_menu = $(this);
		if (!(g_menu.hasClass('open'))) {
    		g_menu.addClass('open');
  		} else {
  			g_menu.addClass('close');
    		g_menu.one('transitionend', function() {
      		g_menu.removeClass('open close');
    		});	
  		}
	});
});