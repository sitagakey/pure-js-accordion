# pure-js-accordion

Simply accordion library made by Vanilla JavaScript.

Demo: [https://hikiroom.github.io/pure-js-accordion/sample/index.html](https://hikiroom.github.io/pure-js-accordion/sample/index.html)

## Installation

### Script

Download code [here](https://raw.githubusercontent.com/hikiroom/pure-js-accordion/master/dist/pure-js-accordion.js).

### ESM

```sh
$ npm install -S pure-js-accordion
```

## Usage

### Script

```html
<div class="box">
    <button class="button" type="button">trigger</button>
    <div class="content">
        <p>target</p>
    </div>
</div>

<script>
const btn = document.querySelectorAll('button');

for (const trigger of btn) {
    const target = document.querySelector(trigger.dataset.target);
    const isOpen = trigger.dataset.hasOwnProperty('isOpen');
    const duration = 0.4;
    const options = {
        trigger,
        target,
        isOpen,
        duration,
    };
    const pjsa = new PJSAccordion(options);
}
</script>
```

### ESM

```js
import PJSAccordion from 'pure-js-accordion';

const btn = document.querySelectorAll('button');

for (const trigger of btn) {
    const target = document.querySelector(trigger.dataset.target);
    const isOpen = trigger.dataset.hasOwnProperty('isOpen');
    const duration = 0.4;
    const options = {
        trigger,
        target,
        isOpen,
        duration,
    };
    const pjsa = new PJSAccordion(options);
}
```

## API

### Options

`trigger`

| Type | Default value |
| --- | --- |
| HTMLElement | null |

Collapse target element when on click this element.

`target`

| Type | Default value |
| --- | --- |
| HTMLElement | null |

This element is target of collapse.  
*If this value is null, set next sibling of trigger element.*

`isOpen`

| Type | Default value |
| --- | --- |
| Boolean | false |

Decide whether to collapse target element.

`duration`

| Type | Default value |
| --- | --- |
| Number | 0.2 |

Collapse duration.

### Instance methods

`open`

Open target element.

`close`

Close target element.

`toggle`

Toggle target element.  

## License

Licensed under the MIT license  
https://github.com/hikiroom/pure-js-accordion/blob/master/LICENSE
