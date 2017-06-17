(function(){
  var d = new Date();
  var n = d.getFullYear();
  $('#year').append(n);
  
  $('.fit').swipe( {
      click:function(event,target){
          myFunction();
      },                                         
      swipeLeft: function() {
          $('.swipe').addClass('swl');
          $('.swipe').removeClass('swr');
      },
      swipeRight: function() {
          $('.swipe').removeClass('swl');
          $('.swipe').addClass('swr');
      },
      allowPageScroll: 'vertical'
  });

  // move the slides
  $('.once').carousel({
    interval: 7500
  });

  $('.swipe-me').carousel({
    interval: 2050
  });
  
  //collect form info
  mail = $('#form');
    widget = $('.form');
    mail.submit(function(e) {
      guest = document.getElementById('name').value.toLowerCase();
      mail = document.getElementById('email').value.toLowerCase();
      message = document.getElementById('message').value.toLowerCase();
      e.preventDefault();
        $.ajax({
          url: '//formspree.io/{{site.email}}',
          method: 'POST',
          data: $(this).serialize(),
          dataType: 'json',
          beforeSend: function() {
            mail.html(`
              <h2>Sending</h2>
              <span class = 'spinner'></span>
            `);
          },
          success: function(data) {
            mail.html(`
              <div class = "confirm">
                <h2 class = 'mark capital'>Hello ${guest}</h2>
                <div  class = 'response success'><i class = 'fa fa-thumbs-up' aria-hidden = 'true'></i></div>
                <p>Great to hear from you. We will get back to you asap.</p>
              </div>
            `);
          },
          error: function(err) {
            mail.html(`
              <div class = "confirm">
                <div class = 'response error'><i class = 'fa fa-exclamation-circle' aria-hidden = 'true'></i></div>
                <p>There was problem.</p>
                <p>Refrsh and try again.</p>
              </div>
            `);
          }
        });
    });

  // control the form select input section
  $(".select").each(function() {
      var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
      var template =  '<div class="' + classes + '">';
      template += '<span class="gun">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="options">';
      $(this).find("option").each(function() {
        template += '<span class="option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
      template += '</div></div>';
      
      $(this).hide();
      $(this).after(template);
    });
    $(".option:first-of-type").hover(function() {
      $(this).parents(".options").addClass("option-hover");
    }, function() {
      $(this).parents(".options").removeClass("option-hover");
    });
    $(".gun").on("click", function() {
      $('html').one('click',function() {
        $(".select").removeClass("opened");
      });
      $(this).parents(".select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".option").on("click", function() {
      $(this).parents(".funga").find("select").val($(this).data("value"));
      $(this).parents(".options").find(".option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".select").removeClass("opened");
      $(this).parents(".select").find(".gun").text($(this).text());
    });
})();

// Mobile swipe functionality

(function($) {
  $.fn.bcSwipe = function(settings) {
    var config = { threshold: 50 };
    if (settings) {
      $.extend(config, settings);
    }

    this.each(function() {
      var stillMoving = false;
      var start;

      if ('ontouchstart' in document.documentElement) {
        this.addEventListener('touchstart', onTouchStart, false);
      }

      function onTouchStart(e) {
        if (e.touches.length == 1) {
          start = e.touches[0].pageX;
          stillMoving = true;
          this.addEventListener('touchmove', onTouchMove, false);
        }
      }

      function onTouchMove(e) {
        if (stillMoving) {
          var x = e.touches[0].pageX;
          var difference = start - x;
          if (Math.abs(difference) >= config.threshold) {
            cancelTouch();
            if (difference > 0) {
              $(this).carousel('next');
            }
            else {
              $(this).carousel('prev');
            }
          }
        }
      }

      function cancelTouch() {
        this.removeEventListener('touchmove', onTouchMove);
        start = null;
        stillMoving = false;
      }
    });

    return this;
  };

  // Smooth Scrolling
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
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
          };
        });
      }
    }
  });
})(jQuery);

// Hook bswipe to carousel
$('.carousel').bcSwipe({ threshold: 50 });

//lazy load google font
  (function() {
    var font = document.createElement('link');
    font.type = 'text/css'; 
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,700';
    var s = document.getElementsByTagName('link')[0]; 
    s.parentNode.insertBefore(font, s);
  })();
