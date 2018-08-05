import "./style.less";

import { assign, isDOM } from "../utils/index";

export default class simplePagination {
  constructor(totalPage, opts) {
    // CN为className简写
    const defaultOpts = {
      baseNode: null,// 必须要传，分页组件挂载的节点
      pageControl: 2, // 当前页面显示前后多少页
      containerCN: "page-container",
      listCN: "page-li",
      activeListCN: "page-li-active",
      prevBtnCN: "page-prev",
      nextBtnCN: "page-next",
      disableBtnCN: "disable",
      pageNumCN: "page-number",
      preText: "上一页",
      nextText: "下一页"
    };
    this.totalPage = totalPage;
    this.currentPage = 1;
    this.opts = assign({}, defaultOpts, opts);
    this.domRefs = {};
    this.clickHandle = null;
    this.checkBaseNode().render().bindEvent();
  }

  /**
    * @method checkBaseNode
    * 检查BaseNode
    */
  checkBaseNode() {
    if(!this.opts.baseNode) {
      throw new Error("BaseNode is required");
    }
    if(!isDOM(this.opts.baseNode)) {
      throw new Error("BaseNode must a HTMLElement");
    }
    return this;
  }

  /**
    * @method render
    * 首次渲染
    */
  render() {
    const { baseNode, containerCN } = this.opts;
    const totalPage = this.totalPage;
    const currentPage = this.currentPage;
    this.domRefs.containerNode = document.createElement("ul");
    this.domRefs.containerNode.className = containerCN;
    const pageContent = this.showPages(currentPage, totalPage);
    this.domRefs.containerNode.innerHTML = pageContent;
    baseNode.appendChild(this.domRefs.containerNode);
    return this;
  }

  /**
    * @method bindEvent
    * 绑定事件
    */
  bindEvent() {
    const { prevBtnCN, nextBtnCN } = this.opts;
    this.clickHandle = (evt) => {
      const e = evt || window.event;
      const target = e.target || e.srcElement;
      if(target.dataset.page) {
        const page = target.dataset.page;
        this.goToPage(page);
      }else if(target.classList){
        // 上一页btn
        if(target.classList.contains(prevBtnCN)) {
          this.goToPage(this.currentPage - 1)
        }
        // 下一页btn
        if(target.classList.contains(nextBtnCN)) {
          this.goToPage(this.currentPage + 1);
        }
      }
    }
    const { containerNode } = this.domRefs;
    containerNode.addEventListener('click',this.clickHandle, false);
    return this;
  }

  /**
    * @method goToPage
    * 页面跳转
    * @param {Strng|Number} page
    */
  goToPage(page) {
    page = +page; // 传入的page如果为String，转为Number
    const { totalPage } = this;
    // 边缘判断
    if (page === this.currentPage || page > totalPage || page < 1) {
      return;
    }
    this.currentPage = page;
    // 派发自定义事件
    this.opts.baseNode.dispatchEvent(
      // 把page传到事件回调参数里面
      new CustomEvent("pageChange", { detail: { page } })
    );
    const { containerNode } = this.domRefs;
    const pageContent = this.showPages(this.currentPage, totalPage);
    containerNode.innerHTML = "";
    containerNode.innerHTML = pageContent;
  }

  /**
    * @method showPages
    * 核心算法，显示页数函数
    * @param {Number} 当前页数、总页数
    */
  showPages(page, total) {
    const {
      listCN,
      activeListCN,
      prevBtnCN,
      nextBtnCN,
      disableBtnCN,
      pageNumCN,
      preText,
      nextText,
      pageControl
    } = this.opts;
    let str = `<li class='${listCN} ${pageNumCN} ${activeListCN}' data-page='${page}'>${page}</li>`;
    // 处理前后顺序关系
    for (let i = 1; i <= pageControl; i++) {
      // 处理前面
      if (page - i > 1) {
        str =
          `<li class='${listCN} ${pageNumCN}' data-page='${page - i}'>${page -
            i}</li>` + str;
      }
      // 处理后面
      if (page + i < total) {
        str =
          str +
          `<li class='${listCN} ${pageNumCN}' data-page='${page + i}'>${page +
            i}</li>`;
      }
    }
    // 前面的省略符
    if (page - (pageControl + 1) > 1) {
      str = `<li class="${listCN} page-ellipsis">...</li>` + str;
    }

    if (page > 1) {
      str =
        `<li class='${listCN} ${prevBtnCN}'>${preText}</li>
        <li class='${listCN} ${pageNumCN}' data-page='1'>1</li>
        ` + str;
    } else {
      str =
        `<li class='${listCN} ${prevBtnCN} ${disableBtnCN}'>${preText}</li>
      ` + str;
    }

    // 后面的省略符
    if (page + (pageControl + 1) < total) {
      str += `<li class="${listCN} page-ellipsis">...</li>`;
    }

    if (page < total) {
      str += `<li class='${listCN} ${pageNumCN}' data-page='${total}'>${total}</li>
        <li class='${listCN} ${nextBtnCN}'>${nextText}</li>
        `;
    } else {
      str += `<li class='${listCN} ${nextBtnCN} ${disableBtnCN}'>${nextText}</li>`;
    }

    return str;
  }

  /**
    * @method destroyed
    * 销毁节点
    */
  destroyed() {
    this.domRefs.containerNode.removeEventListener('click', this.clickHandle, false);
    this.opts.baseNode.removeChild(this.domRefs.containerNode);
    this.clickHandle = null;
  }
}
