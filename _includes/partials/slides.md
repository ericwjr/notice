<div id='carousel' class='carousel slide carousel-fade once contain' data-ride='carousel'>
  <ol class='carousel-indicators flex' id = 'indicate'>
    {% for f in site.data.slides %}
      {% assign x = forloop.index | minus: 1 %}
      <li data-target='#carousel' data-slide-to='{{ x }}' {% if x == 0 %} class='active' {% endif %}></li>
    {% endfor %}
  </ol>
  <div class='carousel-inner'>
    {% for slide in site.data.slides %}
      <div class="item {% if forloop.index == 1 %} {{'active'}}{% endif %}">
        <video autoplay loop muted>
          <source src = '{{site.baseurl}}/assets/{{ slide.video }}'>
        </video>
        <div class = 'shadow'  style = 'background: {{ slide.background }};'>
          <div class = 'hold contain'>
            <div class = 'hold-center'>
            <a href="https://play.google.com/store/apps/details?id=co.sonofy.smartroomsolutions&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" class = 'download flex' target = '_blank'>
              <div class = 'flex'>
              <i class="fa fa-android" aria-hidden = 'true'></i>
             <span>Download Mobile App</span>
              </div>
            </a>
              <h1>{{ slide.heading }}</h1>
              <span class = 'downs displace'>
                <a class = 'ui' href = '{{ site.baseurl }}/#ui'>
                  {{ slide.sub-heading }}
                  <i class="fa fa-arrow-circle-o-right" aria-hidden = 'true'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
