---
layout: default
--- 
<div id='carousel' class='carousel slide carousel-fade' data-ride='carousel'>
  <ol class='carousel-indicators'>
    {% for f in site.data.slides %}
      {% assign x = forloop.index | minus: 1 %}
      <li data-target='#carousel' data-slide-to='{{ x }}' {% if x == 0 %} class='active' {% endif %}></li>
    {% endfor %}
  </ol>
  <div class='carousel-inner'>
    {% for slide in site.data.slides %}
      <div class='item {% if forloop.index == 1 %} {{'active'}}{% endif %}'>
        <video src = '{{site.baseurl}}/assets/video{{ forloop.index }}.mp4' autoplay loop></video>
        <div class = 'shadow'>
          <div class = 'hold'>
          <h1>{{ slide.heading }}</h1>
          <a> 
            {{ slide.sub-heading }}
            <i class="fa fa-arrow-circle-o-right" aria-hidden = 'true'></i>
          </a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
<section>{% include contact.md %}<section>