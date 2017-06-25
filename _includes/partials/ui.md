<div class = 'flex contain'>
  <div class= 'third container'>
    <div class = 'row'>
    {% for info in site.data.before %}
      <div class = 'col-md-11'>
       <i class="fa fa-5x fa-{{info.icon}}" aria-hidden="true"></i>
        <h3> {{ info.heading }}</h3>
        <p>{{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
  <div class = 'third'>
    <div class = 'case'> 
      <div class="phone">
          <div class="phone-top">
            <span class="camera"></span>
            <span class="speaker"></span>
          </div>
          <div class="tbar"></div>
          <div class="screen">
            {% include partials/screen.md %}
          </div>
          <div class="buttons">
            <span class="on-off"></span>
            <span class="sleep"></span>
            <span class="up"></span>
            <span class="down"></span>
          </div>
          <div class="lbar"></div>
          <div class = 'flex'>
              {% for button in site.data.buttons %}
                <div class = 'trio'>
                  <i class="fa fa-{{button}} fa-2x" aria-hidden="true"></i>
                </div>
              {% endfor %}
           </div>
      </div>
        <div class = 'swipe'>
          <img src = '{{site.baseurl}}/assets/swipe.png' alt = 'swipe'>
        </div>
    </div>
  </div>
  <div class = 'third container'>
    <div class = 'row'>
    {% for info in site.data.after %}
      <div class = 'col-md-11'>
        <i class="fa fa-5x fa-{{info.icon}}" aria-hidden="true"></i>
        <h3> {{ info.heading }}</h3>
        <p> {{ info.text }}</p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>
