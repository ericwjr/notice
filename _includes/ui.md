<style>{% include ui.css %}</style>
<div class = 'row'>
  <div class= 'col-md-4 row'>
  {% for info in site.data.before %}
    <h3>info.heading</h3>
    <p>info.text</p>
  {% endfor %}
  </div>
  <div class = 'col-md-4'>
    <div class = 'case'> 
      <div class="iphone">
          <div class="iphone-top">
            <span class="camera"></span>
            <span class="speaker"></span>
          </div>
          <div class="top-bar"></div>
          <div class="iphone-screen">
            <img src="{{ site.baseurl }}/assets/swipe1.png" alt="" />
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
  <div class = 'col-md-4 row'>
    {% for info in site.data.after %}
      <h3>info.heading</h3>
      <p>info.text</p>
    {% endfor %}
  </div>
</div>
