import './style.less';
interface Options {
    baseNode: HTMLElement | null;
    pageControl: number;
    containerCN: string;
    listCN: string;
    activeListCN: string;
    prevBtnCN: string;
    nextBtnCN: string;
    disableBtnCN: string;
    pageNumCN: string;
    preText: string;
    nextText: string;
}
export default class simplePagination {
    totalPage: number;
    currentPage: number;
    opts: Options;
    domRefs: any;
    clickHandle: ((evt: Event) => void) | null;
    static version: string;
    constructor(totalPage: number, opts: Options);
    /**
     * @method checkBaseNode
     * 检查BaseNode
     */
    checkBaseNode(): this;
    /**
     * @method render
     * 首次渲染
     */
    render(): this;
    /**
     * @method bindEvent
     * 绑定事件
     */
    bindEvent(): this;
    /**
     * @method goToPage
     * 页面跳转
     * @param {Strng|Number} page
     */
    goToPage(n: number): void;
    /**
     * @method showPages
     * 核心算法，显示页数函数
     * @param {Number} 当前页数、总页数
     */
    showPages(page: number, total: number): string;
    /**
     * @method destroyed
     * 销毁节点
     */
    destroyed(): void;
}
export {};
