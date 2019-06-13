$(document).ready(function () {

    new WOW().init();

    $('.carousel').carousel();
    // Start mixitup
    $('#portfolio').mixItUp();

    // Add smooth scrolling to all links
    $("a.smoothscroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

        $('#page-nav-wrapper').removeClass('fixed');

        var scrollTop = $(this).scrollTop();
        var topDistance = $('#page-nav-wrapper').offset().top;

        if ((topDistance) > scrollTop) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
            $('.back-to-up').css({
                'display': 'none'
            })
        } else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
            $('.back-to-up').css({
                'display': 'block'
            })
        }

    });

    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope    
    var $container = $('.isotope');

    // $container.imagesLoaded(function () {
    //     $('.isotope').isotope({
    //         itemSelector: '.item'
    //     });
    // });

    // filter items on click
    $('#filters').on('click', '.type', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });
});