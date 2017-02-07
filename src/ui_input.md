---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Поля

Компонент поддерживает [размеры](/ui_size.html)
Компонент поддерживает [цвета](/ui_color.html)

---

## Text, search, url, textarea, etc...

<div>
    <label for="input1" class="b-label">Label</label>
    <input id="input1" type="text" class="b-input" placeholder="Hello world" />
</div>
<br/>
<div>
    <label for="input2" class="b-label">Label</label>
    <textarea id="input2" class="b-input b-input_textarea" placeholder="Hello world"></textarea>
</div>

---

```html
<div>
    <label for="input1" class="b-label">Label</label>
    <input id="input1" type="text" class="b-input" placeholder="Hello world" />
</div>
<br/>
<div>
    <label for="input2" class="b-label">Label</label>
    <textarea id="input2" class="b-input b-input_textarea" placeholder="Hello world"></textarea>
</div>
```

---

## Select

<div>
    <label for="select1" class="b-label">Label</label>
    <select id="select1" class="b-input b-input_select">
        <option value="foo">foo</option>
        <option value="bar">bar</option>
    </select>
</div>

---

```html
<div>
    <label for="select1" class="b-label">Label</label>
    <select id="select1" class="b-input b-input_select">
        <option value="foo">foo</option>
        <option value="bar">bar</option>
    </select>
</div>
```

---

## Checkbox

<div>
    <input type="checkbox" class="b-input b-input_choice" id="checkbox1" />
    <label class="b-label" for="checkbox1">Label</label>
</div>

---

```html
<div>
    <input type="checkbox" class="b-input b-input_choice" id="checkbox1" />
    <label class="b-label" for="checkbox1">Label</label>
</div>
```

---

## Radio

<div>
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio1" />
    <label class="b-label" for="radio1">Radio 1</label>
</div>
<div>
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio2" />
    <label class="b-label" for="radio2">Radio 2</label>
</div>

---

```html
<div>
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio1" />
    <label class="b-label" for="radio1">Radio 1</label>
</div>
<div>
    <input type="radio" class="b-input b-input_choice" name="radio" id="radio2" />
    <label class="b-label" for="radio2">Radio 2</label>
</div>
```
