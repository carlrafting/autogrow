/**
 * autogrow.js
 * http://carlrafting.com/autogrow
 * https://github.com/carlrafting/autogrow
 * Based on code from "Expanding Text Areas Made Elegant" by Neil Jenkins:
 * http://www.alistapart.com/articles/expanding-text-areas-made-elegant/
 */
 
(function (win, doc, undefined) {
  'use strict';
  
  if (!doc.querySelector) return;
  
  function mixin(src, dest) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dest[key] = src[key];
      }
    }
    
    return dest;
  }
  
  function classToSelector(className) {
    return '.' + className;
  }
  
  var autogrow = (function () {
    var defaults = {
      containerClass: 'autogrow-container',
      mirrorClass: 'autogrow-mirror',
      spanClass: 'autogrow-mirror-span',
      activeClass: 'autogrow-active',
      areaClass: 'autogrow'
    };
    
    function render(containerSelector, html, activeClass) {
      var i, container,
      containers = doc.querySelectorAll(containerSelector),     
      l = containers.length;
      
      for (i = 0; i < l; i+=1) {
        container = containers[i];
        container.innerHTML += html;
        container.classList.add(activeClass);
      }
    }

    function init(options) {
      if (options === undefined) options = {};
      
      options = mixin(defaults, options);
     
      // variable definitions for later use
      var areas, spans,
  
      // assign properties from options object to local variables
      // for more memory efficiancy
      containerClass = options.containerClass,
      mirrorClass = options.mirrorClass,
      spanClass = options.spanClass,
      activeClass = options.activeClass,
      areaClass = options.areaClass,
      
      mirrorHtml = '<pre class="' + mirrorClass + '">' +
                     '<span class="' + spanClass + '"></span>' +
                     '<br>' +
                   '</pre>',

      // selector variables
      containerSelector = classToSelector(containerClass),
      areaSelector = classToSelector(areaClass),
      spanSelector = classToSelector(spanClass);

      // render mirror html
      render(containerSelector, mirrorHtml, activeClass);

      areas = document.querySelectorAll(areaSelector);
      spans = document.querySelectorAll(spanSelector);
      
      for (var i = 0; i < areas.length; i++) {
        areas[i].classList.add(areaClass);
        spans[i].textContent = areas[i].value;
      }
      
      doc.addEventListener('input', function (event) {
        var target = event.target;
        
        if (target.classList.contains(areaSelector)) {
          span = 
          span.textContent = area.value;
        }        
      }, false);
    
      return {
        focus: function () {
          document.querySelector(areaSelector).focus();  
        }
      };
    }
   
    return { init: init };
   
  }());

  win.autogrow = autogrow;
}(this, this.document));