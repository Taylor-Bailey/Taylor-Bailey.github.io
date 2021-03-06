'use strict';
let $ = require("../lib/node_modules/jquery");

let scrollNav = () => {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 930 ) {
                $('#hide-nav')
                .fadeIn(600);
            } else {
                $('#hide-nav')
                .fadeOut(600);
            }
        });
    });
};

let scrollBrand = () => {
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 150 ) {
        $('.name')
        .fadeOut(600);
      }else{
        $('.name')
        .fadeIn(600);
      }
    });
  });
};

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually going to happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

module.exports = { scrollNav, scrollBrand };