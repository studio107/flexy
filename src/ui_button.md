---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Кнопка

Компонент поддерживает [размеры](/ui_size.html)
Компонент поддерживает [цвета](/ui_color.html)

## Button

Link <a href="javascript:void(0)" class="b-button">button</a> or button <button class="b-button">Hello world</button>

---

```html
<a href="javascript:void(0)" class="b-button">button</a>
<button class="b-button">Hello world</button>
```

---

## Input group

<div class="b-input-group">
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input" />
    <select class="b-input b-input_select">
        <option>Hello world 1</option>
        <option>Hello world 2</option>
        <option>Hello world 3</option>
        <option>Hello world 4</option>
        <option>Hello world 5</option>
    </select>
</div>

---

```html
<div class="b-input-group">
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <a href="javascript:void(0)" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input" />
    <select class="b-input b-input_select">
        <option>Hello world 1</option>
        <option>Hello world 2</option>
        <option>Hello world 3</option>
        <option>Hello world 4</option>
        <option>Hello world 5</option>
    </select>
</div>
```

---

## Group

<div class="b-group">
    <div class="b-input-group">
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
    </div>
    <div class="b-input-group">
        <input type="text" placeholder="Hello world" class="b-input" />
        <select class="b-input b-input_select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_icon b-button_primary">
            <i class="icon search"></i>
        </a>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_primary">
            Search
        </a>
    </div>
</div>

---

```html
<div class="b-group">
    <div class="b-input-group">
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
        <a href="javascript:void(0)" role="button" class="b-button">button</a>
    </div>
    <div class="b-input-group">
        <input type="text" placeholder="Hello world" class="b-input" />
        <select class="b-input b-input_select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_icon b-button_primary">
            <i class="icon search"></i>
        </a>
    </div>
    <div class="b-input-group">
        <input type="search" placeholder="Hello world" class="b-input" />
        <a href="javascript:void(0)" role="button" class="b-button b-button_primary">
            Search
        </a>
    </div>
</div>
```