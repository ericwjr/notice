<header class = 'header'>
  <div class='logo'><a href = '{{site.baseurl}}'><img src = '{{site.baseurl}}/assets/notice.png' alt = 'logo'>{{ site.title }}</a></div>
  <div class='toggle-top-menu'>
  Contact Us
  </div>
    <div class='menu-bar'>
      <nav class = 'menu'>
        {% for section in site.data.sections %}
          <a href='{{ site.baseurl }}/#{{ section.id }}'>{{ section.text }}</a>
        {% endfor %}
      </nav>
    </div>
  </div>
</header>
