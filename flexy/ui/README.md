# Flexy UI

Основная концепция и философия заключается в том, чтобы не привязываться к конкретному фреймворку, будь то bootstrap
или foundation, а использовать базовые стили и разметку, но без внешнего вида. Когда внешний вид задает разработчик под проект.

## Button usage

```scss
.b-button {
  @include flexy-button() {
    background: {
      color: $flexy-current-color;
    }
    color: flexy-button-color-detect($flexy-current-color);

    &:hover, &:focus {
      color: flexy-button-color-detect($flexy-current-color);
      background: {
        color: flexy-button-hover-color($flexy-current-color);
      }
    }

    &:active {
      color: flexy-button-color-detect($flexy-current-color);
      background: {
        color: flexy-button-active-color($flexy-current-color);
      }
    }
  }
}
```



## Checkbox usage

```scss
.b-checkbox {
  $size: flexy-typo-get-font-size(eta);

  @include flexy-input-checkbox-radio-inactive($size) {
    padding-left: 28px;

    &:before {
      font-size: $size + px;
      transition: box-shadow .2s ease;
      border-radius: 2px;
      margin-top: -($size / 2) + px;
      width: $size + px;
      height: $size + px;
      line-height: $size + px;
      box-shadow: 0 0 0 2px $flexy-typo-caption-color;
    }
  }

  @include flexy-input-checkbox-radio-active($size) {
    &:before {
      color: $flexy-current-color;
      box-shadow: 0 0 0 2px $flexy-current-color;
    }
  }
}
```

## Radio usage

```scss
.b-radio {
  $size: flexy-typo-get-font-size(eta);

  @include flexy-input-checkbox-radio-inactive($size) {
    padding-left: 28px;

    &:before {
      font-size: $size + px;
      transition: box-shadow .2s ease;
      border-radius: 100%;
      margin-top: -($size / 2) + px;
      width: $size + px;
      height: $size + px;
      line-height: $size + px;
      box-shadow: 0 0 0 2px $flexy-typo-caption-color;
    }
  }

  @include flexy-input-checkbox-radio-active($size) {
    &:before {
      color: $flexy-current-color;
      box-shadow: 0 0 0 2px $flexy-current-color;
    }
  }
}
```

## Select usage

```scss
.b-select {
  @include flexy-input-select {

  }
}
```