/*jslint browser: true*/
/* global $  ,window*/

// loading overlay
$(window).load(function () {
    'use strict';
    $(".loading").fadeOut(2000);

});
$(window).scroll(function () {
    'use strict';
    if ($("html, body").scrollTop() >= 350) {
        $(".toop").fadeIn(1120)
    } else {
        $(".toop").fadeOut(1150);

    }
});
$(function () {
    'use strict';
    $("html, body").niceScroll({
        cursorwidth: "7.5px",
        cursorcolor: "var(--main-color)",
        passive: true

    });
    $(".carousel").carousel({
        interval: "6000"
    });
    $(".navbar-default .navbar-nav > li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    $(".navbar .nav li a").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 2000);
    });

    // this is spicail for button to back to top
    $(".top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1150);
    });

});
