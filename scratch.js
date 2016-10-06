/**
 * scratch.js
 * ==========
 *
 * Experimental stuff that may or may not be included in a future release.
 *
 */

// create new textarea with same attributes as original textarea in DOM
function createTextarea() {
  var orig = document.querySelector("textarea");
  var textarea = document.createElement("textarea");

  var attrs, l, name, value;
  if (orig.hasAttributes()) {
    l = orig.attributes.length;
    for (var i = 0; i < l; i++) {
      name = orig.attributes[i].name;
      value = orig.attributes[i].value;
      textarea.setAttribute(name, value);
    }
  }

  return textarea;
}

// Quick'n Dirty
/*
var areas = document.querySelectorAll('textarea[data-autogrow]');
[].forEach.call(areas, function (a) {
  a.addEventListener('focus', function (event) {
    var target = event.target;

  });
  a.addEventListener('blur', function (event) {
    var target = event.target;
    alert(target.id + " " + "blurred!")
  });
});
//*/

var ref;
var strings = [
  "Hello!",
  "This is autogrow...",
  "Pretty neat huh?",
  "x", "y", "z"
];
var area = document.querySelector('textarea');
var pre = document.querySelector('pre');

function shift_strings() {
  var ref;
  var string = strings.shift();
  console.log("string:", string);
  var x = string.split("");
  console.log("x:", x);

  var letter = x.shift();
  var count = x.length;
  if (count > 0) {
    area.value += letter + "\n\n";
    pre.textContent += letter + "\n\n";
    return true;
  }

  return clearInterval(foo);
}

//var foo = setInterval(shift_strings, 1000);

function append_string() {
  var string = strings.shift();

  if (strings.length === 1) {
    area.value += string + "\n";
    pre.textContent += string + "\n";
    return;
  }

  if (strings.length > 0) {
    area.value += string + "\n\n";
    pre.textContent += string + "\n\n";
    return;
  }

  clearInterval(ref);
}

ref = setInterval(append_string, 2500);
