$(document).ready(function(){
var width_btn = 0;
	$('#download').click(function(){
		$('#button').html('Downloading');
		$('#progress').css({'opacity':1});
		$('#button').css({'background':'white','color':'#01a2f3','border-radius':'3px'});
		function downloading()
		{
			setTimeout(function(){
			if(width_btn<225)
			{$('#progress').css({'width':width_btn});
			width_btn++;downloading()}
			else{
				$('#progress').css({'opacity':0,'width':'0px'});
				$('#button').css({'background':'#01a2f3','color':'#fff','border-radius':'0px'});
				$('#button').html('Done!');
				width_btn=0;
				return ;
			}
			/* Control Speed by change 40 with any value */
			},40);
		}
		downloading();
	});
});