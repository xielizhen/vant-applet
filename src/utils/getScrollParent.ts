import { canUseDom, isElement } from './dom';

type ScrollElement = HTMLElement | Window;

const defaultRoot = canUseDom ? window : undefined;

const overflowStylePatterns = ['scroll', 'auto', 'overlay'];

export function getScrollParent(el: Element, root: ScrollElement | null | undefined = defaultRoot): Window | Element | null | undefined {
    let node = el;
    while (node && node !== root && isElement(node)) {
        if (node === document.body) {
            return root;
        } 
        const { overflowY } = window.getComputedStyle(node);
        if (overflowStylePatterns.includes(overflowY)
            && node.scrollHeight > node.clientHeight
        ) {
            return node;
        }
        node = node.parentNode as Element;
    }
    return root;
}
