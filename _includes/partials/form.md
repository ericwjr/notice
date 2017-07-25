<div class = 'fluid flex'><h2>Reach Out To Us</h2>
  <div class = 'form-widget flex'>
    <div id = 'notification'></div>
    <form method = 'POST' action = 'https://formspree.io/{{site.email}}' id = 'contact-form' class = 'contain'>
      <div class = 'funga'>
        <select name='Subject' id='Subject' class='select subject' placeholder='Join Mailing List' required>
        {% for option in site.data.options %}
          {% if forloop.index == 1 %}
          <option value = '{{option}}' selected >{{ option  }}</option>
          {% else %}
          <option value = '{{option}}'>{{ option  }}</option>
          {% endif %}
        {% endfor %}
      </select>
      </div>
      <input type = 'text' name = 'Name' placeholder = 'Name' required class = 'input-field'>
      <input type = 'email' name = 'Email' placeholder = 'Email Address' required class = 'input-field'>
      <textarea placeholder = 'Leave Us a Message' name = 'Message' class = 'input-field'></textarea>
      <input type = 'submit' value = 'Submit'>
    </form>
  </div>
</div>
