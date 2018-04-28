# autogrow

## What is autogrow?

autogrow consists two files. One CSS file and one JavaScript file. autogrow purpose is to make `textarea`s on the web, more elegant and less frustrating to use.

It does this by expanding the height of the `textarea`, depending on the amount of content it contains. This solves the problem of having to scroll inside the textarea, which can be a frustrating experience on mobile devices.

You can read more in the article [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by _Neil Jenkins_, where a lot the code is adapted from.

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
  activeClass: 'my-actice-class'
  mirrorClass: 'my-mirror-class'
  spanClass: 'my-span-class'
})
```

## API

```js
autogrow(target, options)
```
* `target`, string, elements to get in DOM
* `options`, object which accepts following properties
```js
{
    areaClass: string // class to apply to textarea
    containerClass: string // class for autogrow container
    activeClass: string // class for when autogrow is active. applies to container
    mirrorClass: string // class for mirror element
    spanClass: string // class for span element
}
```

---

Heres the html that's generated when `autogrow('autogrow')` is called.

Before
```html
<textarea id="autogrow"></textarea>
```

After
```html
<div class="autogrow-container autogrow-active">
  <pre class="autogrow-mirror">
    <span class="autogrow-mirror-span"></span>
    <br>
  </pre>
  <textarea id="autogrow" class="autogrow"></textarea>
</div>
```


## Download

You can get the code by various methods.

### Clone Source Code

```bash
git clone https://github.com/carlrafting/autogrow.git
```

### Download ZIP file

Download the [latest release](https://github.com/carlrafting/autogrow/releases/latest) as a ZIP file.

## New in Version 2

Here's an overview of noteworthy changes in version 2.

* No longer uses `autogrow.init()`. `autogrow()` is used instead.
* Doesn't get elements from the DOM automatically anymore, instead they're specified as an argument to `autogrow()`.
* Makes use of a `DocumentFragment` for better performance.
* Uses `requestAnimationFrame` when appending nodes to the DOM.
