function cleanNum(el){
	var textfield = document.getElementById(el);
	var regex = /[^a-z]/gi;
	if(textfield.value.search(regex) > -1) {
		textfield.value = textfield.value.replace(regex, "");
        }
}


function cleanChar(el){
	var textfield = document.getElementById(el);
	var regex = /[^0-9]/gi;
	if(textfield.value.search(regex) > -1) {
		textfield.value = textfield.value.replace(regex, "");
        }
}


function cleanSpecial(el){
	var textfield = document.getElementById(el);
	var regex = /[^a-z 0-9]/gi;
	if(textfield.value.search(regex) > -1) {
		textfield.value = textfield.value.replace(regex, "");
        }
}