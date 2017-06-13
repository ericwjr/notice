(function(){
  // move the slides
  $('.carousel').carousel({
    interval: 7500
  });

  //toggle the contact form in and out of view
  $('.toggle-top-menu').on('click', function () {
     $('.fmodal').toggleClass('flip-open');
  });

  //toggle the demo ui modalin and out of view
  $('.ui').on('click', function () {
    //  $('.demo').toggleClass('flip-open');
    //  $('.hold').toggleClass('blind');
  });

 //toggle out of view the modals
  $('.fmodal').on('click', function(e) {
    if (e.target === this) {
        $('.fmodal').toggleClass('flip-open');
    }
  });

  $('.demo').on('click', function(e) {
  if (e.target === this) {
      $('.demo').toggleClass('flip-open');
      $('.hold').toggleClass('blind');
  }
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
