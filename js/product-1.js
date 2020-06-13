$(function (){
    $(window).scroll(function () {
        if($(this).scrollTop()>250){
            $('.header__navbar-2').addClass('header__navbar-2-add');
            $('.scrolltotop').addClass('scrolltotop__show');

            
        }
        else{
            $('.header__navbar-2').removeClass('header__navbar-2-add');
            $('.scrolltotop').removeClass('scrolltotop__show');

         }
    });
    $('.scrolltotop').click(function () { 
        $('html,body').animate({scrollTop:0}, 500);
    });

});