<head>
  <meta charset='utf-8'>
  <title>{{ site.title }}</title>
  <meta itemprop = 'description' name='description' content='{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}'>
  <meta property='og:description' content='{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>
  <meta name='keywords' content='{{site.title}}'>
  <meta property='og:locale' content='en_US' />
  <meta property='og:type' content='article' />
  <meta property='og:title' content='{{page.title}}' />
  <meta property='og:url' content='{{site.url}}/{{page.title}}' />
  <link rel='shortcut icon' href='{{ site.baseurl }}/assets/notice.png'>
  <i class = 'icon icon-{{info}}' aria-hidden = 'true' style = 'font-size: 32px;'></i>
  <link rel='canonical' href='{{ page.url | replace:'index.html','' | absolute_url }}'> 
  <script src='https://use.fontawesome.com/22572db09e.js'></script>
  <link href="https://file.myfontastic.com/XJbAgRNrWhky7heFpqzdyn/icons.css" rel="stylesheet">
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>
  <style>
     {% include css/main.css %}
     {% include css/ui.css %}
     {% include css/animate.css %}
     {% include css/query.css %}
  </style>
</head>
