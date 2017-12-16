$(function(){

// rotate gears on scroll
    $(document).scroll(function(){
        var ogSpeed = .966;
        $('#Gears > g > g').each(function(){
            var driver = $(this).attr('data-driver'),
            self = $(this).attr('data-self'),
            thisClass = $(this).attr('class');

                if (thisClass === "ccw") {
                    var rotateSpeed = 0 - ($(document).scrollTop() / (ogSpeed * self / driver));
                } else {
                    var rotateSpeed = $(document).scrollTop() / (ogSpeed * self / driver);
                }

            $(this).css('transform', 'rotate(' + rotateSpeed + 'deg)');
        });
    });

    //toggle class for project slideout

    $('.project').click(function(){
        $(this).next().toggleClass('visible');
        $(this).toggleClass('roll');
    });

    //TOGGLE - burger

    $('.mobile-burger').click(function(){
        $('.container.grid').toggleClass('move');
    });
});
