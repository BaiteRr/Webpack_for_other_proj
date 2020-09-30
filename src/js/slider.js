/* eslint-disable */

import $ from 'jquery';
import './slick.min'

$(document).ready(function(){
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        sliderToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true
    });
});