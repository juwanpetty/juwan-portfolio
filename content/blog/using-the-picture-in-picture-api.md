---
title: Using the Picture-in-Picture API
date: "2020-04-08T15:31:28.961Z"
category: Development
description: Picture-in-Picture allows users to pop a video out into a floating
  window that always stays on top of others windows, so that they can keep
  watching it, while interacting with other sites, or applications.
---
> If you want to see the Picture-in-Picture in action, here's a CodePen [link](https://codepen.io/juwanpetty/pen/JwaXaL) to try it out.

Picture-in-Picture allows users to pop a video out into a floating window that always stays on top of others windows, so that they can keep watching it, while interacting with other sites, or applications.

With the Picture-in-Picture API, developers can control Picture-in-Picture for video elements on websites.

For better specificity and in a real world example, I recommend sticking with `getElementById()` but in this example `querySelectorAl()` works fine.

```javascript
const video = document.querySelectorAll("video")[0];
const button = document.querySelector("button");
```

## Feature Detection

Because Picture-in-Picture isn't fully supported and some browsers handle implementation differently, it's a great idea to check that the API is in fact supported in the user's browser.

We can then hide or disable the video button if Picture in Picture is not supported.

```javascript
button.hidden =
  !document.pictureInPictureEnabled || video.disablePictureInPicture;
```

### Entering Picture-in-Picture

To enter Picture-in-Picture, we first need to respond to a user's click, so we'll wrap our code around an `addEventListener` that listens for a click on the `button` element.

Inside the event listener, we call `requestPictureInPicture()` on the video element, however we don't just stop there. `requestPictureInPicture()` returns a promise, so in case the video fails to go into Picture-in-Picture mode, we can catch that error, and either perform another action or log the error to the console.

```javascript
video.requestPictureInPicture().catch(error => {
  // Video failed to enter Picture-in-Picture mode.
});
```

### Leaving Picture-in-Picture

Because we also want to handle leaving Picture-in-Picture mode, we're going to wrap our code inside the event listener with an `if` statement. If there is no element in Picture-in-Picture mode yet, we can go ahead and request it, otherwise if there is an element in Picture-in-Picture mode and we click the button, we'll want to exit Picture-in-Picture mode.

To actually handle leaving Picture-in-Picture, we call `document.exitPictureInPicture()` and add on a catch block to capture any errors that may occur, and log them out to the user.

```javascript
button.addEventListener("click", () => {
  if (!document.pictureInPictureElement) {
    video.requestPictureInPicture().catch(error => {
      // Video failed to enter Picture-in-Picture mode.
    });
  } else {
    document.exitPictureInPicture().catch(error => {
      // Video failed to leave Picture-in-Picture mode.
    });
  }
});
```

### Listening to Picture-in-Picture Events

Because there are many ways a browser may allow users to enter and exit Picture-in-Picture mode, we're given two events that detect these changes: `enterpictureinpicture` and `leavepictureinpicture`. With these events, we could update the text on the button depending on whether the user is in Picture-in-Picture mode or not.

```javascript
video.addEventListener("enterpictureinpicture", event => {
  // Video entered Picture-in-Picture.
  button.textContent = "Leave Picture-in-Picture";
});

video.addEventListener("leavepictureinpicture", event => {
  // Video left Picture-in-Picture.
  button.textContext = "Enter Picture-in-Picture";
});
```

## Browser Support

Picture-in-Picture API is currently sitting at [29.31%](https://caniuse.com/#feat=picture-in-picture) as of this writing. While it's supported mainly by popular browsers, these browsers may each handle the implementation a little different.

## Resources

- [W3C: Picture-in-Picture](https://w3c.github.io/picture-in-picture/)
- [Watch video using Picture-in-Picture](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)
- [Picture-in-Picture Sample](https://googlechrome.github.io/samples/picture-in-picture/)
- [An Introduction to the Picture-in-Picture Web API](https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/)

## Want to chat? 🗣
 — Find me on [my website](https://www.juwanpetty.com/) / [Twitter](https://twitter.com/juwanpetty) / [Instagram](https://twitter.com/juwanpetty) 🔥