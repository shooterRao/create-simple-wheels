## 不到 1kb 的小型动画库

[预览 DEMO](http://shooterblog.site/create-simple-wheels/src/Animate/index.html)

How to use?

```javascript

// play api执行动画
// 接受一个对象
/*
  {
    from: 开始值, (默认0)
    to: 目标值, (默认1000)
    during: 持续时间, (默认300ms)
    type: 动画函数 (默认'easeInQuad')
    callback: 回调
  }
*/

import { simpleAnimate } from 'simplewheels';

simpleAnimate.play({
  to: 100,
  from: 0,
  during: 2000,
  callback(v) {

  }
})

// 内置只有2个动画算法，你可以拓展
// 需要增加动画算法参考 https://github.com/zhangxinxu/Tween/blob/master/tween.js
simpleAnimate.extend({
  easeInCubic(t, b, c, d) {
		return c*(t/=d)*t*t + b;
  },
  easeOutCubic(t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
})

simpleAnimate.play({
  to: 100,
  from: 0,
  during: 2000,
  type: 'easeInCubic',
  callback(v) {

  }
}).then(() => {
  // 动画完成...
})

```

更多配置信息请参考`index.ts`和`index.html`
