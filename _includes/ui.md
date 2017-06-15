<style>{% include ui.css %}</style>
<div class = 'flex'>
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
      <div class="iphone">
          <div class="iphone-top">
            <span class="camera"></span>
            <span class="speaker"></span>
          </div>
          <div class="top-bar"></div>
          <div class="iphone-screen">
            {% include screen.md %}
          </div>
          <div class="buttons">
            <span class="on-off"></span>
            <span class="sleep"></span>
            <span class="up"></span>
            <span class="down"></span>
          </div>
          <div class="bottom-bar"></div>
          <div class="iphone-bottom">
            <span></span>
          </div>
      </div>
      <div class = 'swipe'>
        <img src = '{{site.baseurl}}/assets/swipe.png' alt = ''>
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
