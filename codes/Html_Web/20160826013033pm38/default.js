var progressWidth = 1;
var percent = 1;

$(document).ready(function(){
    function progressBar()
    {
      //Give Required time in setTimeout function.*/
      setTimeout(function () {    
        $('.progress').css({"width":progressWidth++ +'%'}); 
        percent = progressWidth -1;    
        $('#percent').html(percent +"%");                
        if (progressWidth < 101) {            
         progressBar();             
        }              
      }, 80);
    }
    progressBar();
});