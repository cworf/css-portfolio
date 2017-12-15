$(function(){

// rotate gears on scroll
    $(document).scroll(function(){
        var distance = $(this).scrollTop() / .966;
        $('.ccw').css('transform', 'rotate(-' + distance + 'deg)');
        $('.cw').css('transform', 'rotate(' + distance + 'deg)');
    });
});
