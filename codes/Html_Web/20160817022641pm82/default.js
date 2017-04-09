function cleanSpecialChar(el){
	var textfield = document.getElementById(el);
	var regex = /[^a-z 0-9]/gi;
	if(textfield.value.search(regex) > -1) {
		textfield.value = textfield.value.replace(regex, "");
        }
}



$(document).ready(function(){
	$('.searchButton').click(function(){
		if($('.searchTextBox').val() == '')
		{
			$('.searchTextBox').toggleClass('Open');
		}
		else
		{
			/* Write Searching Code Here - Ajax(JQuery) Request */
	                var textfield = document.getElementById('searchbox');
	                var regex = /[^a-z 0-9]/gi;
	                if(textfield.value.search(regex) > -1) {
		              textfield.value = textfield.value.replace(regex, "");
                        }
			$('.search').html('<h1 class="searching">Searching  \''+ $('.searchTextBox').val()+'\' !!</h1>')
		}
	});
});