/*
 * autogrow.js
 */
(function (global) {

  'use strict';

  var window = global.window;
  var document = window.document;

  function autogrow(target, options) {
    // set options argument to empty object if undefined to prevent error
    if (!options) {
      options = {};
    }

    if (!target || target === '') {
      return;
    }

    var element;
    var char = target.charAt(0);

    // get target element from DOM
    if (char === '#' || char === '.') {
      element = document.querySelector(target);
    } else {
      element = document.getElementById(target);
    }
    // exit if no element was found
    if (!element) return;

    // set classnames for elements
    var areaClass = options.areaClass || 'autogrow-area';
    var containerClass = options.containerClass || 'autogrow';
    var activeClass = options.activeClass || 'autogrow-active';
    var mirrorClass = options.mirrorClass || 'autogrow-mirror';
    var spanClass = options.spanClass || 'autogrow-mirror-span';

    // create a bunch of elements
    var frag = document.createDocumentFragment();
    var container = document.createElement('div');
    var pre = document.createElement('pre');
    var span = document.createElement('span');
    var br = document.createElement('br');

    // exit if element already has areaClass applied
    // don't want to execute the code twice
    if (element.classList.contains(areaClass)) return;

    // assign classes to elements
    element.classList.add(areaClass);
    container.classList.add(containerClass);
    container.classList.add(activeClass);
    pre.classList.add(mirrorClass);
    span.classList.add(spanClass);

    // get text from element
    span.textContent = element.value;

    // html building... i guess
    pre.appendChild(span);
    pre.appendChild(br);
    container.appendChild(pre);

    // create event listener for container
    container.addEventListener('input', function inputEvent(event) {
      var t = event.target;
      var text = t.value;
      if (t.classList.contains(areaClass)) {
        span.textContent = text;
      }
    });

    // append container node to fragment
    frag.appendChild(container);
    
    // render fragment to DOM
    window.requestAnimationFrame(function () {
      element.parentNode.insertBefore(frag, element);
      container.appendChild(element);
      if (element.autofocus) {
        element.focus();
      }
    });

    return {
      container: container,
      mirror: pre,
      span: span,
      target: element,
      selector: target
    };
  }

  // is this a good idea for backwards compatibility?
  autogrow.all = function () {
    var elements = document.getElementsByTagName('textarea');
    var length = elements.length;
    var rand = Math.floor(Math.random() * 10000000);
    var element;

    for (var i = 0; i < length; i++) {
      element = elements[i];
      if (!element.id || element.id === '') {
        element.id = 'autogrow-'+rand;
      }
      autogrow(element.id);
    }
  };
  autogrow.init = autogrow.all;

  // expose autogrow to global environment
  global.autogrow = autogrow;
  global.a = autogrow;

}(window));
