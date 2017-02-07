---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Хлебные крошки

Компонент поддерживает [размеры](/ui_size.html)

### Настройки

```scss
$flexy-breadcrumb-symbol: '/' !default;
```

---

<div class="b-breadcrumb">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link b-tooltip b-tooltip_top" data-tooltip="Вернуться на главную">
            <i class="icon home"></i>
        </a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">
            Hello
        </a>
    </div>
    <div class="b-breadcrumb__item">
        World
    </div>
</div>

---

```html
<div class="b-breadcrumb">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">
            <i class="icon home"></i>
        </a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">
            Hello
        </a>
    </div>
    <div class="b-breadcrumb__item">
        World
    </div>
</div>
```

## Пример с размерами

<div class="b-breadcrumb m-size_xsmall">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_small">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_medium">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_large">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_xlarge">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_xxlarge">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

---

```html
<div class="b-breadcrumb m-size_xsmall">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_small">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_medium">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_large">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_xlarge">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>

<div class="b-breadcrumb m-size_xxlarge">
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link"><i class="icon home"></i></a>
    </div>
    <div class="b-breadcrumb__item">
        <a href="javascript:void(0)" class="b-breadcrumb__link">Hello</a>
    </div>
    <div class="b-breadcrumb__item">World</div>
</div>
```