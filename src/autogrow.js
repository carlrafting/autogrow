// exit if browser doesn't support following features
(function () {
  'use strict';
  if (!document.querySelector
  && !document.addEventListener
  && !document.body.classList) {
    return;
  }
}());

function autogrow(target, options) {
  'use strict';
  // set options argument to empty object if undefined to prevent error
  if (!options) {
    options = {};
  }

  if (!target && target === '') {
    return;
  }

  var element;
  var char;

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
  var areaClass = options.areaClass || 'autogrow-area';
  var containerClass = options.containerClass || 'autogrow';
  var mirrorClass = options.mirrorClass || 'autogrow-mirror';
  var spanClass = options.spanClass || 'autogrow-mirror-span';

  // create a bunch of elements
  var frag = document.createDocumentFragment();
  var container = document.createElement('div');
  var mirror = document.createElement('pre');
  var span = document.createElement('span');
  var br = document.createElement('br');

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
    var t = event.target;
    var text = t.value;
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
  'use strict';
  var elements = document.getElementsByTagName('textarea');
  var length = elements.length;
  var rand;
  var element;

  for (var i = 0; i < length; i++) {
    element = elements[i];
    rand = Math.floor(Math.random() * 10000000);

    if (!element.id || element.id === '') {
      element.id = 'autogrow-'+rand;
    }

    autogrow(element.id, options);
  }
};
autogrow.init = autogrow.all;

// expose autogrow to global environment
window.autogrow = autogrow;
window.a = autogrow;
