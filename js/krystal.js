$(document).ready(function(){
    "use strict"; 
    
    // NAVBAR RESIZE FUNCTION
        $(window).scroll( function() {
            var value = $(this).scrollTop();
            if ( value > $(window).height() * 1 )
                $(".navbar-light").addClass("scrolled");
            else
                $(".navbar-light").removeClass("scrolled");
        });
    
    //HAMBURGER MENU ANIMATION
    	$('#hamburger').on("click", function(){
            $(this).toggleClass('open');
        });
    
    // SMOOTH SCROLLING TO ANCHORS
        $('a[href*=\\#]:not([href=\\#]):not(.carousel-control-prev, .carousel-control-next)').on('click', function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 100
                }, 1500, 'swing' );
            return false;
          }
        }
      });
    
    // LAZY LOADING IMAGES
    var bLazy = new Blazy();
    
    // ANIMATIONS
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + 150;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
      });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
    // LIGHTBOX OPTIONS
     lightbox.option({
        'resizeDuration': 500,
        'imageFadeDuration': 700,
        'wrapAround': true
    });
    
    //COPYRIGHT YEAR
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
    
});

window.onload = function() {
    // HIDE LOADING SCREEN WHEN PAGE IS LOADED
    $('#progress').animate({ width:'100%'}, 300, function() {
        $('#loader-wrapper').addClass('loaded');
    });
}