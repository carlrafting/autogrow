(function () {
  var txtareas = document.getElementsByTagName('textarea'),
      len = txtareas.length,
      t,
      i = 0;
  function slct(event) { event.target.select(); }   
  for (i; i < len; i+=1) {
    t = txtareas[i];
    t.addEventListener('click', slct, false);
  }
  autogrow.init();
}());