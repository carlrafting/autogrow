# autogrow

## What is autogrow?

autogrow consists two files. One CSS file and one JavaScript file. autogrows purpose is to make `textarea`s on the web, more elegant and less frustrating to use.

It does this by expanding the height of the `textarea`, depending on the amount of content it contains. This solves the problem of having to scroll inside the textarea, which can be a frustrating experience, especially on mobile devices.

You can read more in the article [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by _Neil Jenkins_, where some of the code is adapted from.

## How to Use autogrow

Using autogrow is simple. Simply call `autogrow()` by providing the element to select as the first argument.

```js
// get element by id
autogrow('textarea')

// get element with id selector
autogrow('#textarea')

// get element with class selector
autogrow('.textarea')

// get element by id and provide custom styling options
autogrow('textarea', {
  areaClass: 'my-area-class'
  containerClass: 'my-container-class'
  activeClass: 'my-active-class'
  mirrorClass: 'my-mirror-class'
  spanClass: 'my-span-class'
})
```

## API

### `autogrow(target, options)`

* `target`, `String`, element in DOM to get
* `options`, `Object`, accepts following properties:
```js
{
    areaClass: String // class to apply to textarea
    containerClass: String // class for autogrow container
    activeClass: String // class for when autogrow is active. applies to container
    mirrorClass: String // class for mirror element
    spanClass: String // class for span element
}
```

Here's the html that's generated when `autogrow('autogrow')` is called.

Before:
```html
<textarea id="autogrow"></textarea>
```

After:
```html
<div class="autogrow-container autogrow-active">
  <pre class="autogrow-mirror">
    <span class="autogrow-mirror-span"></span>
    <br>
  </pre>
  <textarea id="autogrow" class="autogrow"></textarea>
</div>
```

### `autogrow.all()`

Takes no arguments. Gets all `textarea` elements from DOM and runs `autogrow()` on each element. Sets an id on element if it doesn't already have it.

### `autogrow.init()`

Alias for `autogrow.all()`.

Behaves similarly to previous versions of autogrow.

## Download

You can get the code by either cloning the repository, or by downloading a ZIP file.

### Clone Source Code

```bash
$ git clone https://github.com/carlrafting/autogrow.git
```

### Download ZIP file

Download the [latest release](https://github.com/carlrafting/autogrow/releases/latest) as a ZIP file.

## New in Version 2

Here's an overview of noteworthy changes in version 2.

* Creates DOM Elements with `document.createElement()` instead of setting string values on `Element.innerHTML`
* It's now possible to use `autogrow()` for targeting individual elements.
* `autogrow.init()` is now alias for `autogrow.all()`. Makes it possible to upgrade from previous versions without breaking.
* Makes use of a `DocumentFragment` for better performance.
* Uses `requestAnimationFrame` when appending nodes to the DOM.
