---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Темизация

Темизация представляет собой 1 файл `_theme.scss` который не включен в framework и подключается отдельно.
Листинг кода с примером предоставлен в конце раздела или в репозитории.

---

## Button

Link <a href="#" class="b-button">button</a> or button <button class="b-button">Hello world</button>

---

```html
<a href="#" class="b-button">button</a>
<button class="b-button">Hello world</button>
```

---

## Group

<div class="b-group">
    <a href="#" class="b-button">button</a>
    <a href="#" class="b-button">button</a>
    <a href="#" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input__input" />
    <div class="b-select">
        <select class="b-select__select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
</div>

---

```html
<div class="b-group">
    <a href="#" class="b-button">button</a>
    <a href="#" class="b-button">button</a>
    <a href="#" class="b-button">button</a>
    <input type="text" placeholder="Hello world" class="b-input__input" />
    <div class="b-select">
        <select class="b-select__select">
            <option>Hello world 1</option>
            <option>Hello world 2</option>
            <option>Hello world 3</option>
            <option>Hello world 4</option>
            <option>Hello world 5</option>
        </select>
    </div>
</div>
```

---

## Container

<div class="b-container">
    <div class="b-group">
        <a href="#" class="b-button">button</a>
        <a href="#" class="b-button">button</a>
        <a href="#" class="b-button">button</a>
    </div>
    <div class="b-group">
        <input type="text" placeholder="Hello world" class="b-input__input" />
        <div class="b-select">
            <select class="b-select__select">
                <option>Hello world 1</option>
                <option>Hello world 2</option>
                <option>Hello world 3</option>
                <option>Hello world 4</option>
                <option>Hello world 5</option>
            </select>
        </div>
    </div>
</div>

---

```html
<div class="b-container">
    <div class="b-group">
        <a href="#" class="b-button">button</a>
        <a href="#" class="b-button">button</a>
        <a href="#" class="b-button">button</a>
    </div>
    <div class="b-group">
        <input type="text" placeholder="Hello world" class="b-input__input" />
        <div class="b-select">
            <select class="b-select__select">
                <option>Hello world 1</option>
                <option>Hello world 2</option>
                <option>Hello world 3</option>
                <option>Hello world 4</option>
                <option>Hello world 5</option>
            </select>
        </div>
    </div>
</div>
```

---

## Checkbox

<div class="b-checkbox">
    <input type="checkbox" class="b-checkbox__checkbox" id="checkbox1" />
    <label class="b-checkbox__label" for="checkbox1">Label</label>
</div>

---

```html
<div class="b-checkbox">
    <input type="checkbox" class="b-checkbox__checkbox" id="checkbox1" />
    <label class="b-checkbox__label" for="checkbox1">Label</label>
</div>
```

---

## Radio

<div class="b-radio">
    <input type="radio" class="b-radio__radio" name="radio" id="radio1" />
    <label class="b-radio__label" for="radio1">Radio 1</label>
</div>
<div class="b-radio">
    <input type="radio" class="b-radio__radio" name="radio" id="radio2" />
    <label class="b-radio__label" for="radio2">Radio 2</label>
</div>

---

```html
<div class="b-radio">
    <input type="radio" class="b-radio__radio" name="radio" id="radio1" />
    <label class="b-radio__label" for="radio1">Radio 1</label>
</div>
<div class="b-radio">
    <input type="radio" class="b-radio__radio" name="radio" id="radio2" />
    <label class="b-radio__label" for="radio2">Radio 2</label>
</div>
```