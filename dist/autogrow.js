/**
 * autogrow.js
 * v2.0.2
 */
/**
 * This is the generated HTML output when the function is called:
 * 
 * autogrow('myID');
 * 
 * <!-- Before --> 
 * <textarea id="myID"></textarea>
 * 
 * <!-- After -->
 * <div class="autogrow">
 *   <pre class="autogrow-mirror">
 *     <span class="autogrow-mirror-span"></span>
 *     <br>
 *   </pre>
 *   <textarea id="myID" class="autogrow-area"></textarea>
 * </div>
 *  
 * @namespace 
 * @param target {(string|HTMLTextArea)} - Element in DOM to get or element to transform
 * @param options {object} - Classes to apply to the generated HTML, merged with _defaults
 * @returns {object} {
    container,
    mirror,
    span,
    target,
    element
  }
 *
 */

function autogrow(target, options={}) {
  if (!target && target === '') {
    return;
  }

  /**
   * default classNames for generated HTML
   * 
   * @memberof autogrow
   * @constant _defaults
   * @type {object}
   * @default
   * @protected
   * @property {string} areaClass - textarea class
   * @property {string} containerClass - container div class
   * @property {string} mirrorClass - mirror pre element class
   * @property {string} spanClass - span element class
   * 
   */
  const _defaults = {
    areaClass: 'autogrow-area',
    containerClass: 'autogrow',
    mirrorClass: 'autogrow-mirror',
    spanClass: 'autogrow-mirror-span'
  };

  const _options = {
    ..._defaults,
    ...options
  };

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
  const {
    areaClass,
    containerClass,
    mirrorClass,
    spanClass
  } = _options;

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
    container,
    mirror,
    span,
    target,
    element
  };
}

/**
 * Gets all `textarea` elements from DOM and runs `autogrow()` on each element. Sets an id on element if it doesn't already have it.
 * 
 * @memberof autogrow
 * @method all
 * @param {object} options - Accepts same options as autogrow(target, options)
 */
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

// is this a good idea for backwards compatibility?
/**
 * Alias for autogrow.all(). Backwards compatible with v1.x.x
 * 
 * @memberof autogrow
 * @method init
 * @alias all
 */
autogrow.init = autogrow.all;

// expose autogrow to global environment
window.autogrow = autogrow;
window.a = autogrow;

export { autogrow };
