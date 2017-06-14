<header class = 'header'>
  <div class='logo'>
  <a href = '{{site.baseurl}}'>
  <img src = '{{site.baseurl}}/assets/notice.png' alt = 'logo'>{{ site.title }}
  </a>
  </div>
  <a class='toggle-top-menu' href = '#form'>
  Contact Us
  </a>
    <div class='menu-bar'>
      <nav class = 'menu'>
        {% for section in site.data.sections %}
          <a href='{{ site.baseurl }}/#{{ section.id }}'>{{ section.text }}</a>
        {% endfor %}
      </nav>
    </div>
</header>
