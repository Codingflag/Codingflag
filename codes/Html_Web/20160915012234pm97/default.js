$(window).load(function() {
    
    $('.btn-shiny').click(function(event) {
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		x = event.pageX - btnOffset.left,
      		y = event.pageY - btnOffset.top;

      $div.addClass('shineIt').css({left: x - 15,top: y - 15}).appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 900);

    });
    
});