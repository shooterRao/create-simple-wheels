/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */
export declare const assign: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
} | ((target: Object) => Object);
/**
 * createNode
 * @param {String} htmlStr
 * @returns {DomNode}
 */
export declare const createNode: (htmlStr: string) => any;
export declare type ElementObjType<T> = {
    tagName: T;
    className: string;
};
/**
 * createNode
 * @param {String} htmlStr
 * @returns {DomNode}
 */
export declare const createElementByObj: <T extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(elementObj: ElementObjType<T>) => HTMLElementTagNameMap[T];
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
