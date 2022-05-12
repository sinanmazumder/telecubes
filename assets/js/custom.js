// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 200) {
            jQuery('.header').addClass('fixed-top');
        } else {
            jQuery('.header').removeClass('fixed-top');
        }
    });
});

/* video popup */
jQuery(function () {
    jQuery(".video-play-button").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
});


// count up
jQuery('.counter').countUp({
    delay: 10,
    time: 2000
});

// testimonial carousel
jQuery('.testimonials_carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    items: 1,
});

jQuery('.reason_to_choise .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    items: 1,
});

jQuery("#tabs").tabs({
    collapsible: true,
    show: { effect: "fold", duration: 800 }
});


//isotope
    jQuery('document').ready(function () {
        jQuery('.grid').isotope();
    });



