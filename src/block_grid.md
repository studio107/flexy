---
title: Block grid
keywords: flex, css3, block, grid
description: Block grid with flex and css3
---

## Использование block grid

Block grid представляет из себя аналог одноименного компонента из foundation [http://foundation.zurb.com/sites/docs/v/5.5.3/components/block_grid.html](http://foundation.zurb.com/sites/docs/v/5.5.3/components/block_grid.html)
но с определенными изменениями и доработками.

### Изменения / Отличия

* Каждый блок умеет сам позиционировать себя относительно media query
* Возможность позиционирования последних блоков
* Возможность позиционирования блоков по левому, правому краям, по центру и по ширине контейнера

### Настройки

```scss
// Максимальное количество блоков в block grid
$flexy-block-grid-count: 25 !default;
```

### Внимание

Все блоки имеют по умолчанию media query от N и не фиксируются по верхнему значению:

```css
@media screen and (min-width: 200px) {
    ...
}
```

Для того, чтобы ограничить блок используйте модификатор `_only`. См пример **с ручным указанием размера последнему блоку**.

#### Простой пример (По умолчанию выравнивание по левому краю)

<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
</div>

---

```html
<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_3 b-block-grid__large_4">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
</div>
```

#### Пример с ручным указанием размера последнему блоку

<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1_only b-block-grid__medium_2_only b-block-grid__large_2">
        <div class="b-helper">small_1_only medium_2_only large_2</div>
    </div>
</div>

---

```html
<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1_only b-block-grid__medium_2_only b-block-grid__large_2">
        <div class="b-helper">small_1_only medium_2_only large_2</div>
    </div>
</div>
```

#### Пример с авто размером последнего блока

<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3_fluid">
        <div class="b-helper">small_1 medium_2 large_3_fluid</div>
    </div>
</div>

---

```html
<div class="b-block-grid">
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3">
        <div class="b-helper">small_1 medium_3 large_4</div>
    </div>
    <div class="b-block-grid__small_1 b-block-grid__medium_2 b-block-grid__large_3_fluid">
        <div class="b-helper">small_1 medium_2 large_3_fluid</div>
    </div>
</div>
```

#### Выравнивание по правому краю

<div class="b-block-grid b-block-grid_right">
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
</div>

---

```html
<div class="b-block-grid b-block-grid_right">
    ...
</div>
```

#### Выравнивание по центру

<div class="b-block-grid b-block-grid_center">
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
</div>

---

```html
<div class="b-block-grid b-block-grid_center">
    ...
</div>
```

#### Выравнивание по ширине контейнера

<div class="b-block-grid b-block-grid_space">
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
    <div class="b-block-grid__small_4">
        <div class="b-helper">small_4</div>
    </div>
</div>

---

```html
<div class="b-block-grid b-block-grid_space">
    ...
</div>
```