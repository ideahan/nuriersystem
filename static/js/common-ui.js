$(document).ready(function () {

  
});
$(window).scroll(function(){
    var serT = $(window).scrollTop();
    console.log(serT);
    if( serT == $(document).height()-$(window).height()){
        $('#header').addClass('active')
    }
    else {
        $('#header').removeClass('active')
    }
})