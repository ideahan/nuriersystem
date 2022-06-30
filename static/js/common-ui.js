$(document).ready(function () {
    var WinHeight = $(window).height();
    console.log(WinHeight);
	$(window).scroll(function(){
       
        if( WinHeight > 114){
            $('#header').addClass('active')
        }
        else {
            $('#header').removeClass('active')
        }

    })
});