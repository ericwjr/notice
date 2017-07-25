<header class = 'header'>
  <div class='logo'>
  <a href = '{{site.baseurl}}'>
  <img src = '{{site.baseurl}}/assets/notice1.png' alt = 'logo'>
  <!--<span>{{ site.title }}</span>-->
  </a>
  </div>
  <i class = 'fa fa-bars tp-menu' aria-hidden = 'true'></i>
  <div class='menu-bar'>
    <nav class = 'menu flex'>
    <span class = 'flex'>
      {% for section in site.data.menu %}
        <a href='{{ site.baseurl }}/#{{ section.id }}'>{{ section.text }}</a>
      {% endfor %}
      </span>
    </nav>
  </div>
</header>
