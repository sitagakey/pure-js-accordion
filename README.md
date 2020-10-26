# pure-js-accordion

Simply Accordion Library

## Usage

```
<div class="box">
    <button class="button" type="button">trigger</button>
    <div class="content">
        <p>target</p>
    </div>
</div>

<script>
const btn = document.querySelectorAll('button');
let btnLen = btn.length;

while (btnLen--) {
    const trigger = btn[btnLen];
    const target = trigger.dataset.hasOwnProperty('target') ? document.querySelector(trigger.dataset.target) : null;
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

## Sample.

https://hikiroom.github.io/pure-js-accordion/sample/index.html
