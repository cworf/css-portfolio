$(function(){

// rotate gears on scroll
    $(document).scroll(function(){
        var distance = $(this).scrollTop() / .966;
        $('.ccw').css('transform', 'rotate(-' + distance + 'deg)');
        $('.cw').css('transform', 'rotate(' + distance + 'deg)');
    });

    //toggle class for project sideout

    $('.project').click(function(){
        $(this).next().toggleClass('visible');
        $(this).toggleClass('roll');
    });
});
