 <div class = 'fluid'><h2>Reach Out To Us</h2>
  <form method = 'POST' action = 'https://formspree.io/{{site.email}}' id = 'form'>
    <div class = 'funga'>
      <select name='Subject' id='Subject' class='select subject' placeholder='Choose Subject' required>
      {% for option in site.data.options %}
        <option value = '{{option}}'>{{ option }}</option>
      {% endfor %}
    </select>
    </div>
    <input type = 'text' name = 'fname' placeholder = 'First Name' required>
    <input type = 'email' name = 'email' placeholder = 'Email Address' required>
    <textarea placeholder = 'Leave us a further details'></textarea>
    <input type = 'submit' value = 'submit'>
  </form></div>
