$(document).ready(function (){
  $('.virtual-signin').click(function(){
      
      var username = $('#username').val();
      var password = $('#password').val();

      if(username == '' && password == '')
      {
          $(".form").addClass('animated bounce');
          $(".form").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass('animated bounce');
          });
      }
      else if (username == '')
      {
          $("#username").addClass('animated shake');
          $("#username").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass('animated shake');
          });
      }
      else if(password == '')
      {
          $("#password").addClass('animated shake');
          $("#password").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass('animated shake');
          });
      }
      else 
      {
          setTimeout(function(){
            $('.virtual-signin').html('<i id="gear"></i>')
          }, 0000);

          /* Check User-Data with Database and Display Result */
          setTimeout(function(){
            $('.virtual-signin').html('<span class="fontawesome-unlock unlock"></span>')
          }, 5000);

          /* Sign-in successful Message */ 
          setTimeout(function(){
            $('.signin-form').addClass('animated fadeOut');
            $(".signin-form").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated fadeOut');
            });
            $('.signin-form').html('<h2 class="Successful">Sign-In Successful</h2>');
          }, 7000);
      }

  });
});

