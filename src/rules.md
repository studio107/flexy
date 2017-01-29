---
title: Rules
keywords: rules, guide, bem, flexbox, structure, css3
description: Rules and guides for flexy framework
---

# Rules

## Об организации кода

Flexy использует идеологию и методологию BEM, но не в полной мере. Мы стараемся соблюдать плоскую структуру там, где это
возможно. Без фанатизма. Плоская структура блоков позволяет переиспользовать блоки не только в рамках одного проекта,
но так же позволяет переносить блоки из проекта в проект. Так же это положительно влияет на скорость отрисовки страницы.

### Рекомендуемая структура проекта

```
├── _global.scss
├── _mixins.scss
├── _functions.scss
├── _settings.scss
├── _theme.scss
├── block
│   ├── cart
│   │   └── _cart-list.scss
│   └── page
│       ├── _page-item.scss
│       ├── _page-list.scss
│       └── _page-typography.scss
└── screen.scss
```

* `_global.scss` - глобальные стили проекта
* `_mixins.scss` - миксины используемые в проекте
* `_functions.scss` - функции используемые в проекте
* `screen.scss` - основная разметка
* `_theme.scss` - UI для проекта
* `block` - директория для блоков