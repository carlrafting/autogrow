/**
 * autogrow.js
 * http://carlrafting.com/autogrow
 * https://github.com/carlrafting/autogrow
 * Based on code from "Expanding Text Areas Made Elegant" by Neil Jenkins:
 * http://www.alistapart.com/articles/expanding-text-areas-made-elegant/
 */

var autogrow = (function (win) {

  var doc = win.document;

  function init(options) {
   
    var containerClass = (options && options.containerClass) || 'autogrow-container',
        container_arr,
        mirrorClass = (options && options.mirrorClass) || 'autogrow-mirror',
        spanClass = (options && options.spanClass) || 'autogrow-mirror-span',
        activeClass = (options && options.activeClass) || 'autogrow-active',
        areaClass = (options && options.areaClass) || 'autogrow',
        i,
        l,
        createArea;

    if (doc.querySelectorAll && doc.body.classList && doc.addEventListener) {

      createArea = function(container) {
        var mirror = '<pre class="' + mirrorClass + '">' +
                       '<span class="' + spanClass + '"></span>' +
                       '<br>' +
                     '</pre>',
            area,
            span;
        container.innerHTML += mirror;
        area = container.querySelector('textarea');
        span = container.querySelector('span');
        area.classList.add(areaClass);        
        doc.addEventListener('input', function (event) {
          if (event.target.classList.contains('autogrow')) {
            span.textContent = area.value;
          }        
        }, false);
        span.textContent = area.value;
        container.classList.add(activeClass);
      };

      container_arr = doc.querySelectorAll('.' + containerClass);
      l = container_arr.length;

      for (i = 0; i < l; i+=1) {
        createArea(container_arr[i]);
      }
 
    }

  }
 
  return { init: init };
 
}(this));