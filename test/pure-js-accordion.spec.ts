import PJSAccordion from '../src/ts/pure-js-accordion';
import { isTruthy } from '../src/ts/typeGuard';

describe('pure-js-accordion', () => {
    beforeEach(() => {
        const mockEl = `
            <div>
                <button class="js_pjsa" type="button">開く</button>
                <div>target</div>
            </div>
        `;

        document.body.innerHTML = mockEl;
    })

    test('init', () => {
        const trigger = document.querySelector<HTMLElement>('.js_pjsa');
        if (!isTruthy(trigger)) {
            throw new Error('trigger is null');
        }
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
        expect(pjsa.trigger.classList.contains('pjsa-trigger')).toBe(true);
        expect(pjsa.trigger.classList.contains('is-inactive')).toBe(true);
        expect(pjsa.target?.classList.contains('pjsa-target')).toBe(true);
        expect(pjsa.target?.dataset?.index).toBe('0');
    });
    test('click handler', () => {
        const trigger = document.querySelector<HTMLElement>('.js_pjsa');
        if (!isTruthy(trigger)) {
            throw new Error('trigger is null');
        }
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

        trigger.click();

        expect(pjsa.triggerState).toBe(true);
        expect(pjsa.targetState).toBe(true);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(true);
        expect(pjsa.target?.classList.contains('is-active')).toBe(true);
    });
    test('open methods', () => {
        const trigger = document.querySelector<HTMLElement>('.js_pjsa');
        if (!isTruthy(trigger)) {
            throw new Error('trigger is null');
        }
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

        pjsa.open();

        expect(pjsa.triggerState).toBe(true);
        expect(pjsa.targetState).toBe(true);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(true);
        expect(pjsa.target?.classList.contains('is-active')).toBe(true);
    });
    test('close methods', () => {
        const trigger = document.querySelector<HTMLElement>('.js_pjsa');
        if (!isTruthy(trigger)) {
            throw new Error('trigger is null');
        }
        const target = null;
        const isOpen = true;
        const duration = 0.2;
        const options = {
            trigger,
            target,
            isOpen,
            duration,
        };
        const pjsa = new PJSAccordion(options);

        expect(pjsa.triggerState).toBe(true);
        expect(pjsa.targetState).toBe(true);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(true);
        expect(pjsa.target?.classList.contains('is-active')).toBe(true);

        pjsa.close();

        expect(pjsa.triggerState).toBe(false);
        expect(pjsa.targetState).toBe(false);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(false);
        expect(pjsa.target?.classList.contains('is-active')).toBe(false);
    });
    test('toggle methods', () => {
        const trigger = document.querySelector<HTMLElement>('.js_pjsa');
        if (!isTruthy(trigger)) {
            throw new Error('trigger is null');
        }
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

        pjsa.toggle();

        expect(pjsa.triggerState).toBe(true);
        expect(pjsa.targetState).toBe(true);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(true);
        expect(pjsa.target?.classList.contains('is-active')).toBe(true);

        pjsa.toggle();

        expect(pjsa.triggerState).toBe(false);
        expect(pjsa.targetState).toBe(false);
        expect(pjsa.trigger.classList.contains('is-active')).toBe(false);
        expect(pjsa.target?.classList.contains('is-active')).toBe(false);
    });
});