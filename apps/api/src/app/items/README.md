# rippleJS

Adds Material Design-style feedback ripples to your existing HTML without any dependencies.
[Show me the demos!](http://samthor.github.io/rippleJS)

## Usage

Include the [rippleJS script](https://cdn.rawgit.com/samthor/rippleJS/v1.0.2/ripple.min.js) (or use a [local copy](#install)).
Then, add elements with the `rippleJS` class within a parent element that has layout (aka, `position: relative` or `position: absolute`).

```html
<button class="yourButton">
  Click Me
  <div class="rippleJS"></div>
</button>

<script async src="https://cdn.jsdelivr.net/npm/vanilla-ripplejs@1.0.6"
    integrity="sha384-OlarGErerEgz/M7123pQTTek4pUIiR6t0BK09bTmWDi2cZYbv3VHrriaXDnA0Oup"
    crossorigin="anonymous"></script>
<!-- or if using ES6 modules -->
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/vanilla-ripplejs@1.0.6';
</script>
```

rippleJS adds handlers on `document.body`, so you don't need to register any new elements as you add them to the DOM.
It supports touch and mouse events (even at the same time), and includes its own CSS.

### Ripple Fill

By adding the `fill` class to a `rippleJS` element, the ripple will fill to rounded corners, good for form elements with fixed size.
For example:

```html
<div class="optHolder">
  <input type="checkbox" />
  <div class="rippleJS fill"></div>
</div>
```

### Ripple Color

The default color is a transparent version of the current color (aka, the `currentColor` [keyword](http://www.w3.org/TR/css3-color/#currentcolor)).
To change this default, add the following style rule:

```css
.rippleJS .ripple {
  background: red;
}
```

You could also change it just for some elements:

```css
.yourClassName .rippleJS .ripple {
  background: blue;
}
```

Or change the level of opacity:

```css
.moreOpaque .rippleJS .ripple {
  opacity: 0.65;
}
````

## Supports

Chrome, Safari, Firefox (all as of Dec 2014).
Requires `classList`, so probably [only supports IE10+](http://caniuse.com/#feat=classlist).

## Install

Instead of using rippleJS directly, you can fetch it using your favourite package manager:

    $ bower install vanilla-ripplejs
    $ npm install vanilla-ripplejs

You can either use `ripple.min.js` for a precompiled version to just drop into your site, or you could use `lib.js` included as a ES module.
If you use `lib.js`, you'll need to include the CSS too—check out `ripple.js` for how this is done for the minified version, or you could just add the CSS to your regular styles.  
