/**
 * autogrow.js
 * http://carlrafting.com/autogrow
 * https://github.com/carlrafting/autogrow
 * Based on code from "Expanding Text Areas Made Elegant" by Neil Jenkins:
 * http://www.alistapart.com/articles/expanding-text-areas-made-elegant/
 */
(function (global) {

var containerClass, mirrorClass, spanClass, activeClass, areaClass,
    autogrow = {},
    doc = global.document;

// default customization values
var DEFAULTS = {
  activeClass: 'autogrow-active',
  areaClass: 'autogrow',
  containerClass: 'autogrow-container',
  mirrorClass: 'autogrow-mirror',
  spanClass: 'autogrow-mirror-span'
};

// user defined options
autogrow.options = {};

function createArea(container) {
  var area, span,
  mirror = '<pre class="'+mirrorClass+'">' +
                 '<span class="'+spanClass+'"></span>' +
                 '<br>' +
               '</pre>';

  container.innerHTML += mirror;

  area = container.querySelector('textarea');
  span = container.querySelector('span');
  area.classList.add(areaClass);
  span.textContent = area.value;
  container.classList.add(activeClass);
}

// attach input event on document object
function attachEventListener(root) {
  root.addEventListener('input', function(event) {
    var span, text, container;
    var target = event.target;
    if (target.classList.contains(areaClass)) {
      container = target.parentNode;
      span = container.querySelector('span');
      text = target.value;

      span.textContent = text;
    }
  }, false);
}

// set options on autogrow object
function setOptions(options) {
  var key,
      defaults = DEFAULTS;

  for (key in options) {
    if (defaults.hasOwnProperty(key)) {
      autogrow.options[key] = options[key];
    }
  }

  return autogrow.options;
}

autogrow.init = function (options) {
  var container_arr, i, l, current,
  defaults = DEFAULTS;

  if (options !== undefined) {
    setOptions(options);
  }

  containerClass = (options && options.containerClass) || defaults.containerClass;
  mirrorClass = (options && options.mirrorClass) || defaults.mirrorClass;
  spanClass = (options && options.spanClass) || defaults.spanClass;
  activeClass = (options && options.activeClass) || defaults.activeClass;
  areaClass = (options && options.areaClass) || defaults.areaClass;

  if (!doc.querySelectorAll &&
      !doc.body.classList &&
      !doc.addEventListener) {
        return;
  }

  container_arr = doc.querySelectorAll('.' + containerClass);
  l = container_arr.length;

  for (i = 0; i < l; i+=1) {
    current = container_arr[i];
    createArea(current);
    attachEventListener(current);
  }
};

// expose autogrow to global environment
global.autogrow = autogrow;

}(window));
