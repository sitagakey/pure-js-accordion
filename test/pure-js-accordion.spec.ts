import PJSAccordion from '../src/ts/pure-js-accordion';

describe('pure-js-accordion', () => {
  test('初期化', () => {
    const mockEl = `
    <div>
      <button class="js_pjsa" type="button">開く</button>
      <div>target</div>
    </div>
    `;
    document.body.innerHTML = mockEl;

    const trigger = document.querySelector('.js_pjsa') as HTMLElement;
    const target = null;
    const isOpen = false;
    const duration = 0.2;
    const options = {
        trigger,
        target,
        isOpen,
        duration,
    };
    const pjsa = new PJSAccordion(options);

    expect(pjsa.trigger).toEqual(trigger);
    expect(pjsa.target).toEqual(trigger.nextElementSibling);
    expect(pjsa.triggerState).toBe(isOpen);
    expect(pjsa.targetState).toBe(isOpen);
  });
});