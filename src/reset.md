---
title: Reset css
keywords: flex, reset, css3
description: Reset css
---

# Reset full

`reset` состоит из 2 частей.

### _reset_base.scss

Предназначена для сброса общих стилей страницы.

```scss
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
caption, article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

table, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: top;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  background: {
    color: #fff;
  }
  color: #000;
  line-height: 1em;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

b, strong {
  font-weight: bold;
}

em, i {
  font-style: italic;
}
```

### _reset_form.scss

Предназначена для сброса стилей form, input, button, textarea, select и всевдо элементов
::placeholder. Так же убирает outline.

```scss
input,
label,
select,
button,
textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;

  /* Browsers have different default form fonts */
  font-size: 15px;
  font-family: Arial, sans-serif;
}

/* Box Sizing Reset
-----------------------------------------------*/

/* All of our custom controls should be what we expect them to be */
input,
textarea {
  box-sizing: content-box;
}

/* These elements are usually rendered a certain way by the browser */
button,
input[type=reset],
input[type=button],
input[type=submit],
input[type=checkbox],
input[type=radio],
select {
  box-sizing: border-box;
}

button,
input,
textarea,
select {
  /* Remove the stupid outer glow in Webkit */
  outline: 0;
}

/* Button Controls
-----------------------------------------------*/

input {
  &[type=checkbox], &[type=radio] {
    width: 13px;
    height: 13px;
  }

  &[type=search] {
    /* Make webkit render the search input like a normal text field */
    appearance: textfield;
    box-sizing: content-box;
  }
}

/* Turn off the recent search for webkit. It adds about 15px padding on the left */
::-webkit-search-decoration {
  display: none;
}

/* Buttons
-----------------------------------------------*/

button,
input[type=reset],
input[type=button],
input[type=submit] {
  /* Fix IE7 display bug */
  overflow: visible;
  width: auto;
}

/* IE8 and FF freak out if this rule is within another selector */
::-webkit-file-upload-button {
  padding: 0;
  border: 0;
  background: none;
}

/* Textarea
-----------------------------------------------*/

textarea {
  /* Move the label to the top */
  vertical-align: top;

  /* Turn off scroll bars in IE unless needed */
  overflow: auto;
}

/* Selects
-----------------------------------------------*/

select {
  &[multiple] {
    /* Move the label to the top */
    vertical-align: top;
  }
}

::-webkit-input-placeholder {
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-style: normal;
}

:-moz-placeholder { /* Firefox 18- */
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-style: normal;
}

::-moz-placeholder { /* Firefox 19+ */
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-style: normal;
}

:-ms-input-placeholder {
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-style: normal;
}
```