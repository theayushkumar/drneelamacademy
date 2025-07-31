(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });


    $(document).ready(function() {
        // When the image is clicked
        $('.zoomable').click(function() {
            var imgSrc = $(this).attr('src');
            var overlay = $('<div class="zoomed-in-overlay"></div>');
            var expandedImg = $('<img class="zoomed-in" src="' + imgSrc + '" />');
            
            $('body').append(overlay).append(expandedImg);
            
            overlay.add(expandedImg).click(function() {
                expandedImg.remove();
                overlay.remove();
            });
        });
    });
    
    
})(jQuery);

