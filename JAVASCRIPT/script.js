/**********************************************
              PRELOADER SECTION
**********************************************/
$(window).on('load', function () {
    $('#status').delay(350).fadeOut();
    $('#preloader-inner').delay(350).fadeOut();
    $('#preloader-outer').delay(350).fadeOut();
});
$(function () {
    if ($(window).width() >= 0 && $(window).width() <= 992) {
        $("#banner").attr("src", "/IMAGES/BANNER/Artboard5.png");
    } else {
        $("#banner").attr("src", "IMAGES/BANNER/Artboard1.png");
    }
});
$(function () {
    if ($(window).width() >=370) {
        document.getElementById("subscribe").style.width="280px";
    } else {
       document.getElementById("subscribe").style.width="270px";
    }
});
