<header class = 'header'>
  <div class="logo"><a href = '{{site.baseurl}}'>{{ site.title }}</a></div>
  <div class="toggle-top-menu"><i class="fa fa-bars" aria-hidden = 'true'></i></div>
    <div class="menu-bar">
      <nav class = 'menu'>
        {% for section in site.data.sections %}
          <a href='{{ site.baseurl }}/#{{ section.id }}'>{{ section.text }}</a>
        {% endfor %}
      </nav>
    </div>
  </div>
</header>
