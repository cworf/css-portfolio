$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = $(event.currentTarget).attr("href");
      var offset = $(hash).offset().top; //determine location of object
      var scrollSpeed = Math.abs(($(document).scrollTop() - offset)* 5); //determine currant distance from object
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: offset
    }, scrollSpeed, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  });

// color inner circles on gears while scrolling

  $(document).scroll(function(){
      var windowLocation = $(this).scrollTop();
      $('svg a').each(function(){
          var linkHash = $(this).attr('href');
          var elementLocation = $(linkHash).offset().top;
          var distance = Math.abs(windowLocation - elementLocation);
          var color = distance / 2;

          $(this).children('path:nth-of-type(2)').css('fill', 'rgb(255, ' + color + ', ' + color + ')')

          if(visible($(linkHash))){
              $(this).children('path:nth-of-type(1)').css('fill', 'red');
          }
          else {
              $(this).children('path:nth-of-type(1)').css('fill', 'white');
          }
      });
  });

  function visible(section){

      //detect viewbox
      var windowTop = $(window).scrollTop();
      var windowBtm = windowTop + $(window).height();

      //detect height and location of section
      var sectionTop = $(section).offset().top;
      var sectionBtm = sectionTop + $(section).height();

      //return true if container is either fully inside the window or spanning a greater height than the window, or taking up more than half of the window
      return (((sectionBtm <= windowBtm) && (sectionTop >= windowTop)) || ((sectionBtm >= windowBtm) && (sectionTop <= windowTop)) || ((sectionBtm >= windowBtm) && (((sectionTop - windowTop) / $(window).height()) < .5)) || ((sectionTop <= windowTop) && (((windowBtm - sectionBtm) / $(window).height()) < .5)));
  }

});
