interface PJSAccordionOptions {
    trigger: HTMLElement;
    target: HTMLElement | null;
    isOpen: boolean;
    duration: number;
}
declare class PJSAccordion {
    trigger: HTMLElement;
    triggerState: boolean;
    target: Element | null;
    targetState: boolean;
    duration: number;
    activeClass: string;
    animationClass: string;
    inactiveClass: string;
    pjsaStyle: HTMLStyleElement | null;
    constructor(requestOptions: PJSAccordionOptions);
    /**
     * ライブラリ用のstyle要素をheadに追加する
     */
    appendPJSAStyle(): void;
    /**
     * ライブラリ用のstyle要素にスタイルを書き込む
     */
    writePJSAStyle(): void;
    /**
     * targetStateの真偽値によってtargetElmのクラスの付け外しを行う
     */
    applyStateClass(targetElm: HTMLElement, targetState: boolean): void;
    /**
     * 各要素にイベントリスナーを追加する
     */
    setEvent(): void;
    /**
     * アコーディオンを開く
     */
    open(): void;
    /**
     * アコーディオンを閉じる
     */
    close(): void;
    /**
     * triggerStateの真偽値によってアコーディオンを開閉する
     */
    toggle(): void;
    /**
     * 動的に追加されたスタイルを削除する
     */
    removeStyle(e: TransitionEvent): void;
}
export default PJSAccordion;
