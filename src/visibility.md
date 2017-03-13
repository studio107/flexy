---
title: Visibility component
keywords: flex, framework, css3, visibility
description: Visibility component with flex and css3
---

## Использование visibility

Компонент `visibility` позволяет отображать и скрывать блоки в зависимости от media.
Компонент не имеет настроек и зависит от настроек для `flexy-breakpoint` и имеет 2 модификатора
состояния.

* `_only` - Только для текущего media
* `_up` - Для текущего media и выше

#### Отображать для N и выше

<div class="b-visible b-visible_small_up">
    <div class="b-helper">b-visible b-visible_small_up</div>
</div>
<div class="b-visible b-visible_medium_up">
    <div class="b-helper">b-visible b-visible_medium_up</div>
</div>
<div class="b-visible b-visible_large_up">
    <div class="b-helper">b-visible b-visible_large_up</div>
</div>
<div class="b-visible b-visible_xlarge_up">
    <div class="b-helper">b-visible b-visible_xlarge_up</div>
</div>
<div class="b-visible b-visible_xxlarge_up">
    <div class="b-helper">b-visible b-visible_xxlarge_up</div>
</div>

---

```html
<div class="b-visible b-visible_small_up">
    <div class="b-helper">b-visible b-visible_small_up</div>
</div>
<div class="b-visible b-visible_medium_up">
    <div class="b-helper">b-visible b-visible_medium_up</div>
</div>
<div class="b-visible b-visible_large_up">
    <div class="b-helper">b-visible b-visible_large_up</div>
</div>
<div class="b-visible b-visible_xlarge_up">
    <div class="b-helper">b-visible b-visible_xlarge_up</div>
</div>
<div class="b-visible b-visible_xxlarge_up">
    <div class="b-helper">b-visible b-visible_xxlarge_up</div>
</div>
```

#### Отображать для N

<div class="b-visible b-visible_small_only">
    <div class="b-helper">b-visible b-visible_small_only</div>
</div>
<div class="b-visible b-visible_medium_only">
    <div class="b-helper">b-visible b-visible_medium_only</div>
</div>
<div class="b-visible b-visible_large_only">
    <div class="b-helper">b-visible b-visible_large_only</div>
</div>
<div class="b-visible b-visible_xlarge_only">
    <div class="b-helper">b-visible b-visible_xlarge_only</div>
</div>
<div class="b-visible b-visible_xxlarge_only">
    <div class="b-helper">b-visible b-visible_xxlarge_only</div>
</div>

---

```html
<div class="b-visible b-visible_small_only">
    <div class="b-helper">b-visible b-visible_small_only</div>
</div>
<div class="b-visible b-visible_medium_only">
    <div class="b-helper">b-visible b-visible_medium_only</div>
</div>
<div class="b-visible b-visible_large_only">
    <div class="b-helper">b-visible b-visible_large_only</div>
</div>
<div class="b-visible b-visible_xlarge_only">
    <div class="b-helper">b-visible b-visible_xlarge_only</div>
</div>
<div class="b-visible b-visible_xxlarge_only">
    <div class="b-helper">b-visible b-visible_xxlarge_only</div>
</div>
```

#### Скрывать для N и выше

<div class="b-hide b-hide_small_up">
    <div class="b-helper">b-hide b-hide_small_up</div>
</div>
<div class="b-hide b-hide_medium_up">
    <div class="b-helper">b-hide b-hide_medium_up</div>
</div>
<div class="b-hide b-hide_large_up">
    <div class="b-helper">b-hide b-hide_large_up</div>
</div>
<div class="b-hide b-hide_xlarge_up">
    <div class="b-helper">b-hide b-hide_xlarge_up</div>
</div>
<div class="b-hide b-hide_xxlarge_up">
    <div class="b-helper">b-hide b-hide_xxlarge_up</div>
</div>

---

```html
<div class="b-hide b-hide_small_up">
    <div class="b-helper">b-hide b-hide_small_up</div>
</div>
<div class="b-hide b-hide_medium_up">
    <div class="b-helper">b-hide b-hide_medium_up</div>
</div>
<div class="b-hide b-hide_large_up">
    <div class="b-helper">b-hide b-hide_large_up</div>
</div>
<div class="b-hide b-hide_xlarge_up">
    <div class="b-helper">b-hide b-hide_xlarge_up</div>
</div>
<div class="b-hide b-hide_xxlarge_up">
    <div class="b-helper">b-hide b-hide_xxlarge_up</div>
</div>
```

#### Скрывать для N

<div class="b-hide b-hide_small_only">
    <div class="b-helper">b-hide b-hide_small_only</div>
</div>
<div class="b-hide b-hide_medium_only">
    <div class="b-helper">b-hide b-hide_medium_only</div>
</div>
<div class="b-hide b-hide_large_only">
    <div class="b-helper">b-hide b-hide_large_only</div>
</div>
<div class="b-hide b-hide_xlarge_only">
    <div class="b-helper">b-hide b-hide_xlarge_only</div>
</div>
<div class="b-hide b-hide_xxlarge_only">
    <div class="b-helper">b-hide b-hide_xxlarge_only</div>
</div>

---

```html
<div class="b-hide b-hide_small_only">
    <div class="b-helper">b-hide b-hide_small_only</div>
</div>
<div class="b-hide b-hide_medium_only">
    <div class="b-helper">b-hide b-hide_medium_only</div>
</div>
<div class="b-hide b-hide_large_only">
    <div class="b-helper">b-hide b-hide_large_only</div>
</div>
<div class="b-hide b-hide_xlarge_only">
    <div class="b-helper">b-hide b-hide_xlarge_only</div>
</div>
<div class="b-hide b-hide_xxlarge_only">
    <div class="b-helper">b-hide b-hide_xxlarge_only</div>
</div>
```