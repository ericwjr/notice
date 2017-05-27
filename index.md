---
layout: default
--- 
<div id='carousel' class='carousel slide carousel-fade' data-ride='carousel'>
  <ol class='carousel-indicators'>
    <li data-target='#carousel' data-slide-to='0' class='active'></li>
    <li data-target='#carousel' data-slide-to='1'></li>
    <li data-target='#carousel' data-slide-to='2'></li>
    <li data-target='#carousel' data-slide-to='3'></li>
  </ol>
  <!-- Carousel items -->
  <div class='carousel-inner'>
    {% for slide in site.data.slides %}
      <div class='item {% if forloop.index == 1 %} {{'active'}}{%endif%}'>
        <div class = 'hold'>
        <h1>{{ slide.heading }}</h1>
        <a> 
          {{ slide.sub-heading }}
          <i class="fa fa-arrow-circle-o-right" aria-hidden = 'true'></i>
        </a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
