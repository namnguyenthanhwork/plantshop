$(document).ready(function () {
    // Preloader(if the# preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
        //product isotope and filter 
        var productIsotope = $('.product-list').isotope({
            itemSelector: '.product-item_filter'
        });
        $('.product-filters li').on('click', function () {
            $(".product-filters li").removeClass('active');
            $(this).addClass('active');
            productIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });
    // scroll back
    $(window).scroll(function () {
            // active header
            this.scrollY > 30 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky");
            // active scroll
            this.scrollY > 30 ? $(".scroll-up-btn").addClass("show") : $(".scroll-up-btn").removeClass("show");
        }),

        $(".scroll-up-btn").click(function () {
            $("html").animate({
                scrollTop: 0,
            }, 1000), $("html").css("scrollBehavior", "auto")
        }),

        // click btn navbar
        $(".menu-btn, .overlay").click(function () {
            $(".menu-btn i, .navbar-mobile, .overlay, body").toggleClass("active")
        })

    // Initiate the wowjs animation library
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 100, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    // carousel
    $(".banner-list").owlCarousel({
            autoplayTimeout: 3e3,
            autoplaySpeed: 2000,
            margin: 0,
            loop: !0,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            items: 1
        }),
        $(" .testimonials-carousel").owlCarousel({
            autoplayTimeout: 3e3,
            autoplaySpeed: 1500,
            margin: 20,
            loop: !0,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            items: 1
        })
});