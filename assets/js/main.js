(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,          
            autoplay:true
        });
    });
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	