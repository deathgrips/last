;(function($){
	"use strict";

	$(document).foundation();

	$(function(){
		$('.ba-works__slider').slick({
			dots: true,
			slide: '.ba-works__slide',
			prevArrow: '.ba-slider-arrow--prev',
			nextArrow: '.ba-slider-arrow--next'
		});
	})

	$(function(){
		$('.ba-team__slider').slick({
			dots: false,
			slide: '.ba-team__slide',
			slidesToShow: 3,
			prevArrow: '.ba-slider-arrow--prev',
			nextArrow: '.ba-slider-arrow--next',
			responsive: [
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
	})

})(jQuery);