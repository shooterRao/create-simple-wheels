/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */
export declare const assign: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};
/**
 * createNode
 * @param {String} htmlStr
 * @returns {DomNode}
 */
export declare const createNode: (htmlStr: string) => any;
/**
 * 节点选择器
 * @param {DomNode} el
 * @param {String} selector
 * @returns {DomNode}
 */
export declare const query: (el: HTMLElement, selector: string) => HTMLElement | null;
/**
 * 返回所有节点
 * @param {DomNode} el
 * @param {String} selector
 * @returns {NodeList}
 */
export declare const queryAll: (el: HTMLElement, selector: string) => NodeList;
/**
 * 判断是否为dom节点
 * @param {DomNode} item
 * @returns
 */
export declare const isDOM: (item: HTMLElement) => boolean;
declare type NodeData = {
    children?: [];
};
export declare const hasChild: (nodeData: NodeData) => boolean;
export declare const nextFrame: (fn: () => void) => void;
export {};
