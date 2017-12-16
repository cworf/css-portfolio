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
});
