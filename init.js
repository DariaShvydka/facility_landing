/**
 * Created by Daria on 15.10.17.
 */

"use strict";

jQuery(document).ready(function () {

    $('#fullSlider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<div class="arrow-right"></div>',
        prevArrow: '<div class="arrow-left"></div>',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.mini-carousel').slick({
        dots: false,
        arrows: true,
        nextArrow: '<div class="arrow-right"></div>',
        prevArrow: '<div class="arrow-left"></div>',
        autoplay: false,
        //centerMode: true,
        infinite: true,
        centerPadding: '12%',
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});