/**
 * autogrow.js
 * v2.0.0
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.autogrow = {}));
}(this, (function (exports) { 'use strict';

  function autogrow(target, options) {
    // set options argument to empty object if undefined to prevent error
    if (!options) {
      options = {};
    }

    if (!target && target === '') {
      return;
    }

    if (
      !document.querySelector &&
      !document.addEventListener &&
      !document.body.classList
    ) {
      return;
    }

    let element;
    let char;

    if (target instanceof HTMLTextAreaElement) {
      element = target;
    }
    if (typeof target === 'string') {
      char = target.charAt(0);

      // get target element from DOM
      if (char === '#' || char === '.') {
        element = document.querySelector(target);
      } else {
        element = document.getElementById(target);
      }

      // set char to null, wont be used anymore
      char = null;
    }

    // exit if no element was found
    if (!element) return;

    // set classnames for elements
    const areaClass = options.areaClass || 'autogrow-area';
    const containerClass = options.containerClass || 'autogrow';
    const mirrorClass = options.mirrorClass || 'autogrow-mirror';
    const spanClass = options.spanClass || 'autogrow-mirror-span';

    // create a bunch of elements
    const frag = document.createDocumentFragment();
    const container = document.createElement('div');
    const mirror = document.createElement('pre');
    const span = document.createElement('span');
    const br = document.createElement('br');

    // exit if element already has areaClass applied
    // don't want to execute the code twice
    if (element.classList.contains(areaClass)) return;

    // assign classes to elements
    element.classList.add(areaClass);
    container.classList.add(containerClass);
    mirror.classList.add(mirrorClass);
    span.classList.add(spanClass);

    // get text from element
    span.textContent = element.value;

    // html building... i guess
    mirror.appendChild(span);
    mirror.appendChild(br);
    container.appendChild(mirror);

    // create event listener for container
    container.addEventListener('input', function inputEvent(event) {
      const t = event.target;
      const text = t.value;

      if (t.classList.contains(areaClass)) {
        span.textContent = text;
      }
    });

    // append container node to fragment
    frag.appendChild(container);

    // render fragment to DOM if element has parentNode
    if (element.parentNode) {
      element.parentNode.insertBefore(frag, element);
    }

    container.appendChild(element);

    if (element.autofocus) {
      element.focus();
    }

    return {
      container: container,
      mirror: mirror,
      span: span,
      target: target,
      element: element
    };
  }

  // is this a good idea for backwards compatibility?
  autogrow.all = function (options) {
    const elements = document.getElementsByTagName('textarea');
    const length = elements.length;
    let rand;
    let element;

    for (var i = 0; i < length; i++) {
      element = elements[i];
      rand = Math.floor(Math.random() * 10000000);

      if (!element.id || element.id === '') {
        element.id = 'autogrow-' + rand;
      }

      autogrow(element.id, options);
    }
  };
  autogrow.init = autogrow.all;

  // expose autogrow to global environment
  window.autogrow = autogrow;
  window.a = autogrow;

  exports.autogrow = autogrow;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
