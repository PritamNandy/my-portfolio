$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 100,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                stagePadding: 400,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            }
        },
    });
});