---
title: How to Use prefers-color-scheme 🌗
date: "2020-04-01T15:42:10.952Z"
category: Development
description: prefers-color-scheme is a CSS media query that detects the current
  theme preference of the user's operating system.
---
> If you want to see an example of `prefers-color-scheme` in action, here's a CodePen [link](https://codepen.io/juwanpetty/pen/XWbraop).

`prefers-color-scheme` is a CSS media query that detects the current theme preference of the user's operating system.

```css
@media (prefers-color-scheme: dark) {
  .element {
    background: black;
    color: white;
  }
}
```

The `prefers-color-scheme` media query has two values that you can specify: `light` and `dark`. These values allow you to customize the theme of the page with CSS depending on the user's preference.

`light`: Indicates that the user has notified the system that they prefer a page that has a light theme (dark text on light background).

`dark`: Indicates that the user has notified the system that they prefer a page that has a dark theme (light text on dark background).

```css
/* Light mode */
@media (prefers-color-scheme: light) {
  .element {
    background: white;
    color: black;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .element {
    background: black;
    color: white;
  }
}
```

For the scenario where a user has no preference, you can pass `no-preference` to add a "default" theme to the page.

## Browser Support

## Resources

- [MDN Web Docs: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [prefers-color-scheme: Hello darkness, my old friend](https://web.dev/prefers-color-scheme/)
- [prefers-color-scheme: CSS Media Query](https://davidwalsh.name/prefers-color-scheme)
