(function(){
  $('.carousel').carousel({
    interval: 7500
  });
  $('.fa-comments').on('click', function () {
     $('.form-widget').toggleClass('flip-open');
  });
  $('.form-widget').on('click', function(e) {
    if (e.target === this) {
        $('.form-widget').toggleClass('flip-open');
        console.log( 'clicked the foobar' );
    }
  });
  mail = $('#form');
    widget = $('.widget');
    mail.submit(function(e) {
      guest = document.getElementById('name').value.toLowerCase();
      mail = document.getElementById('email').value.toLowerCase();
      message = document.getElementById('message').value.toLowerCase();
      e.preventDefault();
        $.ajax({
          url: '//formspree.io/info@funweirdscience.com',
          method: 'POST',
          data: $(this).serialize(),
          dataType: 'json',
          beforeSend: function() {
            widget.html(`
              <h2>Sending</h2>
              <span class = 'spinner'></span>
            `);
          },
          success: function(data) {
            widget.html(`
              <div class = "confirm">
                <h2 class = 'mark capital'>Hello ${guest}</h2>
                <div class = 'big-icon  success'><i class = 'icon icon-cool'></i></div>
                <p>Great to hear from you. We will get back to you asap.</p>
              </div>
            `);
          },
          error: function(err) {
            widget.html(`
              <div class = "confirm">
                <h2 class = 'error'>There was problem.</h2>
                <p>Refrsh and try again.</p>
              </div>
            `);
          }
        });
    });

    $('.previous').on('click', function() {
      window.history.back();
      console.log('I want to go back');
    });

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
