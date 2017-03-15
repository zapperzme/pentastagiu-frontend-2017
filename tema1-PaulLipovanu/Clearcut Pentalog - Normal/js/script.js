/**
 * Created by uspescu on 13-Mar-17.
 */
$(document).ready(function(){
$('.bxslider').bxSlider({
    infiniteLoop: false,
    hideControlOnEnd: true,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '<img src="images/right.png"/>',
    prevText: '<img src="images/left.png"/>'
});



    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('.nav').toggle(10);
    });
});