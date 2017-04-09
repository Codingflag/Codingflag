var appMaster = {
	menuToggler: function(){
	    $('#menuToggler').on('click', function(e) {
	    	e.preventDefault();
	    	$('#wrapper').toggleClass('toggled');
	    });
	    
	}
}