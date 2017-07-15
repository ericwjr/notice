<header class = 'header'>
  <div class="row">
          	<div class='col-md-3 offset-md-4 logo'>
              	<a href = '{{site.baseurl}}'>
                  	<img src = '{{site.baseurl}}/assets/notice.png' alt = 'logo'>
              	</a>
          	</div>
          	<div class='col-md-3 offset-md-4 menu-bar'>
              <nav class = 'menu flex'>
                  <span class = 'flex'>
                      {% for section in site.data.menu %}
                          <a href='{{ site.baseurl }}/#{{ section.id }}'>{{ section.text }}</a>
                      {% endfor %}
                  </span>
              </nav>
          	</div>
  </div>
  <i class = 'fa fa-bars tp-menu' aria-hidden = 'true'></i>
</header>
