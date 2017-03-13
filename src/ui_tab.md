---
title: Theme system
keywords: flex, css3, theme, system
description: Theme system for flexy
---

# Вкладки

Компонент поддерживает [размеры](/ui_size.html)

<div class="b-tab">
    <div class="b-tab__header">
        <div class="b-tab__tab b-tab__tab_active" data-tab="first">
            First
        </div>
        <div class="b-tab__tab" data-tab="second">
            Second
        </div>
    </div>
    <div data-tab="first" class="b-tab__content b-tab__content_active">
        First content
    </div>
    <div data-tab="first" class="b-tab__content">
        Second content
    </div>
</div>

---

```html
<div class="b-tab">
    <div class="b-tab__header">
        <div class="b-tab__tab b-tab__tab_active" data-tab="first">
            First
        </div>
        <div class="b-tab__tab" data-tab="second">
            Second
        </div>
    </div>
    <div data-tab="first" class="b-tab__content b-tab__content_active">
        First content
    </div>
    <div data-tab="first" class="b-tab__content">
        Second content
    </div>
</div>
```

## JS компонент

```js
import $ from 'jquery';

$(document)
    .on('click', '.b-tab__tab', e => {
        let $target = $(e.target),
            $container = $target.closest('.b-tab'),
            $tabs = $container.find('.b-tab__tab'),
            $content = $container.find('.b-tab__content'),
            $currentTab = $target.closest('.b-tab__tab'),
            id = $currentTab.attr('data-tab');

        if ($currentTab.hasClass('b-tab__tab_disabled')) {
            return;
        }

        $tabs.removeClass('b-tab__tab_active');
        $content.removeClass('b-tab__content_active');
        $container
            .find('.b-tab__content[data-tab="' + id + '"]')
            .addClass('b-tab__content_active');

        $currentTab.addClass('b-tab__tab_active');
    });
```