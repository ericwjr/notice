<div class="regular slider">
  {% for slide in site.data.slides %}
   <div class  = 'slide-piece'>
    <div class='item'>
      <video autoplay loop muted>
        <source src = '{{ site.baseurl }}/assets/video{{ forloop.index }}.mp4'>
      </video>
      <div class = 'shadow'>
        <div class = 'hold contain'>
          <div class = 'hold-inner'>
            <a class = 'download flex' href = 'https://play.google.com/store/apps/details?id=co.sonofy.smartroomsolutions&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target = '_blank'>
              <i class="fa fa-android" aria-hidden = 'true'></i>
              <p>Download Mobile App</p>
            </a>
            <span class = 'ups displace'>
              <h1>{{ slide.heading }}</h1>
            </span>
            <span class = 'downs displace'>
            <a class = 'ui'> 
              {{ slide.sub-heading }}
              <i class="fa fa-arrow-circle-o-right" aria-hidden = 'true'></i>
            </a>
            </span>
            </div>
          </div>
        </div>
    </div>
  </div>
  {% endfor %}
</div>