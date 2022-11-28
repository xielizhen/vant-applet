export const canUseDom = !!(typeof window !== 'undefined' && typeof document !== 'undefined' && window.document && window.document.createElement);

export const isElement = (node: Element) => {
    const ELEMENT_NODE_TYPE = 1;
    return node.nodeType === ELEMENT_NODE_TYPE;
}