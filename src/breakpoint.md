---
title: Breakpoint
keywords: media, responsive, adaptive, css3, mixin, utils
description: Breakpoint component for @media
---

# Настройки

```scss
$flexy-breakpoints: (
    small: 0,
    medium: 768px,
    large: 992px,
    xlarge: 1200px,
    xxlarge: 1600px
) !default;
```

`$flexy-breakpoints` это `map` из sass где в качестве ключа выступает любое удобное для вас название media

### Пример

```scss
$flexy-breakpoints: (
    foo: 100px,
    bar: 350px
);

...

.my-class {
    font-weight: normal;

    @include flexy-breakpoint(bar) {
        font-weight: bold;
        ...
    }
}
```

### Описание функций и миксинов

#### flexy-breakpoint

Принимает в качестве аргументов `(string, string)`

```scss
.my-class {
    @include flexy-breakpoint(bar, print) {
        color: red;
    }
}
```

```css
@media print and (min-width: 350px) {
    .my-class {
        color: red;
    }
}
```

#### flexy-media

Принимает в качестве аргументов `(map, string)`

```scss
.my-class {
    @include flexy-media((min-width: 100px, max-width: 110px), print) {
        color: red;
    }
}
```

```css
@media print and (min-width: 100px) and (max-width: 110px) {
    .my-class {
        color: red;
    }
}
```

#### flexy-get-breakpoint

Функция принимает в качестве аргументов `(string)`

```scss
flexy-get-breakpoint(foo);
```

```css
350px
```