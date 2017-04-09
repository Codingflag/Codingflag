$(window).load(function(){
    $('.toggle').addClass('menu');
    $('.toggle').click(function(){
        $('.icon').toggleClass('entypo-menu').toggleClass('entypo-cancel');
        $('.toggle').toggleClass('menu').toggleClass('cancel');
        $(".menu").toggleClass("open");
    });
});