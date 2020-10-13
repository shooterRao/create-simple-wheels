# simplewheels

[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Q&A

Q: How to use?

A:

```
npm i simplewheels
```

or

```
yarn add simplewheels
```

```js
import {
  simpleAnimate,
  simplePagination,
  simplePollingAction,
  simpleTree,
  simpleAjax
  } from simplewheels;

// 进入各组件文档查阅使用方式
```

Q: 为什么要开这个项目？

A: 最近在做项目的时候，开始尝试自己写轮子(组件)，并已经开始投入使用，在此过程中学到了很多。有人说尽量不要反复造轮子，有能用的轮子就行。但是，我认为，只会用别人造好的轮子，调别人写好的api，只会让你越来越迷茫，况且，在使用的过程中，如果出了bug，与产品需求不符合，还不是得改？有位前端大神说，造轮子目的是为了学习，只有不断反复去学着造轮子，你才能有所突破。所谓的轮子，不仅是组件，还包括框架。开这个项目主要是记录自己学习造轮子的过程。

Q: 目前造了多少个轮子了？

A:

1.[树组件 轻松渲染3000+节点](https://github.com/shooterRao/create-simple-wheels/tree/master/src/simpleTree)

2.[分页组件](https://github.com/shooterRao/create-simple-wheels/tree/master/src/simplePagination)

3.[迷你动画库](https://github.com/shooterRao/create-simple-wheels/tree/master/src/simpleAnimate)

4.[轮询工具类](https://github.com/shooterRao/create-simple-wheels/tree/master/src/simplePollingAction)

5.[ajax请求库](https://github.com/shooterRao/create-simple-wheels/tree/master/src/simpleAjax)

Q: 技术栈和编译工具？

A: ~~原生`ES6+`~~ `typeScript`，`less`，配合`rollup`打包工具，编译成`UMD`规范

Q: 如何运行？

A: `git clone git@github.com:shooterRao/create-simple-wheels.git`

`yarn`

开发`yarn dev`

生产`yarn build`

打包全部文件 `yarn buildAll`
