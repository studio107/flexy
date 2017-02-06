---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Заголовки

Миксин для указания стилей заголовкам.

```scss
@include flexy-heading {
    border-bottom: 1px solid silver;
}
```

Результатом выполнения будет сгенерированные стили для
`h1, h2, h3, h4, h5, h6` с применением размеров и стилей которые вы укажите.

```css
h1 {
    font-size: 2em; // xxlarge
    border-bottom: 1px solid silver;
}
h2 {
    font-size: 1.5em; // xxlarge
    border-bottom: 1px solid silver;
}
// ... etc
```

## Использование с блоками

<div class="b-heading m-size_xxlarge">Hello world</div>

```html
<div class="b-heading m-size_xxlarge">Hello world</div>
```

---

<div class="b-heading m-size_xlarge">Hello world</div>

```html
<div class="b-heading m-size_large">Hello world</div>
```

---

<div class="b-heading m-size_medium">Hello world</div>

```html
<div class="b-heading m-size_medium">Hello world</div>
```

---

<div class="b-heading m-size_small">Hello world</div>

```html
<div class="b-heading m-size_small">Hello world</div>
```

---

<div class="b-heading m-size_xsmall">Hello world</div>

```html
<div class="b-heading m-size_xsmall">Hello world</div>
```

---