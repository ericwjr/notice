<div id='carousel' class='carousel slide carousel-fade swipe-me' data-ride='carousel'>
  <div class='carousel-inner'>
    {% for screen in site.data.screens %}
      <div class='fit item {% if forloop.index == 1 %} {{'active'}}{% endif %}'>
       <img src = '{{site.baseurl}}/assets/screens/{{screen}}.png' alt = '{{screen}}'>
      </div>
    {% endfor %}
  </div>
</div>