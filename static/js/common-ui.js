$(document).ready(function () {
    var delta = false, // 以묐났諛⑹���
        //    thisScroll,
        lastScroll = 0;
    $(window).on("scroll", function () {
        var thisScroll = $(this).scrollTop();
        //   var Nextpage = $('.next_page').offset().top - 500;

        if (thisScroll > 10) {
            if ($("#header").hasClass("")) {
                $("#header").addClass("scrolling-down");
            }
            if (thisScroll > lastScroll) {
                if (delta) {
                    $("#header").removeClass();
                    $("#header").addClass("scrolling-down");
                    delta = false;
                }
            } else {
                if (delta == false) {
                    $("#header").removeClass();
                    $("#header").addClass("scrolling-up");
                    delta = true;
                }
            }
            lastScroll = $(window).scrollTop();

            $(".btn_top").css({
                opacity: "1",
                "pointer-events": "auto",
            });
            $(".scroll a, .scroll2 a").css({
                opacity: "0",
                "pointer-events": "none",
            });
        }
        if (thisScroll < 10) {
            $("#header").removeClass();

            $(".btn_top").css({
                opacity: "0",
                "pointer-events": "none",
            });
            $(".scroll a, .scroll2 a").css({
                opacity: "1",
                "pointer-events": "auto",
            });
        }
        /* if ( thisScroll >= Nextpage ) {
          $('.next_page').addClass('scrolled');
        }
        else{
          $('.next_page').removeClass('scrolled');
        } */

        //  $('.this_scroll').text(thisScroll);
        //$('.last_scroll').text(lastScroll);
    });
});
/* $(window).scroll(function(){
    var serT = $(window).scrollTop();
    console.log(serT);
    if( serT == $(document).height()-$(window).height()){
        $('#header').addClass('active')
    }
    else {
        $('#header').removeClass('active')
    }
}) */

// 글자 슬라이드
$(document).ready(function () {});
function textAni() {
    $(".ml16").each(function () {
        $(this).html(
            $(this)
                .text()
                .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
        );
    });

    anime
        .timeline({ loop: false })
        .add({
            targets: ".ml16 .letter",
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function (el, i) {
                return 30 * i;
            },
        })
        .add({
            targets: ".ml16",
            //opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
}

// 스와이퍼 슬라이드

$(document).ready(function () {
    var swiper = new Swiper(".slide1", {
        fade: { crossFade: true },
        virtualTranslate: true,
        speed: 3000,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            // clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                //this.activeIndex.find('.title1').removeClass('m16');
                setTimeout(function () {
                    $(".main_visual").addClass("active");
                }, 300);
                setTimeout(function () {
                    $(".slide1 .swiper-slide-active .title1").addClass("ml16");
                    $(".slide1 .swiper-slide-prev .title1, .slide1 .swiper-slide-next .title1").removeClass("ml16");
                    textAni();
                }, 1400);
            },
        },
    });
    $(".stop_button").on("click", function () {
        swiper.autoplay.stop();
        $(".stop_button").css("display", "none");
        $(".start_button").css("display", "block");
        return false;
    });
    $(".start_button").on("click", function () {
        swiper.autoplay.start();
        $(".start_button").css("display", "none");
        $(".stop_button").css("display", "block");

        return false;
    });
});
