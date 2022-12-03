---
title: autogrow - textareas 2.0
toc:
  what:
    label: What is autogrow?
    id: "what"
  new: 
    label: New in Version 2
    id: "v2"
  upgrading:
    label: Upgrading from 1.x.x
    id: "upgrading"
  usage:
    label: How to Use autogrow
    id: "usage"
  api:
    label: API
    id: "api"
---

## {{ toc.what.label }} 

autogrow consists two files. One CSS file and one JavaScript file. autogrows purpose is to make `textarea`s on the web, more elegant and less frustrating to use.

It does this by expanding the height of the `textarea`, depending on the amount of content it contains. This solves the problem of having to scroll inside the textarea, which can be a frustrating experience, especially on mobile devices.

You can read more in the article [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by _Neil Jenkins_, where some of the code is adapted from.

## {{ toc.new.label }}

Here's an overview of noteworthy changes in version 2.

* Accepts `HTMLTextAreaElement` as `target` argument to `autogrow()`. Doesn't need to be attached to the DOM.
* Creates DOM Elements with `document.createElement()` instead of setting string values on `Element.innerHTML`
* It's now possible to use `autogrow()` for targeting individual elements.
* `autogrow.init()` is now alias for `autogrow.all()`. Makes it possible to upgrade from previous versions without breaking.
* Makes use of a `DocumentFragment` for better performance.

## {{ toc.upgrading.label }}

If you've used autogrow previously, your html for autogrow should look something like this:

```html
<div class="autogrow-container">
<textarea></textarea>
</div>
```

This is fine and will work in version 2 as well. In version 2 it is no longer necessary to wrap the `textarea` element since autogrow generates a wrapper `div` for you, leaving the `div` might leave you with extra markup you don't need.

## {{ toc.usage.label }}

Using autogrow is simple. Simply call `autogrow()` by providing the element to select as the first argument.

```js
// get element by id
autogrow('textarea');

// get element with id selector
autogrow('#textarea');

// get element with class selector
autogrow('.textarea');

// get element by id and provide custom styling options
autogrow('textarea', {
  areaClass: 'my-area-class',
  containerClass: 'my-container-class',
  mirrorClass: 'my-mirror-class',
  spanClass: 'my-span-class'
});

// create textarea and run it through autogrow
var textarea = document.createElement('textarea');
var ret = autogrow(textarea);
// append results to DOM
document.body.appendChild(ret.container);
```
## {{ toc.api.label }}

### `autogrow(target, options)`

Here's the html that's generated when `autogrow('autogrow')` is called.

Before:
```html
<textarea id="autogrow"></textarea>
```

After:
```html
<div class="autogrow">
  <pre class="autogrow-mirror">
    <span class="autogrow-mirror-span"></span>
    <br>
  </pre>
  <textarea id="autogrow" class="autogrow-area"></textarea>
</div>
```

#### Arguments

| Name | Type | Optional |  Description |
| --- | --- | --- | --- |
| `target` | `String` or `HTMLTextareaElement` | false | element in DOM to get or element to transform. If `target` is `HTMLTextAreaElement`, it's not necessary for element to already exist in DOM. |  
| `options` | `Object` | true | Options for generated html |

#### Return Value

```js
{
  container: HTMLDivElement,
  mirror: HTMLPreElement,
  span: HTMLSpanElement,
  target: HTMLTextareaElement|String,
  element: HTMLTextareaElement
}
```

The html generated when calling `autogrow` can be customized with a second argument, it accepts the following options:

```js
{
    areaClass: String, // class to apply to textarea
    containerClass: String, // class for autogrow container
    mirrorClass: String, // class for mirror element
    spanClass: String // class for span element
}
```

### `autogrow.all(options)`

#### Arguments

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| options | Object | true | Gets all `textarea` elements from DOM and runs `autogrow()` on each element. Sets an id on element if it doesn't already have it. |

#### Return Value

None

### `autogrow.init()`

#### Arguments

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| none | none | none | Alias for `autogrow.all()`. Behaves similarly to previous versions of autogrow. |

#### Return Value

None
