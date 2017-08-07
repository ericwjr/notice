<div class = 'flex contain' style="background: url(../assets/bg.svg)">
  <div class= 'third container'>
    <div class = 'row'>
    {% for info in site.data.before_ui_screen %}
      <div class = 'col-md-11'>
        <i class = 'icon icon-{{ info.icon }}' aria-hidden = 'true' style = 'font-size: 40px;'></i>
        <h3> {{ info.heading }}</h3>
        <p>{{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
  <div class = 'third'>
    <img src = '{{ site.baseurl }}/assets/mockup-gif.gif' alt = 'mock-up' class = 'mockup'>
  </div>
  <div class = 'third container'>
    <div class = 'row'>
    {% for info in site.data.after_ui_screen %}
      <div class = 'col-md-11'>
        <i class = 'icon icon-{{ info.icon }}' aria-hidden = 'true' style = 'font-size: 40px;'></i>
        <h3> {{ info.heading }}</h3>
        <p> {{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>
