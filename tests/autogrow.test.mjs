import 'global-jsdom/register';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import '../src/autogrow.js';

const { a } = window;

test.before.each(() => {
  document.body.insertAdjacentHTML('afterbegin', '<textarea id="textarea-one" class="hello"></textarea>');
});

test('provides a shortcut method', () => {
  assert.is.not(a, undefined);
});

test('returns undefined if no element was found', function () {
  const dontExist = a('foo');
  assert.equal(dontExist, undefined);
});

test('should return undefined if no element is given', function () {
  assert.equal(a(null), undefined);
  assert.equal(a(''), undefined);
  assert.equal(a(), undefined);
});

test('returns the target element if it was found', function () {
  assert.not.equal(a('textarea-one').element, undefined);
});

test('returns the container, if element was found', function () {
  assert.not.equal(a('textarea-one').container, undefined);
});

test('works if class selector is given', function () {
  const selector = '.hello';
  const element = document.querySelector(selector);
  assert.equal(a(selector).element.className, element.className);
});

test('works if id selector is given', function () {
  const selector = '#textarea-one';
  const element = document.querySelector(selector);
  assert.equal(a(selector).element.id, element.id);
});

test('works if options are given', function () {
  const selector = '#textarea-one';
  const element = document.querySelector(selector);
  element.className = '';
  const className = 'customAreaClass';
  assert.equal(
    a(
      selector, {
        areaClass: className
      }
    ).element.className, 
    className
  );
});

test('should accept HTMLTextAreaElement as target argument', function () {
  const textarea = document.createElement('textarea');
  const id = 'foobar';
  textarea.id = id;
  const expected = a(textarea).element.id;
  assert.match(expected, id);
});

test.run();
