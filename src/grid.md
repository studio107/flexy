---
title: Grid system
keywords: flex, css3, grid, system
description: Grid system with flex and css3
---

# Сетка с использованием flex

## Настройки

```scss
// Максимальное количество колонок
$flexy-grid-columns: 12 !default;
// Отступы между колонками
$flexy-grid-gutter: 0.5em !default;
// Максимальная ширина контейнера
$flexy-grid-wrapper-max-width: 100% !default;
// Минимальная ширина контейнера
$flexy-grid-wrapper-min-width: auto !default;
```

Сетка использует названия из настроек `flexy-breakpoint` в качестве модификаторов.

> **Внимание**
>
> отступы (padding) заданы у класса `b-helper` который является вспомогательным
>
> блоком. У колонок внутренние отступы отсутствуют.

<div class="b-helper">
    b-helper
    <div class="b-helper">
        b-helper
    </div>
</div>

---

## Контейнер

### Ограничения по ширине

Для того, чтобы создать фиксированный по ширине контейнер, нужно указать
в настройках:

```scss
$flexy-grid-wrapper-max-width: 1280px; // Нужное вам значение в px|em|rem
```

Использование:
```html
<div class="b-wrapper">
    <div class="b-row">
        ...
    </div>
</div>
```

### Выравнивание

Контейнер можно прижать к краям с помощью модификаторов `_left` и `_right`.
По умолчанию контейнер позиционируется по центру.

```html
<div class="b-wrapper b-wrapper_left"></div>
<div class="b-wrapper b-wrapper_right"></div>
<div class="b-wrapper b-wrapper_center"></div>
```

### Отключение отзывчивости (выключение media query)

Для отключения media query и фиксации контейнера по ширине укажите в настройках
максимальную ширину и минимальную ширину

```
$flexy-grid-wrapper-max-width: 978px;
$flexy-grid-wrapper-min-width: $flexy-grid-wrapper-max-width;
```

После изменения настроек контейнер не будет изменяться, следовательно и сетка внутри
не будет перестраиваться.

## Сетка

### Пример

<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper">b-col b-col_small_12</div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper">b-col b-col_small_6</div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper">b-col b-col_small_6</div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
</div>

---

```html
<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper">b-col b-col_small_12</div>
    </div>

    <div class="b-col b-col_small_6">
        <div class="b-helper">b-col b-col_small_6</div>
    </div>
    <div class="b-col b-col_small_6">
        <div class="b-helper">b-col b-col_small_6</div>
    </div>

    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>
    <div class="b-col b-col_small_4">
        <div class="b-helper">b-col b-col_small_4</div>
    </div>

    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>
    <div class="b-col b-col_small_3">
        <div class="b-helper">b-col b-col_small_3</div>
    </div>

    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>
    <div class="b-col b-col_small_2">
        <div class="b-helper">b-col b-col_small_2</div>
    </div>

    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
    <div class="b-col b-col_small_1">
        <div class="b-helper">b-col b-col_small_1</div>
    </div>
</div>
```

### Авто позиционирование

<div class="b-row">
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
</div>

---

```html
<div class="b-row">
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
    <div class="b-col b-col_auto">
        <div class="b-helper">b-col b-col_auto</div>
    </div>
</div>
```

### Вложенная сетка

<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper">
            b-col b-col_small_12
            <div class="b-row">
                <div class="b-col b-col_small_12 b-col_medium_6">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_6
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b-col b-col_small_12 b-col_medium_3 b-col_large_4">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_3 b-col_large_4
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">
                                    b-col b-col_small_12 b-col_medium_6

                                    <div class="b-row">
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                                        </div>
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b-col b-col_small_12 b-col_medium_3 b-col_large_2">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_3 b-col_large_2
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">
                                    b-col b-col_small_6
                                    <div class="b-row">
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_6</div>
                                        </div>
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">b-col b-col_small_6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

---

```html
<div class="b-row">
    <div class="b-col b-col_small_12">
        <div class="b-helper">
            b-col b-col_small_12
            <div class="b-row">
                <div class="b-col b-col_small_12 b-col_medium_6">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_6
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_large_4">
                                <div class="b-helper">b-col_small_12 b-col_large_4</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b-col b-col_small_12 b-col_medium_3 b-col_large_4">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_3 b-col_large_4
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">
                                    b-col b-col_small_12 b-col_medium_6

                                    <div class="b-row">
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                                        </div>
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">b-col b-col_small_12 b-col_medium_6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="b-col b-col_small_12 b-col_medium_3 b-col_large_2">
                    <div class="b-helper">
                        b-col b-col_small_12 b-col_medium_3 b-col_large_2
                        <div class="b-row">
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">
                                    b-col b-col_small_6
                                    <div class="b-row">
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_6</div>
                                        </div>
                                        <div class="b-col b-col_small_12 b-col_medium_6">
                                            <div class="b-helper">b-col b-col_small_6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="b-col b-col_small_12 b-col_medium_6">
                                <div class="b-helper">b-col b-col_small_6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Пример с отзывчивой сеткой

<div class="b-row">
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
</div>

---

```html
<div class="b-row">
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
    <div class="b-col b-col_small_12 b-col_medium_6 b-col_large_4 b-col_xlarge_3">
        <div class="b-helper">
            b-col b-col_small_12<br/>
            b-col b-col_medium_6<br/>
            b-col b-col_large_4<br/>
            b-col b-col_xlarge_3
        </div>
    </div>
</div>
```

---

## Частые ошибки

> Не следует вкладывать `b-row` внутрь `b-row` без дополнительной обертки в виде `b_col`

**Плохо**:

```html
<div class="b-row">
    <div class="b-row">
        <div class="b-col b-col_small_12">
            Hello world
        </div>
    </div>
</div>
```

**Хорошо**:

```html
<div class="b-row">

    <div class="b-col b-col_small_12"> <!-- !!! --!>

        <div class="b-row">
            <div class="b-col b-col_small_12">
                Hello world
            </div>
        </div>
    </div>
</div>
```

---

> Не следует фиксировать размер для `b_row`

```scss
.b-row {
    // Bad practice
    min-width: 700px;
}
```

---

## Известные проблемы

* Выравнивание по правому краю может не соответствовать на 1px