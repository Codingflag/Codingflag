$( document ).ready(function() {
  $(".reg-container .headingText").click(function() {
		 $(".reg-container .form").slideDown(320);
		 if ($(".reg-container .form").is(":visible")) {
			 $(".headingText").css('cursor', 'default');
		 }
		 $(".reg-container .form #email").focus();
	});
});