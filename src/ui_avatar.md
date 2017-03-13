---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Аватар

Компонент поддерживает [размеры](/ui_size.html)
Компонент поддерживает [цвета](/ui_color.html)

## Настройки

```scss
$flexy-theme-avatar: (
        default: (
                background-color: #2c3e50,
                color: #fff
        ),
        primary: (
                background-color: map-get($flexy-theme-colors, primary),
                color: #fff
        ),
        error: (
                background-color: map-get($flexy-theme-colors, error),
                color: #fff
        ),
        success: (
                background-color: map-get($flexy-theme-colors, success),
                color: #fff
        )
) !default;
```

<img class="b-avatar m-size_xxlarge" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_xlarge" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_large" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_medium" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_small" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_xsmall" src="https://unsplash.it/500/500?random" />

---

```html
<img class="b-avatar m-size_xxlarge" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_xlarge" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_large" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_medium" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_small" src="https://unsplash.it/500/500?random" />
<img class="b-avatar m-size_xsmall" src="https://unsplash.it/500/500?random" />
```

## Инициалы

<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xxlarge"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xlarge"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_large"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_medium"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_small"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xsmall"></div>

---

```html
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xxlarge"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xlarge"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_large"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_medium"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_small"></div>
<div data-avatar="MF" class="b-avatar b-avatar_text m-size_xsmall"></div>
```

## Цвета

<div class="b-avatar b-avatar_text" data-avatar="VI"></div>
<div class="b-avatar b-avatar_text b-avatar_primary" data-avatar="VA"></div>
<div class="b-avatar b-avatar_text b-avatar_error" data-avatar="SC"></div>
<div class="b-avatar b-avatar_text b-avatar_success" data-avatar="SS"></div>

---

```html
<div class="b-avatar b-avatar_text" data-avatar="VI"></div>
<div class="b-avatar b-avatar_text b-avatar_primary" data-avatar="VA"></div>
<div class="b-avatar b-avatar_text b-avatar_error" data-avatar="SC"></div>
<div class="b-avatar b-avatar_text b-avatar_success" data-avatar="SS"></div>
```