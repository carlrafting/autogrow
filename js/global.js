(function () {
  var txtareas = document.getElementsByTagName('textarea'),
      len = txtareas.length,
      t,
      i = 0;

  autogrow('autogrow');

  function get(url, fn) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
      if (r.readyState === 4) {
        if (r.status === 200) {
          return fn(r.responseText);
        }
      }
    };
    r.open("get", url, true);
    r.send(null);
  }

  get('autogrow.css', function (r) {
    document.getElementById('css').value = r;
  });

  get('autogrow.js', function (r) {
    document.getElementById('js').value = r;
  });

  function slct() {
    this.select();
  }

  for (i; i < len; i+=1) {
    t = txtareas[i];
    t.addEventListener('click', slct, false);
  }
}());
