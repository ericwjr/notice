<div class = 'flex contain'>
  <div class= 'third container'>
    <div class = 'row'>
    {% for info in site.data.before_ui_screen %}
      <div class = 'col-md-11'>
      <!-- svg image/icons referenced below -->
      <img src = '{{ site.baseurl }}/assets/icons/{{ info.icon }}.svg' alt = '{{ info.icon }} icon'>
        <h3> {{ info.heading }}</h3>
        <p>{{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
  <div class = 'third'>
    <img src = '{{ site.baseurl }}/assets/mockup-gif' alt = 'mock-up' class = 'mockup'>
  </div>
  <div class = 'third container'>
    <div class = 'row'>
    {% for info in site.data.after_ui_screen %}
      <div class = 'col-md-11'>
      <img src = '{{ site.baseurl }}/assets/icons/{{ info.icon }}.svg' alt = '{{ info.icon }} icon'>
        <h3> {{ info.heading }}</h3>
        <p> {{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>
